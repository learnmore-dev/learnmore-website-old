const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'wordpress-pages.csv');
const invPath = path.join(__dirname, '..', 'src', 'data', 'pageInventory.ts');
const reportsDir = path.join(__dirname, '..', 'reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// 1. Read and parse CSV
const csvRaw = fs.readFileSync(csvPath, 'utf8');
const lines = csvRaw.split(/\r?\n/).filter(line => line.trim().length > 0);
const header = lines[0].split(',');
const rawRows = lines.slice(1);

const csvRecords = rawRows.map((line, idx) => {
  const parts = line.split(',');
  const id = parts[0].trim();
  const post_title = parts[1].trim();
  const post_name = parts[2].trim();
  const url = parts.slice(3).join(',').trim();
  return { lineNum: idx + 2, id, post_title, post_name, url };
});

// 2. Read pageInventory.ts
const invRaw = fs.readFileSync(invPath, 'utf8');
const match = invRaw.match(/export const wordPressPagesInventory: WordPressPageRecord\[\] = (\[[\s\S]+?\]);\s*\n/);
if (!match) {
  console.error("Failed to parse wordPressPagesInventory from pageInventory.ts");
  process.exit(1);
}

let inventory;
try {
  inventory = JSON.parse(match[1]);
} catch (e) {
  console.error("JSON error parsing page inventory:", e);
  process.exit(1);
}

// 3. Perform Comprehensive Validation
const validation = {
  timestamp: new Date().toISOString(),
  sourceStats: {
    totalCsvLines: lines.length,
    headerLineCount: 1,
    csvDataRowCount: csvRecords.length,
  },
  inventoryStats: {
    totalInventoryRecords: inventory.length,
  },
  uniquenessCheck: {
    uniqueCsvIds: new Set(csvRecords.map(r => r.id)).size,
    uniqueCsvPostNames: new Set(csvRecords.map(r => r.post_name)).size,
    uniqueCsvUrls: new Set(csvRecords.map(r => r.url)).size,
    uniqueInventoryIds: new Set(inventory.map(r => r.id)).size,
    uniqueInventorySlugs: new Set(inventory.map(r => r.slug)).size,
    uniqueInventoryOriginalUrls: new Set(inventory.map(r => r.originalUrl)).size,
  },
  classificationBreakdown: {
    courseLocationPages: inventory.filter(r => r.pageType === 'COURSE_LOCATION').length,
    coreCoursePages: inventory.filter(r => r.pageType === 'CORE_COURSE').length,
    staticPages: inventory.filter(r => r.pageType === 'STATIC_PAGE').length,
    syllabusPages: inventory.filter(r => r.pageType === 'SYLLABUS').length,
    legacyUtility: inventory.filter(r => r.pageType === 'LEGACY_UTILITY').length,
  },
  migrationActionBreakdown: {
    dynamicRender: inventory.filter(r => r.migrationAction === 'DYNAMIC_RENDER').length,
    staticPage: inventory.filter(r => r.migrationAction === 'STATIC_PAGE').length,
    redirect: inventory.filter(r => r.migrationAction === 'REDIRECT').length,
  },
  completenessCheck: {
    csvToInventoryMatched: 0,
    missingInInventory: [],
    extraInInventory: [],
  },
  fieldIntegrityCheck: {
    missingId: 0,
    missingTitle: 0,
    missingSlug: 0,
    missingOriginalUrl: 0,
    missingTargetRoute: 0,
    missingSeoTitle: 0,
    missingMetaDescription: 0,
  }
};

const invMapById = new Map(inventory.map(r => [String(r.id), r]));
const invMapBySlug = new Map(inventory.map(r => [r.slug, r]));

csvRecords.forEach(csvRow => {
  const invRow = invMapById.get(String(csvRow.id));
  if (!invRow) {
    validation.completenessCheck.missingInInventory.push(csvRow);
  } else {
    validation.completenessCheck.csvToInventoryMatched++;
    if (invRow.slug !== csvRow.post_name) {
      console.warn(`Mismatch slug for ID ${csvRow.id}: CSV="${csvRow.post_name}" vs Inv="${invRow.slug}"`);
    }
  }
});

const csvIdSet = new Set(csvRecords.map(r => String(r.id)));
inventory.forEach(invRow => {
  if (!csvIdSet.has(String(invRow.id))) {
    validation.completenessCheck.extraInInventory.push(invRow);
  }
  if (!invRow.id) validation.fieldIntegrityCheck.missingId++;
  if (!invRow.postTitle) validation.fieldIntegrityCheck.missingTitle++;
  if (!invRow.slug) validation.fieldIntegrityCheck.missingSlug++;
  if (!invRow.originalUrl) validation.fieldIntegrityCheck.missingOriginalUrl++;
  if (!invRow.targetRoute) validation.fieldIntegrityCheck.missingTargetRoute++;
  if (!invRow.seoTitle) validation.fieldIntegrityCheck.missingSeoTitle++;
  if (!invRow.metaDescription) validation.fieldIntegrityCheck.missingMetaDescription++;
});

validation.is100PercentComplete = (
  validation.sourceStats.csvDataRowCount === 515 &&
  validation.inventoryStats.totalInventoryRecords === 515 &&
  validation.completenessCheck.csvToInventoryMatched === 515 &&
  validation.completenessCheck.missingInInventory.length === 0 &&
  validation.completenessCheck.extraInInventory.length === 0 &&
  validation.uniquenessCheck.uniqueCsvIds === 515 &&
  validation.uniquenessCheck.uniqueInventoryIds === 515 &&
  validation.uniquenessCheck.uniqueInventorySlugs === 515 &&
  validation.fieldIntegrityCheck.missingId === 0 &&
  validation.fieldIntegrityCheck.missingTitle === 0 &&
  validation.fieldIntegrityCheck.missingSlug === 0 &&
  validation.fieldIntegrityCheck.missingOriginalUrl === 0 &&
  validation.fieldIntegrityCheck.missingTargetRoute === 0 &&
  validation.fieldIntegrityCheck.missingSeoTitle === 0 &&
  validation.fieldIntegrityCheck.missingMetaDescription === 0
);

// Save report JSON
const reportPath = path.join(reportsDir, 'wordpress-page-validation.json');
fs.writeFileSync(reportPath, JSON.stringify(validation, null, 2), 'utf8');

console.log("==================================================");
console.log(" WORDPRESS PAGE INVENTORY VALIDATION RESULT");
console.log("==================================================");
console.log(`Source CSV Data Rows : ${validation.sourceStats.csvDataRowCount}`);
console.log(`Inventory Records   : ${validation.inventoryStats.totalInventoryRecords}`);
console.log(`Matched Records     : ${validation.completenessCheck.csvToInventoryMatched}`);
console.log(`Missing Records     : ${validation.completenessCheck.missingInInventory.length}`);
console.log(`Extra Records       : ${validation.completenessCheck.extraInInventory.length}`);
console.log("--- Breakdown by Page Type ---");
console.log(` - Course + Location: ${validation.classificationBreakdown.courseLocationPages}`);
console.log(` - Core Courses     : ${validation.classificationBreakdown.coreCoursePages}`);
console.log(` - Static Pages     : ${validation.classificationBreakdown.staticPages}`);
console.log(` - Syllabus Pages   : ${validation.classificationBreakdown.syllabusPages}`);
console.log("--- Breakdown by Migration Action ---");
console.log(` - Dynamic Template : ${validation.migrationActionBreakdown.dynamicRender}`);
console.log(` - Static Page       : ${validation.migrationActionBreakdown.staticPage}`);
console.log(` - Redirect Rule    : ${validation.migrationActionBreakdown.redirect}`);
console.log("--------------------------------------------------");
console.log(`100% COMPLETE & VERIFIED: ${validation.is100PercentComplete ? 'PASSED (YES)' : 'FAILED (NO)'}`);
console.log(`Report written to: ${reportPath}`);
console.log("==================================================");
