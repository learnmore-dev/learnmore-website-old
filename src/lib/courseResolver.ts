import { Course } from "@/types";
import { courses, getCourseBySlug } from "@/data/courses";
import { WordPressPageRecord, getPageBySlug } from "@/data/pageInventory";

// Map aliases to core course slugs
const SLUG_ALIAS_MAP: Record<string, string> = {
  // Python
  "python-training": "python-full-stack-course",
  "python-course": "python-full-stack-course",
  "python-course-training": "python-full-stack-course",
  "python-trending-course": "python-full-stack-course",
  "python-full-stack-training": "python-full-stack-course",
  "python-full-stack-course": "python-full-stack-course",

  // AWS / Cloud
  "aws-training": "aws-certified-solutions-architect",
  "aws-course": "aws-certified-solutions-architect",
  "aws-trending-course": "aws-certified-solutions-architect",
  "aws-certified-solutions-architect": "aws-certified-solutions-architect",

  // Data Science & AI
  "data-science-training": "data-science-course",
  "data-science-python-training": "data-science-course",
  "data-science-course": "data-science-course",
  "generative-ai-course": "agentic-ai-course",
  "agentic-ai-course": "agentic-ai-course",
  "intelligence-masters-program": "agentic-ai-course",

  // Data Analytics & BI
  "data-analytics-training": "data-analytics-course",
  "data-analytics-course": "data-analytics-course",
  "power-bi-training": "power-bi-course",
  "power-bi-course": "power-bi-course",
  "tableau-training": "data-analytics-course",
  "advance-excel-training-content": "data-analytics-course",
  "cloudera-certified-associate-cca-data-analyst": "data-analytics-course",
  "big-data-master-program-training": "data-analytics-course",

  // Java & Web Development
  "java-training": "java-full-stack-course",
  "java-course": "java-full-stack-course",
  "java-full-stack-training": "java-full-stack-course",
  "java-full-stack-developer": "java-full-stack-course",
  "java-full-stack-course": "java-full-stack-course",
  "full-stack-training-course": "java-full-stack-course",
  "react-js-training": "java-full-stack-course",
  "javascript-training": "python-full-stack-course",
  "html": "python-full-stack-course",
  "c-training": "python-full-stack-course",
  "android-training": "java-full-stack-course",

  // Azure / Cloud Infrastructure
  "microsoft-azure-training": "microsoft-azure-training",
  "microsoft-azure-course": "microsoft-azure-training",
  "microsoft-azure": "microsoft-azure-training",

  // DevOps & Linux
  "devops-training": "devops-training",
  "linux": "devops-training",
  "windows-powershell": "devops-training",

  // Databases & Snowflake
  "snowflake-training": "snowflake-training",
  "snowflake": "snowflake-training",
  "oracle-dba": "oracle-dba-training",
  "oracle-dba-training": "oracle-dba-training",
  "sql-training": "oracle-dba-training",
  "datastax-apache-cassandra": "snowflake-training",
  "ibm-certified-database-administrator-db2": "snowflake-training",
  "certified-data-management-professional-cdmp": "snowflake-training",

  // Software Testing
  "software-testing-training": "software-testing-course",
  "software-testing-course": "software-testing-course",

  // Business & Salesforce
  "business-analyst-masters-course": "data-analytics-course",
  "salesforce-training": "microsoft-azure-training",
};

/**
 * Resolves a WordPress page record or slug to a full, rich Course object.
 * Guarantee: Never returns undefined for any of the 516 inventory records.
 */
