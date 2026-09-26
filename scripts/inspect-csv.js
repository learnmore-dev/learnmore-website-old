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

console.log('Total lines in file:', lines.length);
const header = parseCSVLine(lines[0]);
console.log('Header:', header);

const records = [];
const ids = new Set();
const slugs = new Set();
const urls = new Set();

for (let i = 1; i < lines.length; i++) {
  const cols = parseCSVLine(lines[i]);
  if (cols.length < 4) {
    console.error(`Row ${i} invalid cols count:`, cols);
    continue;
  }
  const id = cols[0].trim();
  const title = cols[1].trim();
  const slug = cols[2].trim();
  const url = cols[3].trim();

  records.push({ id, title, slug, url });
  ids.add(id);
  slugs.add(slug);
  urls.add(url);
}

console.log('Parsed records count:', records.length);
console.log('Unique IDs count:', ids.size);
console.log('Unique Slugs count:', slugs.size);
console.log('Unique URLs count:', urls.size);
