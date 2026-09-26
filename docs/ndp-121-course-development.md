# NDP-121: Course/Training Pages Development & Architecture Documentation

## 1. Executive Summary & Objective
NDP-121 establishes the scalable, data-driven Course/Training page engine for the Learn More Technologies website migration into Next.js.
Instead of manually maintaining hundreds of isolated page components, the system uses a single unified, high-performance, accessible, and SEO-optimized **Dynamic Course Page Template** (`/courses/[courseSlug]`) powered by typed data models in `src/data/courses.ts` and modular components in `src/components/course/`.

---

## 2. Course Page Architecture & Component Tree

```
CourseDetailPage (RSC - Server Component)
│
├── JsonLd (Schema.org: Course, BreadcrumbList, FAQPage)
├── Breadcrumb (Accessible navigation path)
│
├── CourseHero (Client/Server hybrid)
│   ├── Badges (Bestseller, Category, Star Ratings & Review Counts)
│   ├── H1 Course Title & Overview
│   ├── 4 Key Metrics Pills (Duration, Mode & Level, Placement, Bangalore Hubs)
│   ├── Action CTAs (View Curriculum, Call Desk, WhatsApp Syllabus)
│   └── Program Highlights Card
│
├── Main Content Grid (8 Columns)
│   ├── LearningOutcomes (Core Competencies & Skills Gained Grid)
│   ├── Curriculum Breakdown (CurriculumAccordion with Expand/Collapse & Labs)
│   ├── PracticalTraining (Terminal Sandbox, Lab Hours & Real Scenarios)
│   ├── ProjectShowcase (Real-World Capstone Projects & Outcomes)
│   ├── TechnologyList (Tools, Libraries & Frameworks Covered)
│   ├── CertificationSection (Institute Credential + Global Vendor Alignment)
│   ├── PlacementSection (Placement Cell, CTC Stats, 500+ Hiring Partners)
│   ├── TrainerSection (Senior Mentors with Ex-MNC Backgrounds)
│   ├── Prerequisites & TargetAudience (Eligibility & Ideal Candidates)
│   ├── BatchScheduleTable (Upcoming Weekday/Weekend Batches & Seats Left)
│   ├── FAQAccordion (Course-Specific Knowledge Base with Rich Answers)
│   └── RelatedCourses (Complementary Pathways & Upskilling Tracks)
│
├── Sticky Sidebar (4 Columns)
│   ├── EmbeddedLeadForm (Context-Aware Form pre-filled with Course Title)
│   └── Senior Advisor Quick Contact Card (Direct Phone, WhatsApp & Campus list)
│
├── CTASection (Full-Width High-Impact Enrollment Callout)
└── StickyMobileCTA (Mobile Fixed Action Bar: Call, WhatsApp, Enquire Now)
```

---

## 3. Course Data Schema (`src/types/index.ts`)

```typescript
export interface Course {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  badge?: "Bestseller" | "Trending" | "High Salary" | "Hot Tech";
  rating: {
    score: number;
    reviewCount: number;
  };
  duration: {
    hours: number;
    weeks: number;
    modes: ("Classroom" | "Live Online" | "Weekend Batches")[];
  };
  level?: string;
  overview: string;
  highlights: string[];
  skillsGained: string[];
  prerequisites?: string[];
  targetAudience?: string[];
  practicalTraining?: {
    labHours?: number;
    labCount?: number;
    description: string;
    keyFeatures: string[];
  };
  placementAssistance?: {
    guaranteeText: string;
    features: string[];
    partnerCount: number;
    highestPackage?: string;
    averageHike?: string;
  };
  toolsAndTechnologies: {
    name: string;
    category?: string;
  }[];
  curriculum: CourseModule[];
  projects: CourseProject[];
  certifications: {
    title: string;
    organization: string;
    examCode?: string;
    description: string;
  }[];
  trainers: CourseTrainer[];
  upcomingBatches: CourseBatch[];
  faqs: CourseFAQ[];
  relatedCourseSlugs: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
  };
}
```

---

## 4. URL Migration & 301 Redirect Strategy

Based on the **NDP-118 Website Audit** and analysis of `all_unique_paths.txt` & `scraped_urls.json`, legacy URL aliases have been preserved and mapped via permanent 301 HTTP redirects in `next.config.mjs`:

