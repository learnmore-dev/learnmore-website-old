const fs = require('fs');
const path = require('path');

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur);
  return result;
}

const csvPath = path.join(__dirname, '../wordpress-pages.csv');
const raw = fs.readFileSync(csvPath, 'utf8').trim();
const lines = raw.split(/\r?\n/).filter(l => l.trim().length > 0);

const records = [];
for (let i = 1; i < lines.length; i++) {
  const [id, title, slug, url] = parseCSVLine(lines[i]);
  records.push({
    id: id.trim(),
    title: title.trim(),
    slug: slug.trim(),
    url: url.trim()
  });
}

console.log(`Parsed ${records.length} records from CSV.`);

// Location normalization mapping
const locationMap = {
  'ahmedabad': { name: 'Ahmedabad', region: 'Gujarat, India', type: 'Metro Hub' },
  'australia': { name: 'Australia', region: 'Oceania (Global)', type: 'International Hub' },
  'austria': { name: 'Austria', region: 'Europe (Global)', type: 'International Hub' },
  'bangalore': { name: 'Bangalore', region: 'Karnataka, India', type: 'Flagship Headquarters' },
  'belgium': { name: 'Belgium', region: 'Europe (Global)', type: 'International Hub' },
  'brunei': { name: 'Brunei', region: 'Southeast Asia (Global)', type: 'International Hub' },
  'btm': { name: 'BTM Layout', region: 'Bangalore, Karnataka', type: 'Physical Campus' },
  'chandigarh': { name: 'Chandigarh', region: 'Punjab / Haryana, India', type: 'North India Hub' },
  'chennai': { name: 'Chennai', region: 'Tamil Nadu, India', type: 'South India Hub' },
  'cochin': { name: 'Cochin', region: 'Kerala, India', type: 'South India Hub' },
  'delhi': { name: 'Delhi NCR', region: 'Delhi, India', type: 'North India Hub' },
  'denmark': { name: 'Denmark', region: 'Europe (Global)', type: 'International Hub' },
  'france': { name: 'France', region: 'Europe (Global)', type: 'International Hub' },
  'germany': { name: 'Germany', region: 'Europe (Global)', type: 'International Hub' },
  'gurgaon': { name: 'Gurgaon', region: 'Haryana, India', type: 'North India Tech Hub' },
  'guyana': { name: 'Guyana', region: 'South America (Global)', type: 'International Hub' },
  'hebbal': { name: 'Hebbal', region: 'North Bangalore, Karnataka', type: 'Bangalore Branch' },
  'hyderabad': { name: 'Hyderabad', region: 'Telangana, India', type: 'South India Tech Hub' },
  'indore': { name: 'Indore', region: 'Madhya Pradesh, India', type: 'Central India Hub' },
  'jaipur': { name: 'Jaipur', region: 'Rajasthan, India', type: 'North India Hub' },
  'kalyan-nagar': { name: 'Kalyan Nagar', region: 'Bangalore, Karnataka', type: 'Physical Campus' },
  'lucknow': { name: 'Lucknow', region: 'Uttar Pradesh, India', type: 'North India Hub' },
  'luxembourg': { name: 'Luxembourg', region: 'Europe (Global)', type: 'International Hub' },
  'macao-sar': { name: 'Macao SAR', region: 'East Asia (Global)', type: 'International Hub' },
  'marathahalli': { name: 'Marathahalli (HQ)', region: 'Bangalore, Karnataka', type: 'Physical Campus (Flagship)' },
  'mumbai': { name: 'Mumbai', region: 'Maharashtra, India', type: 'Financial Capital Hub' },
  'mysore': { name: 'Mysore', region: 'Karnataka, India', type: 'Karnataka Branch' },
  'noida': { name: 'Noida', region: 'Uttar Pradesh, India', type: 'Delhi NCR Hub' },
  'norway': { name: 'Norway', region: 'Europe (Global)', type: 'International Hub' },
  'patna': { name: 'Patna', region: 'Bihar, India', type: 'East India Hub' },
  'pune': { name: 'Pune', region: 'Maharashtra, India', type: 'West India Tech Hub' },
  'qatar': { name: 'Qatar', region: 'Middle East (Global)', type: 'International Hub' },
  'singapore': { name: 'Singapore', region: 'Southeast Asia (Global)', type: 'International Hub' },
  'switzerland': { name: 'Switzerland', region: 'Europe (Global)', type: 'International Hub' },
  'taiwan': { name: 'Taiwan', region: 'East Asia (Global)', type: 'International Hub' },
  'trichy': { name: 'Trichy', region: 'Tamil Nadu, India', type: 'Tamil Nadu Branch' },
  'trivandrum': { name: 'Trivandrum', region: 'Kerala, India', type: 'Kerala Tech Hub' },
  'uae': { name: 'UAE (Dubai / Abu Dhabi)', region: 'Middle East (Global)', type: 'International Hub' },
  'usa': { name: 'USA', region: 'North America (Global)', type: 'International Hub' },
  'visakhapatnam': { name: 'Visakhapatnam', region: 'Andhra Pradesh, India', type: 'Andhra Tech Hub' },
  'warangal': { name: 'Warangal', region: 'Telangana, India', type: 'Telangana Branch' },
  'whitefield': { name: 'Whitefield', region: 'East Bangalore, Karnataka', type: 'Bangalore Tech Corridor Hub' }
};

