const fs = require('fs');
const invRaw = fs.readFileSync('src/data/pageInventory.ts', 'utf8');
const match = invRaw.match(/export const wordPressPagesInventory: WordPressPageRecord\[\] = (\[[\s\S]+?\]);\s*\n/);
const inventory = JSON.parse(match[1]);

const coursesRaw = fs.readFileSync('src/data/courses.ts', 'utf8');
const courseSlugs = Array.from(coursesRaw.matchAll(/slug:\s*"([^"]+)"/g)).map(m => m[1]);
console.log('Available Course slugs in courses.ts:', courseSlugs);

const invCourseSlugs = new Set(inventory.map(i => i.courseSlug).filter(Boolean));
console.log('Unique course slugs in inventory (' + invCourseSlugs.size + '):', Array.from(invCourseSlugs));

const missing = Array.from(invCourseSlugs).filter(s => !courseSlugs.includes(s));
console.log('Course slugs in inventory not in courses.ts (' + missing.length + '):', missing);