| Legacy URL (from Old Website) | New Standardized URL | Action | Migration Rationale |
|---|---|---|---|
| `/aws-course` | `/courses/aws-certified-solutions-architect` | 301 Redirect | Standardize to high-intent primary course slug |
| `/aws-cloud-practitioner-training` | `/courses/aws-certified-solutions-architect` | 301 Redirect | Consolidate duplicate AWS foundational paths |
| `/aws-trending-course` | `/courses/aws-certified-solutions-architect` | 301 Redirect | Merge promotional duplicate into canonical |
| `/python-course` | `/courses/python-full-stack-course` | 301 Redirect | Consolidate Python base URL into master program |
| `/python-trending-course` | `/courses/python-full-stack-course` | 301 Redirect | Merge promotional path into canonical |
| `/full-stack-training-course` | `/courses/python-full-stack-course` | 301 Redirect | Redirect generic full-stack keyword to master |
| `/java-course` | `/courses/java-full-stack-course` | 301 Redirect | Consolidate Java training into full stack master |
| `/devops-training` (root) | `/courses/devops-training` | 301 Redirect | Canonicalize under `/courses/` namespace |
| `/software-testing-course` (root) | `/courses/software-testing-course` | 301 Redirect | Canonicalize under `/courses/` namespace |
| `/data-science-course` (root) | `/courses/data-science-course` | 301 Redirect | Canonicalize under `/courses/` namespace |
| `/power-bi-course` (root) | `/courses/power-bi-course` | 301 Redirect | Canonicalize under `/courses/` namespace |
| `/snowflake` | `/courses/snowflake-training` | 301 Redirect | Standardize single-word keyword to course slug |
| `/microsoft-azure` | `/courses/microsoft-azure-training` | 301 Redirect | Standardize to training path |
| `/microsoft-azure-course` | `/courses/microsoft-azure-training` | 301 Redirect | Consolidate duplicate Azure course keyword |
| `/data-analytics-course` (root) | `/courses/data-analytics-course` | 301 Redirect | Canonicalize under `/courses/` namespace |
| `/oracle-dba` | `/courses/oracle-dba-training` | 301 Redirect | Standardize keyword slug |
| `/agentic-ai-course-in-bangalore` | `/courses/agentic-ai-course` | 301 Redirect | Map location variation to primary master program |
| `/contact` | `/contact-us` | 301 Redirect | Standardize utility page URL |
| `/corporate-trainings` | `/corporate-training` | 301 Redirect | Standardize plural form |
| `/testimonial` | `/testimonials` | 301 Redirect | Standardize singular form |
| `/instructor` / `/instructors` | `/trainers` | 301 Redirect | Standardize team directory URL |

---

## 5. SEO & Structured Data Implementation

1. **Dynamic Metadata Generation (`generateMetadata`)**:
   - Unique `<title>` and `<meta name="description">` generated per course.
   - Dynamic canonical link tag (`rel="canonical"`).
   - OpenGraph and Twitter card metadata.

2. **Schema.org Structured Data**:
   - `Course` Schema: Course name, description, provider (`EducationalOrganization`), aggregate rating, and `hasCourseInstance` batch dates.
   - `BreadcrumbList` Schema: Structured hierarchic positions (`Home` -> `Courses` -> `[Category]` -> `[Course]`).
   - `FAQPage` Schema: Compliant structured Q&A data automatically generated from `course.faqs`.

3. **404 Error Handling**:
   - If an invalid course slug is requested, Next.js triggers `notFound()` returning clean `404 Not Found` HTTP status with branded 404 page.

---

## 6. Verification & Test Execution Results

- **TypeScript Compilation (`npx tsc --noEmit`)**:
  - Result: `0 errors` (Exit code `0`).
- **Production Build (`npm run build`)**:
  - Result: `47/47 static pages pre-rendered` successfully (Exit code `0`).
- **HTTP Route Validation (Live Server)**:
  - `GET /courses/aws-certified-solutions-architect` -> `200 OK`
  - `GET /courses/python-full-stack-course` -> `200 OK`
  - `GET /courses/data-science-course` -> `200 OK`
  - `GET /courses/devops-training` -> `200 OK`
  - `GET /courses/software-testing-course` -> `200 OK`
  - `GET /courses/power-bi-course` -> `200 OK`
  - `GET /courses/agentic-ai-course` -> `200 OK`
  - `GET /courses/snowflake-training` -> `200 OK`
  - `GET /courses/java-full-stack-course` -> `200 OK`
  - `GET /courses/microsoft-azure-training` -> `200 OK`
  - `GET /courses/data-analytics-course` -> `200 OK`
  - `GET /courses/oracle-dba-training` -> `200 OK`
  - `GET /courses/invalid-nonexistent-course` -> `404 Not Found` (Proper error boundary)

---

## 7. Responsive & Accessibility Features

- **Breakpoint Testing**: Verified layout fluidity across 360px, 390px, 480px, 768px, 1024px, 1280px, and 1440px+ screens.
- **Sticky Mobile CTA**: Appears strictly on `< 1024px` viewports with instant one-tap access to Call (+91 9036524555), WhatsApp pre-filled syllabus request, and smooth auto-scroll to the enquiry form.
- **Interactive Accordions**: Keyboard accessible expand/collapse with ARIA compliance.
- **Color Contrast**: Complies with WCAG AA standards (high contrast slate-900 / white / brand-600 accents).
