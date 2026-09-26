/**
 * SEO Keyword Generator Utility for LearnMore Technologies
 * Generates high-intent local & global search terms, e.g.:
 * - "python training btm"
 * - "python training in btm"
 * - "python course btm"
 * - "python course in btm layout"
 * - "best python training institute btm"
 * - "python classes in btm"
 * - "python training with placement btm"
 */

export interface KeywordGenerationOptions {
  courseName: string;
  locationName?: string;
  categoryName?: string;
  extraTerms?: string[];
}

/**
 * Normalizes location name to clean search tokens
 * e.g., "BTM Layout" -> ["btm", "btm layout"]
 * e.g., "Marathahalli" -> ["marathahalli"]
 * e.g., "Kalyan Nagar" -> ["kalyan nagar", "kalyannagar"]
 */
export function getLocationSearchVariants(location: string): string[] {
  if (!location) return ["bangalore"];

  const clean = location.trim().toLowerCase();
  const variants = new Set<string>();

  variants.add(clean);

  // Common Bangalore micro-location synonyms
  if (clean.includes("btm")) {
    variants.add("btm");
    variants.add("btm layout");
    variants.add("btm 1st stage");
    variants.add("btm 2nd stage");
  }
  if (clean.includes("marathahalli") || clean.includes("marathalli")) {
    variants.add("marathahalli");
    variants.add("marathalli");
    variants.add("marathahalli bridge");
  }
  if (clean.includes("kalyan nagar") || clean.includes("kalyannagar")) {
    variants.add("kalyan nagar");
    variants.add("kalyannagar");
    variants.add("hrbr layout");
    variants.add("kammanahalli");
  }
  if (clean.includes("electronic city") || clean.includes("ecity")) {
    variants.add("electronic city");
    variants.add("electronic city phase 1");
    variants.add("ecity");
  }
  if (clean.includes("whitefield")) {
    variants.add("whitefield");
    variants.add("itpl");
    variants.add("kadugodi");
  }
  if (clean.includes("hsr")) {
    variants.add("hsr");
    variants.add("hsr layout");
    variants.add("hsr sector 1");
  }
  if (clean.includes("koramangala")) {
    variants.add("koramangala");
    variants.add("koramangala 5th block");
  }
  if (clean.includes("indiranagar")) {
    variants.add("indiranagar");
    variants.add("indira nagar");
  }
  if (clean.includes("jayanagar")) {
    variants.add("jayanagar");
    variants.add("jayanagar 4th block");
  }
  if (clean.includes("rajajinagar")) {
    variants.add("rajajinagar");
    variants.add("rajaji nagar");
  }

  // Always include bangalore for local micro-locations
  variants.add("bangalore");

  return Array.from(variants);
}

/**
 * Generates a rich, comprehensive array of high-converting SEO keywords for Course + Location pages
 * Ensures top formats like "python training btm", "python course in btm", placement, fees, classroom, and near me variants.
 */
