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

const raw = fs.readFileSync(path.join(__dirname, '../wordpress-pages.csv'), 'utf8').trim();
const lines = raw.split(/\r?\n/).filter(l => l.trim().length > 0);

const records = [];
for (let i = 1; i < lines.length; i++) {
  const [id, title, slug, url] = parseCSVLine(lines[i]);
  records.push({ id: id.trim(), title: title.trim(), slug: slug.trim(), url: url.trim() });
}

console.log('Total records:', records.length);

// Sample analysis
const types = {
  course_location: [],
  course: [],
  static_business: [],
  syllabus: [],
  legacy_unknown: []
};

records.forEach(r => {
  const slug = r.slug.toLowerCase();
  const title = r.title.toLowerCase();

  if (slug === 'home' || r.url === 'https://learnmoretechnologies.in/') {
    types.static_business.push({ ...r, type: 'HOME' });
  } else if (['about-us', 'contact-us', 'contact', 'become-a-teacher', 'courses', 'corporate-trainings', 'corporate-training', 'trainers', 'thank-you', 'lp-term-conditions', 'lp-checkout', 'lp-profile', 'testimonial', 'blog', 'new', 'c', 'p', 'instructors', 'instructor'].includes(slug)) {
    types.static_business.push({ ...r, type: 'STATIC' });
  } else if (slug.includes('-syllabus')) {
    types.syllabus.push({ ...r, type: 'SYLLABUS' });
  } else if (slug.includes('-in-')) {
    types.course_location.push({ ...r, type: 'COURSE_LOCATION' });
  } else {
    types.course.push({ ...r, type: 'COURSE' });
  }
});

console.log('Classifications:');
console.log('  Course + Location:', types.course_location.length);
console.log('  Core Course Pages:', types.course.length);
console.log('  Static / Business Pages:', types.static_business.length);
console.log('  Syllabus Pages:', types.syllabus.length);

fs.writeFileSync(path.join(__dirname, '../scratch/parsed-inventory.json'), JSON.stringify({
  total: records.length,
  records,
  counts: {
    course_location: types.course_location.length,
    course: types.course.length,
    static_business: types.static_business.length,
    syllabus: types.syllabus.length
  }
}, null, 2));

console.log('Saved scratch/parsed-inventory.json');
