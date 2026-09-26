const fs = require('fs');
const invRaw = fs.readFileSync('src/data/pageInventory.ts', 'utf8');
const match = invRaw.match(/export const wordPressPagesInventory: WordPressPageRecord\[\] = (\[[\s\S]+?\]);\s*\n/);
const inventory = JSON.parse(match[1]);
const validSlugs = new Set(inventory.map(i => i.slug));

const dirRaw = fs.readFileSync('src/data/locationsDirectory.ts', 'utf8');
const routeMatches = Array.from(dirRaw.matchAll(/route:\s*"\/([^"]+)"/g)).map(m => m[1]);

console.log('Total route links in locationsDirectory:', routeMatches.length);
const invalid = routeMatches.filter(r => !validSlugs.has(r));
console.log('Invalid/missing routes in locationsDirectory (' + invalid.length + '):', invalid);