export function generateCourseLocationKeywords(
  courseName: string,
  locationName: string = "Bangalore",
  categoryName?: string
): string[] {
  const c = courseName.trim().toLowerCase().replace(/ training| course| certification/gi, "");
  const locVariants = getLocationSearchVariants(locationName);
  const keywords = new Set<string>();

  for (const loc of locVariants) {
    // 1. Core Short High-Intent Terms
    keywords.add(`${c} training ${loc}`);
    keywords.add(`${c} course ${loc}`);
    keywords.add(`${c} classes ${loc}`);
    keywords.add(`${c} institute ${loc}`);
    keywords.add(`${c} coaching ${loc}`);
    keywords.add(`${c} academy ${loc}`);

    // 2. Preposition "in [location]" Variations
    keywords.add(`${c} training in ${loc}`);
    keywords.add(`${c} course in ${loc}`);
    keywords.add(`${c} classes in ${loc}`);
    keywords.add(`${c} coaching in ${loc}`);
    keywords.add(`${c} coaching center in ${loc}`);
    keywords.add(`${c} training institute in ${loc}`);
    keywords.add(`${c} learning center in ${loc}`);
    keywords.add(`learn ${c} in ${loc}`);
    keywords.add(`study ${c} in ${loc}`);

    // 3. "Best" & "Top" Ranking Keywords
    keywords.add(`best ${c} training in ${loc}`);
    keywords.add(`best ${c} course in ${loc}`);
    keywords.add(`best ${c} classes in ${loc}`);
    keywords.add(`best ${c} training institute in ${loc}`);
    keywords.add(`best ${c} coaching center in ${loc}`);
    keywords.add(`best institute for ${c} in ${loc}`);
    keywords.add(`best ${c} certification in ${loc}`);
    keywords.add(`top ${c} institute in ${loc}`);
    keywords.add(`top ${c} course in ${loc}`);
    keywords.add(`top ${c} training institute in ${loc}`);
    keywords.add(`top 10 ${c} training institutes in ${loc}`);
    keywords.add(`top rated ${c} course in ${loc}`);
    keywords.add(`no 1 ${c} training institute in ${loc}`);

    // 4. Placement & Career-Oriented Keywords
    keywords.add(`${c} training with placement in ${loc}`);
    keywords.add(`${c} course with placement in ${loc}`);
    keywords.add(`${c} course with 100% placement in ${loc}`);
    keywords.add(`${c} training with 100% placement assistance in ${loc}`);
    keywords.add(`${c} placement training in ${loc}`);
    keywords.add(`job oriented ${c} course in ${loc}`);
    keywords.add(`${c} training for freshers in ${loc}`);
    keywords.add(`${c} course for working professionals in ${loc}`);

    // 5. Classroom, Offline & Delivery Modes
    keywords.add(`${c} classroom training in ${loc}`);
    keywords.add(`${c} classroom course ${loc}`);
    keywords.add(`${c} offline training in ${loc}`);
    keywords.add(`${c} offline classes in ${loc}`);
    keywords.add(`${c} weekend batches in ${loc}`);
    keywords.add(`${c} weekday training in ${loc}`);
    keywords.add(`${c} fast track course in ${loc}`);
    keywords.add(`${c} hands on practical training in ${loc}`);
    keywords.add(`${c} real time project training in ${loc}`);

    // 6. Professional Role & Certification
    keywords.add(`${c} developer course in ${loc}`);
    keywords.add(`${c} developer training in ${loc}`);
    keywords.add(`${c} certification course in ${loc}`);
    keywords.add(`${c} certification training in ${loc}`);
    keywords.add(`${c} certification exam preparation in ${loc}`);
    keywords.add(`${c} master course in ${loc}`);

    // 7. Local Search / "Near Me" Variants
    keywords.add(`${c} training institute near me in ${loc}`);
    keywords.add(`${c} coaching classes near me ${loc}`);
    keywords.add(`${c} course near ${loc}`);
    keywords.add(`best ${c} institute near ${loc}`);

    // 8. Commercial & Info Queries
    keywords.add(`${c} course fees in ${loc}`);
    keywords.add(`${c} course syllabus in ${loc}`);
    keywords.add(`${c} course duration in ${loc}`);
    keywords.add(`${c} training batch timings in ${loc}`);

    // 9. Brand + Location Keywords
    keywords.add(`learnmore technologies ${c} training ${loc}`);
    keywords.add(`learnmore technologies ${c} course in ${loc}`);
    keywords.add(`learnmore ${c} ${loc}`);
  }

  // Category Level keywords
  if (categoryName) {
    const cat = categoryName.toLowerCase();
    keywords.add(`${cat} training in ${locationName.toLowerCase()}`);
    keywords.add(`${cat} courses in ${locationName.toLowerCase()}`);
    keywords.add(`best ${cat} institute in ${locationName.toLowerCase()}`);
    keywords.add(`${cat} training with placement ${locationName.toLowerCase()}`);
  }

  keywords.add(`software training institute in ${locationName.toLowerCase()}`);
  keywords.add(`best IT training institute in ${locationName.toLowerCase()}`);
  keywords.add(`100% placement training in ${locationName.toLowerCase()}`);
  keywords.add(`learnmore technologies ${locationName.toLowerCase()}`);
  keywords.add(`top coding classes in ${locationName.toLowerCase()}`);

  return Array.from(keywords);
}

/**
 * Generates SEO keywords for Core Course pages
 */
