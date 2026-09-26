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

// Ensure reports directory exists
const reportsDir = path.join(__dirname, '../reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Print Core Courses (non -in-)
console.log('=== CORE COURSES (28) ===');
const coreCourses = records.filter(r => !r.slug.includes('-in-') && !['home', 'about-us', 'contact-us', 'contact', 'become-a-teacher', 'courses', 'corporate-trainings', 'corporate-training', 'trainers', 'thank-you', 'lp-term-conditions', 'lp-checkout', 'lp-profile', 'testimonial', 'blog', 'new', 'c', 'p', 'instructors', 'instructor', 'syallabus', 'sap-fico-syllabus', 'artificial-intelligence-syllabus'].includes(r.slug));
coreCourses.forEach(c => console.log(`[${c.id}] ${c.slug} -> "${c.title}"`));

console.log('\n=== STATIC & UTILITY PAGES (19) ===');
const staticPages = records.filter(r => ['home', 'about-us', 'contact-us', 'contact', 'become-a-teacher', 'courses', 'corporate-trainings', 'corporate-training', 'trainers', 'thank-you', 'lp-term-conditions', 'lp-checkout', 'lp-profile', 'testimonial', 'blog', 'new', 'c', 'p', 'instructors', 'instructor', 'syallabus'].includes(r.slug) || r.url === 'https://learnmoretechnologies.in/');
staticPages.forEach(s => console.log(`[${s.id}] ${s.slug} -> "${s.title}" (${s.url})`));

console.log('\n=== SYLLABUS PAGES (2) ===');
const syllabusPages = records.filter(r => r.slug.includes('-syllabus'));
syllabusPages.forEach(s => console.log(`[${s.id}] ${s.slug} -> "${s.title}"`));

// Extract unique locations from course-location pages
const locationSet = new Set();
const courseInLocRecords = records.filter(r => r.slug.includes('-in-'));
courseInLocRecords.forEach(r => {
  const parts = r.slug.split('-in-');
  const loc = parts.slice(1).join('-in-');
  locationSet.add(loc);
});

console.log('\n=== UNIQUE EXTRACTED LOCATIONS FROM 466 COURSE-LOCATION ROWS (' + locationSet.size + ') ===');
console.log(Array.from(locationSet).sort().join(', '));
