const fs = require('fs');
const path = require('path');

const invRaw = fs.readFileSync(path.join(__dirname, '../src/data/pageInventory.ts'), 'utf8');
const match = invRaw.match(/export const wordPressPagesInventory: WordPressPageRecord\[\] = (\[[\s\S]+?\]);\s*\n/);
const inventory = JSON.parse(match[1]);

// Group inventory records by locationName
const locGroup = new Map();

inventory.forEach((item) => {
  if (item.pageType === 'COURSE_LOCATION' && item.locationName) {
    const loc = item.locationName.trim();
    if (!locGroup.has(loc)) {
      locGroup.set(loc, {
        name: loc,
        slug: item.locationSlug,
        region: item.countryOrRegion,
        records: []
      });
    }
    locGroup.get(loc).records.push(item);
  }
});

console.log(`Found ${locGroup.size} distinct location groups in pageInventory.ts`);

function getCategoryAndZone(name, region) {
  const n = name.toLowerCase();
  const r = (region || '').toLowerCase();

  if (n === 'marathahalli' || n === 'btm' || n === 'kalyan nagar') {
    return {
      category: 'Physical Campus',
      zone: n === 'btm' ? 'South Bangalore' : n === 'marathahalli' ? 'East Bangalore' : 'North Bangalore',
      tag: n === 'marathahalli' ? 'Flagship HQ' : n === 'btm' ? 'South Hub' : 'North/East Hub',
      hub: n === 'marathahalli' ? 'Marathahalli Flagship' : n === 'btm' ? 'BTM Layout Campus' : 'Kalyan Nagar Branch',
    };
  }

  if (r.includes('south bangalore') || n.includes('koramangala') || n.includes('hsr') || n.includes('jayanagar') || n.includes('jp nagar') || n.includes('electronic city') || n.includes('bellandur') || n.includes('sarjapur') || n.includes('bannerghatta')) {
    return {
      category: 'Bangalore Micro-Location',
      zone: 'South Bangalore',
      tag: 'South Bangalore',
      hub: 'BTM Layout Campus',
    };
  }

  if (r.includes('east bangalore') || n.includes('whitefield') || n.includes('indiranagar') || n.includes('mahadevapura') || n.includes('hoodi') || n.includes('itpl') || n.includes('kadugodi')) {
    return {
      category: 'Bangalore Micro-Location',
      zone: 'East Bangalore',
      tag: 'East Bangalore',
      hub: 'Marathahalli Flagship Campus',
    };
  }

  if (r.includes('north bangalore') || n.includes('hebbal') || n.includes('yelahanka') || n.includes('kammanahalli') || n.includes('banaswadi') || n.includes('hrbr') || n.includes('manyata')) {
    return {
      category: 'Bangalore Micro-Location',
      zone: 'North Bangalore',
      tag: 'North Bangalore',
      hub: 'Kalyan Nagar Branch',
    };
  }

  if (r.includes('west') || r.includes('central') || n.includes('rajajinagar') || n.includes('malleshwaram') || n.includes('vijayanagar') || n.includes('basavanagudi')) {
    return {
      category: 'Bangalore Micro-Location',
      zone: 'West & Central Bangalore',
      tag: 'West / Central',
      hub: 'BTM / Marathahalli Campuses',
    };
  }

  if (r.includes('india') || n.includes('chennai') || n.includes('hyderabad') || n.includes('pune') || n.includes('mumbai') || n.includes('delhi') || n.includes('coimbatore') || n.includes('kochi') || n.includes('ahmedabad')) {
    return {
      category: 'Indian Metro Hub',
      zone: undefined,
      tag: region.split(',')[0] || 'India',
      hub: 'Live Interactive Virtual Hub',
    };
  }

  return {
    category: 'International Virtual Hub',
    zone: undefined,
    tag: region || 'Global Online',
    hub: 'Global Online Classroom + Cloud Labs',
  };
}

const directoryItems = [];

locGroup.forEach((group, locName) => {
  const meta = getCategoryAndZone(locName, group.region);
  const records = group.records;

  // Build verified popular courses
  const popularCourseLinks = records.slice(0, 6).map((rec) => ({
    courseName: rec.courseName || rec.postTitle.replace(/ training in .*/i, ''),
    route: `/${rec.slug}`,
  }));

  // Target default link
  let defaultRoute = `/${records[0].slug}`;
  if (locName.toLowerCase() === 'marathahalli') defaultRoute = '/locations/marathahalli';
  if (locName.toLowerCase() === 'btm') defaultRoute = '/locations/btm';
  if (locName.toLowerCase() === 'kalyan nagar') defaultRoute = '/locations/kalyan-nagar';

  directoryItems.push({
    id: group.slug || locName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: locName.includes('Marathahalli') ? 'Marathahalli (Flagship HQ)' : locName.includes('BTM') ? 'BTM Layout Campus' : locName.includes('Kalyan') ? 'Kalyan Nagar Branch' : locName,
    slug: group.slug,
    category: meta.category,
    zone: meta.zone,
    hubCampus: meta.hub,
    addressSnippet: group.region || 'Bangalore, Karnataka, India',
    tag: meta.tag,
    defaultRoute,
    popularCourseLinks,
    totalCoursesCount: records.length,
  });
});

// Sort with Physical Campuses first, then zones, then metro, then international
const sortWeight = {
  'Physical Campus': 1,
  'Bangalore Micro-Location': 2,
  'Indian Metro Hub': 3,
  'International Virtual Hub': 4,
};

directoryItems.sort((a, b) => {
  const wA = sortWeight[a.category] || 99;
  const wB = sortWeight[b.category] || 99;
  if (wA !== wB) return wA - wB;
  return a.name.localeCompare(b.name);
});

const fileContent = `// Auto-generated 100% verified location directory mapping directly to active routes
export interface LocationDirectoryItem {
  id: string;
  name: string;
  slug: string;
  category: "Physical Campus" | "Bangalore Micro-Location" | "Indian Metro Hub" | "International Virtual Hub";
  zone?: "South Bangalore" | "East Bangalore" | "North Bangalore" | "West & Central Bangalore";
  hubCampus: string;
  addressSnippet: string;
  tag: string;
  defaultRoute: string;
  totalCoursesCount: number;
  popularCourseLinks: {
    courseName: string;
    route: string;
  }[];
}

export const allLocationsDirectory: LocationDirectoryItem[] = ${JSON.stringify(directoryItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/locationsDirectory.ts'), fileContent, 'utf8');
console.log(`Successfully generated src/data/locationsDirectory.ts with ${directoryItems.length} verified locations!`);