export function generateCourseKeywords(
  courseTitle: string,
  categoryName?: string,
  additionalTools: string[] = []
): string[] {
  const c = courseTitle.trim().toLowerCase().replace(/ training| course| certification/gi, "");
  const primaryLocations = ["bangalore", "marathahalli", "btm", "btm layout", "kalyan nagar", "whitefield", "hebbal", "online"];
  const keywords = new Set<string>();

  // Core Course Specific
  keywords.add(`${c} training`);
  keywords.add(`${c} course`);
  keywords.add(`${c} certification course`);
  keywords.add(`${c} certification training`);
  keywords.add(`${c} training institute`);
  keywords.add(`best ${c} course`);
  keywords.add(`best ${c} training institute`);
  keywords.add(`learn ${c} online`);
  keywords.add(`${c} training with placement`);
  keywords.add(`${c} course with 100% placement`);
  keywords.add(`job oriented ${c} training`);
  keywords.add(`${c} developer course`);
  keywords.add(`${c} developer roadmap`);
  keywords.add(`${c} full curriculum and syllabus`);
  keywords.add(`${c} certification exam prep`);
  keywords.add(`hands on ${c} live project training`);
  keywords.add(`${c} classroom coaching`);
  keywords.add(`${c} online live classes`);
  keywords.add(`${c} training for freshers and professionals`);

  // Location combinations across primary hubs
  for (const loc of primaryLocations) {
    keywords.add(`${c} training ${loc}`);
    keywords.add(`${c} training in ${loc}`);
    keywords.add(`${c} course in ${loc}`);
    keywords.add(`${c} classes in ${loc}`);
    keywords.add(`best ${c} training in ${loc}`);
    keywords.add(`best ${c} course in ${loc}`);
    keywords.add(`best ${c} training institute in ${loc}`);
    keywords.add(`${c} training with placement in ${loc}`);
    keywords.add(`${c} classroom training in ${loc}`);
    keywords.add(`${c} developer course in ${loc}`);
    keywords.add(`top ${c} institute in ${loc}`);
  }

  // Additional tools
  for (const tool of additionalTools.slice(0, 10)) {
    keywords.add(`${tool.toLowerCase()} training bangalore`);
    keywords.add(`${tool.toLowerCase()} course`);
    keywords.add(`${tool.toLowerCase()} certification`);
    keywords.add(`learn ${tool.toLowerCase()}`);
  }

  if (categoryName) {
    keywords.add(`${categoryName.toLowerCase()} courses`);
    keywords.add(`${categoryName.toLowerCase()} training bangalore`);
    keywords.add(`best ${categoryName.toLowerCase()} training institute`);
    keywords.add(`${categoryName.toLowerCase()} courses with placement`);
  }

  keywords.add("learnmore technologies software training");
  keywords.add("it classroom training bangalore");
  keywords.add("software courses with 100% placement bangalore");

  return Array.from(keywords);
}

/**
 * Generates SEO keywords for Location pages
 */
export function generateLocationKeywords(
  locationName: string,
  city: string = "Bangalore"
): string[] {
  const locVariants = getLocationSearchVariants(locationName);
  const topCourses = [
    "python",
    "python full stack",
    "java",
    "java full stack",
    "data science",
    "data analytics",
    "power bi",
    "software testing",
    "aws",
    "azure",
    "microsoft azure",
    "devops",
    "generative ai",
    "agentic ai",
    "salesforce",
    "react js",
    "sql",
    "javascript",
    "snowflake",
    "oracle dba",
    "c and c++",
    "big data",
    "cloud computing",
    "ai and machine learning",
  ];

  const keywords = new Set<string>();

  for (const loc of locVariants) {
    keywords.add(`software training institute in ${loc}`);
    keywords.add(`best IT training institute in ${loc}`);
    keywords.add(`IT courses in ${loc}`);
    keywords.add(`placement training institute in ${loc}`);
    keywords.add(`coding classes in ${loc}`);
    keywords.add(`computer training institute in ${loc}`);
    keywords.add(`tech training academy in ${loc}`);
    keywords.add(`top software coaching centers in ${loc}`);
    keywords.add(`100% job placement institute in ${loc}`);
    keywords.add(`best software courses in ${loc}`);
    keywords.add(`learnmore technologies ${loc}`);
    keywords.add(`learnmore technologies training center ${loc}`);

    for (const course of topCourses) {
      keywords.add(`${course} training ${loc}`);
      keywords.add(`${course} training in ${loc}`);
      keywords.add(`${course} course in ${loc}`);
      keywords.add(`${course} classes in ${loc}`);
      keywords.add(`best ${course} institute in ${loc}`);
      keywords.add(`best ${course} training in ${loc}`);
      keywords.add(`${course} training with placement in ${loc}`);
      keywords.add(`${course} classroom training in ${loc}`);
      keywords.add(`${course} offline classes ${loc}`);
      keywords.add(`top ${course} coaching in ${loc}`);
    }
  }

  return Array.from(keywords);
}