export function resolveCourseForRecord(record: WordPressPageRecord): Course {
  // 1. Direct slug match
  if (record.courseSlug) {
    const direct = getCourseBySlug(record.courseSlug);
    if (direct) return direct;

    // 2. Alias mapping
    const targetSlug = SLUG_ALIAS_MAP[record.courseSlug.toLowerCase()];
    if (targetSlug) {
      const aliasCourse = getCourseBySlug(targetSlug);
      if (aliasCourse) return aliasCourse;
    }
  }

  // 3. Match from post name or title keywords
  const titleLower = (record.postTitle + " " + record.slug).toLowerCase();
  if (titleLower.includes("python")) {
    return getCourseBySlug("python-full-stack-course")!;
  }
  if (titleLower.includes("aws") || titleLower.includes("amazon")) {
    return getCourseBySlug("aws-certified-solutions-architect")!;
  }
  if (titleLower.includes("azure") || titleLower.includes("microsoft")) {
    return getCourseBySlug("microsoft-azure-training")!;
  }
  if (titleLower.includes("data science") || titleLower.includes("machine learning") || titleLower.includes("deep learning")) {
    return getCourseBySlug("data-science-course")!;
  }
  if (titleLower.includes("data analytic") || titleLower.includes("tableau") || titleLower.includes("excel") || titleLower.includes("business analyst") || titleLower.includes("big data")) {
    return getCourseBySlug("data-analytics-course")!;
  }
  if (titleLower.includes("power bi") || titleLower.includes("powerbi")) {
    return getCourseBySlug("power-bi-course")!;
  }
  if (titleLower.includes("gen ai") || titleLower.includes("generative ai") || titleLower.includes("agentic") || titleLower.includes("intelligence")) {
    return getCourseBySlug("agentic-ai-course")!;
  }
  if (titleLower.includes("java") || titleLower.includes("spring") || titleLower.includes("react") || titleLower.includes("full stack")) {
    return getCourseBySlug("java-full-stack-course")!;
  }
  if (titleLower.includes("devops") || titleLower.includes("docker") || titleLower.includes("kubernetes") || titleLower.includes("linux") || titleLower.includes("powershell")) {
    return getCourseBySlug("devops-training")!;
  }
  if (titleLower.includes("snowflake") || titleLower.includes("cassandra") || titleLower.includes("db2") || titleLower.includes("cdmp")) {
    return getCourseBySlug("snowflake-training")!;
  }
  if (titleLower.includes("oracle") || titleLower.includes("sql") || titleLower.includes("database")) {
    return getCourseBySlug("oracle-dba-training")!;
  }
  if (titleLower.includes("testing") || titleLower.includes("qa") || titleLower.includes("selenium")) {
    return getCourseBySlug("software-testing-course")!;
  }

  // Fallback to primary bestseller
  return courses[0];
}

function formatWords(str: string): string {
  const cleaned = str
    .replace(/^the-best-/i, "")
    .replace(/^best-/i, "")
    .replace(/^top-/i, "");

  return cleaned
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Resolves any record from inventory or synthesizes a location-based course record
 * for standard patterns like course_name-in-location_name (e.g. python-training-in-whitefield)
 */
export function resolveRecordFromSlug(slug: string): WordPressPageRecord | null {
  if (!slug) return null;
  const cleanSlug = decodeURIComponent(slug).trim().replace(/^\/+|\/+$/g, "").toLowerCase();

  // 1. Direct page inventory match
  const direct = getPageBySlug(cleanSlug);
  if (direct) return direct;

  // 2. Dynamic pattern match: course_name-in-location_name
  if (cleanSlug.includes("-in-")) {
    const parts = cleanSlug.split("-in-");
    const coursePart = parts[0];
    const locationPart = parts.slice(1).join("-in-");

    const courseName = formatWords(coursePart);
    const locationName = formatWords(locationPart);

    return {
      id: `dyn-${cleanSlug}`,
      postTitle: `${courseName} in ${locationName}`,
      postName: cleanSlug,
      originalUrl: `https://learnmoretechnologies.in/${cleanSlug}/`,
      slug: cleanSlug,
      courseSlug: coursePart,
      courseName: courseName,
      locationSlug: locationPart,
      locationName: locationName,
      countryOrRegion: "India",
      pageType: "COURSE_LOCATION",
      targetRoute: `/${cleanSlug}`,
      seoTitle: `${courseName} in ${locationName}`,
      metaDescription: `Enroll in ${courseName} in ${locationName} at LearnMore Technologies. Industry expert mentorship, live real-time projects, dedicated lab support and 100% placement assistance.`,
      migrationAction: "DYNAMIC_RENDER",
    };
  }

  // 3. Direct core course check
  const directCourse = getCourseBySlug(cleanSlug);
  if (directCourse) {
    return {
      id: `dyn-course-${cleanSlug}`,
      postTitle: `${directCourse.title} Training in Bangalore`,
      postName: cleanSlug,
      originalUrl: `https://learnmoretechnologies.in/${cleanSlug}/`,
      slug: cleanSlug,
      courseSlug: cleanSlug,
      courseName: directCourse.title,
      locationSlug: "bangalore",
      locationName: "Bangalore",
      countryOrRegion: "India",
      pageType: "CORE_COURSE",
      targetRoute: `/${cleanSlug}`,
      seoTitle: `${directCourse.title} Training in Bangalore`,
      metaDescription: directCourse.overview,
      migrationAction: "DYNAMIC_RENDER",
    };
  }

  return null;
}
