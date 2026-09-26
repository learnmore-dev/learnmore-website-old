function getLocationSearchVariants(location) {
  if (!location) return ["bangalore"];
  const clean = location.trim().toLowerCase();
  const variants = new Set();
  variants.add(clean);
  if (clean.includes("btm")) {
    variants.add("btm");
    variants.add("btm layout");
    variants.add("btm 1st stage");
    variants.add("btm 2nd stage");
  }
  if (clean.includes("marathahalli") || clean.includes("marathalli")) {
    variants.add("marathahalli");
    variants.add("marathalli");
  }
  if (clean.includes("kalyan nagar") || clean.includes("kalyannagar")) {
    variants.add("kalyan nagar");
    variants.add("kalyannagar");
  }
  variants.add("bangalore");
  return Array.from(variants);
}

function generateCourseLocationKeywords(courseName, locationName, categoryName) {
  const c = courseName.trim().toLowerCase().replace(/ training| course| certification/gi, "");
  const locVariants = getLocationSearchVariants(locationName);
  const keywords = new Set();

  for (const loc of locVariants) {
    keywords.add(`${c} training ${loc}`);
    keywords.add(`${c} course ${loc}`);
    keywords.add(`${c} classes ${loc}`);
    keywords.add(`${c} institute ${loc}`);
    keywords.add(`best ${c} training ${loc}`);
    keywords.add(`best ${c} course ${loc}`);
    keywords.add(`best ${c} training institute in ${loc}`);
    keywords.add(`${c} training in ${loc}`);
    keywords.add(`${c} course in ${loc}`);
    keywords.add(`${c} classes in ${loc}`);
    keywords.add(`${c} training with placement in ${loc}`);
    keywords.add(`${c} coaching center in ${loc}`);
    keywords.add(`${c} certification in ${loc}`);
    keywords.add(`learn ${c} in ${loc}`);
    keywords.add(`${c} classroom training ${loc}`);
    keywords.add(`${c} offline training ${loc}`);
    keywords.add(`top ${c} institute ${loc}`);
  }

  if (categoryName) {
    const cat = categoryName.toLowerCase();
    keywords.add(`${cat} training in ${locationName.toLowerCase()}`);
    keywords.add(`${cat} courses in ${locationName.toLowerCase()}`);
  }

  keywords.add(`software training institute in ${locationName.toLowerCase()}`);
  keywords.add(`best IT training institute in ${locationName.toLowerCase()}`);
  keywords.add(`100% placement training in ${locationName.toLowerCase()}`);
  keywords.add(`learnmore technologies ${locationName.toLowerCase()}`);

  return Array.from(keywords);
}

console.log("=== SAMPLE KEYWORDS FOR PYTHON IN BTM ===");
const pythonBtm = generateCourseLocationKeywords("Python Full Stack", "BTM Layout", "Programming");
console.log(`Generated ${pythonBtm.length} keywords:`);
console.log(pythonBtm.slice(0, 20));

console.log("\n=== SAMPLE KEYWORDS FOR AWS IN MARATHAHALLI ===");
const awsMarathahalli = generateCourseLocationKeywords("AWS Solutions Architect", "Marathahalli", "Cloud Computing");
console.log(`Generated ${awsMarathahalli.length} keywords:`);
console.log(awsMarathahalli.slice(0, 15));