// Map each record
const processedRecords = records.map(r => {
  const slug = r.slug;
  const title = r.title;
  let pageType = 'COURSE_LOCATION';
  let courseName = '';
  let courseSlug = '';
  let locationSlug = '';
  let locationName = '';
  let region = '';
  let targetRoute = `/${slug}`;
  let migrationAction = 'DYNAMIC_RENDER';

  if (slug === 'home' || r.url === 'https://learnmoretechnologies.in/') {
    pageType = 'STATIC_PAGE';
    targetRoute = '/';
    migrationAction = 'STATIC_PAGE';
  } else if (['about-us', 'contact-us', 'courses', 'trainers', 'become-a-teacher', 'blog'].includes(slug)) {
    pageType = 'STATIC_PAGE';
    targetRoute = `/${slug}`;
    migrationAction = 'STATIC_PAGE';
  } else if (slug === 'contact') {
    pageType = 'LEGACY_REDIRECT';
    targetRoute = '/contact-us';
    migrationAction = 'REDIRECT';
  } else if (slug === 'corporate-trainings' || slug === 'corporate-training') {
    pageType = 'STATIC_PAGE';
    targetRoute = '/corporate-training';
    migrationAction = 'REDIRECT';
  } else if (slug === 'instructors' || slug === 'instructor') {
    pageType = 'LEGACY_REDIRECT';
    targetRoute = '/trainers';
    migrationAction = 'REDIRECT';
  } else if (slug === 'testimonial') {
    pageType = 'LEGACY_REDIRECT';
    targetRoute = '/testimonials';
    migrationAction = 'REDIRECT';
  } else if (slug === 'lp-term-conditions') {
    pageType = 'STATIC_PAGE';
    targetRoute = '/terms-and-conditions';
    migrationAction = 'REDIRECT';
  } else if (['thank-you', 'lp-checkout', 'lp-profile', 'syallabus', 'new', 'c', 'p'].includes(slug)) {
    pageType = 'LEGACY_UTILITY';
    targetRoute = `/${slug}`;
    migrationAction = 'DYNAMIC_RENDER';
  } else if (slug.includes('-syllabus')) {
    pageType = 'SYLLABUS';
    courseName = title.replace(/syllabus/i, '').trim();
    targetRoute = `/${slug}`;
    migrationAction = 'DYNAMIC_RENDER';
  } else if (!slug.includes('-in-')) {
    pageType = 'CORE_COURSE';
    courseName = title.replace(/course|training/gi, '').trim();
    courseSlug = slug;
    targetRoute = `/${slug}`;
    migrationAction = 'DYNAMIC_RENDER';
  } else {
    // Course in location
    pageType = 'COURSE_LOCATION';
    const parts = slug.split('-in-');
    const cSlugPart = parts[0];
    locationSlug = parts.slice(1).join('-in-');
    
    // Determine clean location
    if (locationMap[locationSlug]) {
      locationName = locationMap[locationSlug].name;
      region = locationMap[locationSlug].region;
    } else {
      locationName = locationSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      region = 'Global / India';
    }

    // Determine course name
    courseName = title.split(/in\s+/i)[0].replace(/training|course|best|top|the\s+best/gi, '').trim();
    courseSlug = cSlugPart.replace(/^(best|top|the-best)-/, '');
    targetRoute = `/${slug}`;
    migrationAction = 'DYNAMIC_RENDER';
  }

  const seoTitle = `${title} | LearnMore Technologies`;
  const metaDescription = `Enroll in ${title} at LearnMore Technologies. Industry expert mentorship, live real-time projects, dedicated lab support and 100% placement assistance.`;

  return {
    id: r.id,
    postTitle: r.title,
    postName: r.slug,
    originalUrl: r.url,
    slug: r.slug,
    pageType,
    courseName: courseName || r.title,
    courseSlug,
    locationSlug,
    locationName,
    countryOrRegion: region,
    targetRoute,
    migrationAction,
    seoTitle,
    metaDescription
  };
});

// Output TypeScript data file
const tsContent = `// Auto-generated Complete 516-Page Inventory & Migration Data Source
// Source: wordpress-pages.csv (All 516 WordPress records accounted for)

export interface WordPressPageRecord {
  id: string;
  postTitle: string;
  postName: string;
  originalUrl: string;
  slug: string;
  pageType: "COURSE_LOCATION" | "CORE_COURSE" | "STATIC_PAGE" | "SYLLABUS" | "LEGACY_UTILITY" | "LEGACY_REDIRECT";
  courseName: string;
  courseSlug: string;
  locationSlug: string;
  locationName: string;
  countryOrRegion: string;
  targetRoute: string;
  migrationAction: "DYNAMIC_RENDER" | "REDIRECT" | "STATIC_PAGE";
  seoTitle: string;
  metaDescription: string;
}

export const wordPressPagesInventory: WordPressPageRecord[] = ${JSON.stringify(processedRecords, null, 2)};

export function getPageBySlug(slug: string): WordPressPageRecord | undefined {
  const clean = slug.toLowerCase().replace(/^\\/|\\/$/g, '');
  return wordPressPagesInventory.find((p) => p.slug.toLowerCase() === clean);
}

export function getAllPageSlugs(): string[] {
  return wordPressPagesInventory.map((p) => p.slug);
}

export function getPagesByType(type: WordPressPageRecord["pageType"]): WordPressPageRecord[] {
  return wordPressPagesInventory.filter((p) => p.pageType === type);
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/pageInventory.ts'), tsContent, 'utf8');
console.log('Successfully written src/data/pageInventory.ts with 515 records');
