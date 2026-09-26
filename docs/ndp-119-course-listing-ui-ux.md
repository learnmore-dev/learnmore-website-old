# NDP-119: Course Listing UI/UX Design & Architecture Blueprint

> **Project:** LearnMore Technologies Website Redesign & Migration (`https://learnmoretechnologies.in/`)  
> **Jira Task:** NDP-119 — Course Listing UI/UX Design & Reusable Architecture  
> **Next Implementation Task:** NDP-121 — Course Listing & Individual Course Page Development  
> **Technology Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React  
> **Status:** APPROVED FOR STAKEHOLDER REVIEW & DEVELOPER HANDOFF  

---

## 1. Objective

The Course Listing page (`/courses`) serves as the central technology catalog for LearnMore Technologies. It is engineered to:
1. Provide a **frictionless, multi-dimensional discovery engine** where students, fresh graduates, career switchers, and working professionals can find their ideal course in **under 2 clicks**.
2. Scale efficiently to handle **hundreds of courses** without code duplication or performance degradation.
3. Drive **high conversion** through strategic lead capture touchpoints (`[View Syllabus]`, `[Book Free Demo]`, `[Download Brochure]`, `[WhatsApp Advisor]`).
4. Preserve and amplify existing **SEO authority**, canonical hierarchy, and structured data equity.

---

## 2. Target Users & Discovery Intent

| Persona | Search / Discovery Need | Typical Discovery Path | Primary Action |
| :--- | :--- | :--- | :--- |
| **Fresh Graduate** | High placement guarantee courses (Python Full Stack, Java Full Stack, Software Testing). | Filter by "Placement Guarantee" + Category tabs. | Book Free Demo Class. |
| **Working IT Professional** | Specific certifications (AWS Solutions Architect, Azure AZ-104, Snowflake, CKA, Power BI). | Keyword search bar + Weekend batch filter. | Download Detailed Syllabus. |
| **Career Switcher (Non-IT)** | Beginner-friendly courses starting from scratch with mentorship. | Category chips + "Beginner" level filter. | Chat with WhatsApp Advisor. |
| **Corporate L&D Lead** | Team upskilling modules (Cloud Migration, Agentic AI, DevOps). | "Corporate Training" badge + Category grid. | Request Corporate Proposal. |

---

## 3. Course Discovery Strategy

Rather than overwhelming users with a monolithic list, the discovery engine uses a **3-tier funnel**:
1. **Tier 1 (Instant Query):** Real-time client-side search across titles, summaries, keywords, and tool tags.
2. **Tier 2 (Domain Categorization):** Horizontal quick-filter chips for top domains (Cloud, Full Stack, Data Science, QA, Databases, AI, SAP).
3. **Tier 3 (Multi-Faceted Refinement):** Left sidebar filters (Desktop) / Sliding modal drawer (Mobile) covering Category, Training Mode, Level, and Duration.

---

## 4. Course Listing Page Structure (Hierarchy)

```
1. Global Header & Top Utility Bar
2. Semantic Breadcrumb (Home > All Courses)
3. Course Catalog Hero (Title, Subtitle, Verified Course Count & Quick Search)
4. Domain Quick-Filter Chip Slider
5. Main Content Area (2-Column Grid on Desktop):
   ├── Left Sidebar (Desktop Filters: Category, Mode, Level, Duration, Clear All)
   └── Right Content Pane:
       ├── Result Header Bar (Showing X Courses + Active Filter Tags + Sort Dropdown)
       ├── Course Cards Grid (Responsive 1/2/3 Columns)
       ├── Empty / Error / Loading States
       └── Pagination Bar (1, 2, 3... Next) or Scalable "Load More"
6. Related Domain Categories Grid (Hub Links)
7. High-Conversion Lead Capture Banner (Book Free Demo)
8. Global Master Footer + Mobile Sticky Action Bar
```

---

## 5. Complete Textual Wireframe

```text
+--------------------------------------------------------------------------------------------------+
| [Header]   [LMT Logo]   Home  |  All Courses  |  Locations  |  Corporate  |  Placement  |  Blog  |
|                         [Book Free Demo Class]  [Mobile Menu ☰]                                  |
+--------------------------------------------------------------------------------------------------+
| [Breadcrumb]  Home > All Courses                                                                 |
+--------------------------------------------------------------------------------------------------+
| [Course Hero]                                                                                    |
|  Explore 50+ Industry-Certified Technology Master Programs                                       |
|  Master high-demand IT skills with practical classroom labs in Bangalore & live online cohorts.  |
|  [ 🔍 Search 50+ courses (e.g. AWS Solutions Architect, Python Full Stack, Power BI)...       ]  |
+--------------------------------------------------------------------------------------------------+
| [Quick Category Chips]                                                                           |
|  [All Courses (50+)] [Cloud & DevOps] [Full Stack] [Data Science & AI] [Software Testing] [SAP]  |
+--------------------------------------------------------------------------------------------------+
| MAIN CATALOG LAYOUT                                                                              |
|  +------------------------+  +-----------------------------------------------------------------+ |
|  | FILTERS (Sidebar)      |  | Showing 50 Courses                     Sort by: [ Most Popular ▾] | |
|  | ---------------------- |  | Active Tags: [Cloud & DevOps ✕] [Classroom ✕]   [Clear All Filters] |
|  | 📁 Category            |  +-----------------------------------------------------------------+ |
|  |  ☑ Cloud & DevOps (8)  |  | [CourseCard 1]           | [CourseCard 2]           | [CourseCard 3]| |
|  |  ☐ Full Stack (12)     |  |  Python Full Stack Dev   |  AWS Solutions Architect |  Data Science | |
|  |  ☐ Data Science (9)    |  |  ⭐ 4.9 (120 Reviews)    |  ⭐ 4.9 (95 Reviews)     |  ⭐ 4.8 (88)  | |
|  |  ☐ Testing & QA (6)    |  |  120 Hrs • Classroom/OL  |  60 Hrs • Live Online    |  90 Hrs • Cap | |
|  |                        |  |  Tools: Python, Django.. |  Tools: EC2, S3, Lambda  |  Tools: Pandas| |
|  | 💻 Training Mode       |  |  [View Course] [Demo]    |  [View Course] [Demo]    |  [View] [Demo]| |
|  |  ☑ Classroom Lab       |  +--------------------------+--------------------------+---------------+ |
|  |  ☐ Live Online Cohort  |  | [CourseCard 4]           | [CourseCard 5]           | [CourseCard 6]| |
|  |  ☐ Weekend Batches    |  |  Selenium QA Automation  |  Power BI & Data Viz     |  DevOps & K8s | |
|  |                        |  |  [View Course] [Demo]    |  [View Course] [Demo]    |  [View] [Demo]| |
|  | 🎓 Skill Level         |  +-----------------------------------------------------------------+ |
|  |  ☐ Beginner Friendly   |  | [Pagination]  « Prev   1   [2]   3   4   Next »                      | |
|  |  ☐ Intermediate / Adv  |  +-----------------------------------------------------------------+ |
|  +------------------------+                                                                      |
+--------------------------------------------------------------------------------------------------+
| [Related Domains Grid] (Explore Cloud Computing, Software Testing, AI & Machine Learning...)      |
+--------------------------------------------------------------------------------------------------+
| [Final CTA Banner] "Need Help Choosing the Right Tech Track? Talk to a Senior Career Counselor"  |
|                    [Book Free Career Counselling]  [Call +91 9036524555]                        |
+--------------------------------------------------------------------------------------------------+
| [Footer] (5-Column Master Navigation)                                                            |
+--------------------------------------------------------------------------------------------------+
```

---

## 6. Search UX & Mechanics
* **Location:** Embedded in Hero for maximum prominence and secondary compact search bar above the grid.
* **Instant Query Matching:** Debounced (150ms) client-side search across `course.title`, `course.overview`, `course.categoryName`, `course.toolsAndTechnologies.name`, and `course.seo.keywords`.
* **Visual States:** Clear button `[✕]` appears upon typing. Focus state renders a Crimson Red glow (`focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500`).
* **Empty State Trigger:** When no substring matches, dynamically renders the helpful empty state.

---

## 7. Faceted Filter System
* **Desktop:** Fixed 280px left sidebar with collapsible accordion panels (`Category`, `Training Mode`, `Skill Level`, `Duration`).
* **Mobile & Tablet:** Replaced with a top sticky button `[⚙️ Filters (2 active)]` opening an off-canvas slide-over drawer with `[Apply Filters]` and `[Reset All]`.
* **Multi-Select Logic:** Filtering across different facets is `AND` (e.g. Category = Cloud `AND` Mode = Classroom). Multiple selections within the same facet are `OR` (e.g. Category = Cloud `OR` Category = Data Science).

---

## 8. Sorting Mechanics
Standard sorting dropdown positioned on the top right of the grid:
1. **Most Popular (Default):** Ranked by review count and badge priority (`Bestseller` > `Trending` > `High Salary`).
2. **Highest Rated:** Ranked by `course.rating.score` (descending).
3. **Alphabetical (A to Z):** Sorted alphabetically by `course.title`.
4. **Duration (Shortest to Longest):** Ranked by `course.duration.hours` (ascending).

---

## 9. Reusable `CourseCard` Component Specification

Each card is structured for consistent height, information density, and scannability:

```text
+-------------------------------------------------------+
| [Top Row]  [Badge: Bestseller]       [⭐ 4.9 (120)]   |
|                                                       |
| [Category Tag]  CLOUD COMPUTING & DEVOPS              |
| [Title]         AWS Certified Solutions Architect     |
| [Description]   Master EC2, VPC, S3, IAM, Lambda, and |
|                 microservices with hands-on lab prep. |
|                                                       |
| [Meta Pills]    ⏱️ 60 Hrs   |   💻 Classroom & Online  |
| [Tech Stack]    [AWS] [Docker] [Terraform] [Linux]    |
|                                                       |
| [Bottom CTA]    [View Full Course →]  [Book Demo ⚡]   |
+-------------------------------------------------------+
```

---

## 10. Responsive Grid Layout Specifications

* **Desktop (≥ 1280px):** 2-column parent layout:
  * Left sidebar: `w-72 flex-shrink-0`
  * Right grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`
* **Tablet (768px – 1023px):** Single-column parent layout with collapsible top filter drawer and `grid-cols-2` course grid.
* **Mobile (< 768px):** Single column `grid-cols-1 gap-4` with full-width cards and touch-optimized action buttons (minimum `44px` height).

---

## 11. Pagination vs. Load More Architecture

| Pattern | SEO Impact | User Experience | Scalability (100+ courses) | Decision |
| :--- | :--- | :--- | :--- | :--- |
| **Numbered Pagination (`/courses?page=2`)** | **High:** Search engines crawl pages cleanly via canonical paginated links. | Good for structured browsing and bookmarking. | Excellent. | **Primary / Default** |
| **"Load More" Button** | **Moderate:** Requires client JS; crawlers may miss lazy-rendered courses without SSR sitemap. | Seamless on mobile devices. | Good. | **Mobile Alternate** |

**Standard Implementation:** Numbered pagination displaying 12 courses per page with canonical URL parameters (`/courses?page=2&category=cloud-computing`).

---

## 12. Empty, Loading & Error States

### A. Empty State (No Search / Filter Matches):
* **Visual:** Search illustration / icon with soft background.
* **Heading:** *"No matching courses found for '{searchQuery}'"*
* **Message:** *"Try clearing selected filters or searching with different keywords."*
* **Action:** Direct button `[Clear All Filters]` to instantly reset state.

### B. Skeleton Loading State (`CourseSkeleton`):
* Shimmer placeholder cards matching exact dimensions (`h-[380px]`) of the production `CourseCard` to guarantee **0 layout shift (CLS = 0)**.

### C. Error State:
* Alert banner with retry trigger: *"Unable to load course directory. Please check your connection."* with `[Reload Courses]` button.

---

## 13. Location-Specific Training Strategy

To preserve WordPress SEO equity without polluting the universal course catalog:
* **Universal Course Catalog (`/courses`):** Lists canonical courses available across all delivery modes and all 5 Bangalore branches.
* **Location-Specific Landing Pages (`/locations/[locationSlug]`):** Dedicated branch hubs (e.g. `/locations/marathahalli`) highlighting courses conducted specifically at that physical campus.
* **Canonical Course URLs:** Course pages resolve directly to clean canonical URLs: `/courses/[courseSlug]`.

---

## 14. SEO, Structured Data & Canonical URL Strategy

1. **Title Tag:** `All Software Training Courses in Bangalore | LearnMore Technologies`
2. **Meta Description:** `Browse 50+ job-oriented IT courses in Python Full Stack, AWS Cloud, Data Science, DevOps, AI, and Software Testing at LearnMore Technologies. 100% Placement Support.`
3. **Canonical URL:** `https://learnmoretechnologies.in/courses`
4. **Structured Data (JSON-LD):**
   - `ItemList` schema wrapping all visible course cards with direct links.
   - `BreadcrumbList` schema connecting `Home > All Courses`.
5. **No Duplicate Filter URLs:** Faceted filter states use query strings (`?category=cloud`) with canonical pointing to `/courses` or category hubs (`/courses/category/cloud-computing`) to prevent crawl budget waste.

---

## 15. URL Mapping & WordPress Migration Rules

| Existing WordPress URL Pattern | Target Next.js Route | Status / Action |
| :--- | :--- | :--- |
| `/all-courses/` or `/courses/` | `/courses` | **KEEP (Canonical Catalog Hub)** |
| `/course-category/[category-slug]/` | `/courses/category/[categorySlug]` | **301 REDIRECT (Category Hub)** |
| `/[course-name]-training-in-bangalore/` | `/courses/[courseSlug]` | **KEEP (Preserve Canonical URL)** |
| `/[course-name]-training-in-marathahalli/` | `/courses/[courseSlug]` or Location Hub | **301 REDIRECT to Canonical Course** |

---

## 16. Component Architecture & Reusability Matrix

```
src/components/course/
├── CourseCard.tsx           (Individual course card with badges, rating, duration, CTAs)
├── CourseGrid.tsx           (Responsive grid container with count header and sorting)
├── CourseSearch.tsx         (Debounced search bar with auto-clear)
├── CourseFilters.tsx        (Faceted category, mode, level sidebar / mobile drawer)
├── CourseSort.tsx           (Dropdown sorting selector)
├── CoursePagination.tsx     (Accessible numbered pagination component)
├── CourseSkeleton.tsx       (Shimmer loading cards for zero CLS)
└── CourseEmptyState.tsx     (Graceful fallback with reset actions)
```

---

## 17. Data Architecture Binding

All catalog rendering is 100% data-driven through typed repositories in `src/data/`:
* `src/data/courses.ts` (`Course[]` records with full schema)
* `src/data/categories.ts` (`Category[]` domain metadata)
* `src/data/locations.ts` (`LocationHub[]` campus directory)

---

## 18. Accessibility (WCAG 2.1 AA) Compliance
* **Keyboard Navigation:** All filter checkboxes, sort menus, and card CTAs are fully focusable with distinct focus rings.
* **Screen Reader Tags:** Filter drawer includes `aria-expanded` and `aria-modal="true"`.
* **Contrast Compliance:** All text badges exceed 4.5:1 contrast against white and dark backgrounds.

---

## 19. Performance & Core Web Vitals Targets
* **First Contentful Paint (FCP):** `< 1.0s` via static pre-rendering.
* **Cumulative Layout Shift (CLS):** `< 0.02` via skeleton loaders and explicit card dimensions.
* **Client-Side Filtering Latency:** `< 50ms` for instant sub-second search and filter feedback.

---

## 20. Open Questions for Business Sign-Off
1. **Course Pricing Visibility:** Confirm whether course fees should be displayed on cards or restricted to "Request Fee Structure" modals.
2. **Batch Schedules Display:** Confirm if upcoming batch dates should be displayed directly on cards (e.g. *"Next Batch: Monday"*) or inside the course detail page.

---

## 21. Final NDP-119 Course Listing Checklist

| Item | Specification | Status |
| :---: | :--- | :---: |
| 1 | Course Listing Information Architecture & Hierarchy Defined | ✅ **Complete** |
| 2 | Faceted Search, Domain Quick-Chips & Filter System Designed | ✅ **Complete** |
| 3 | Reusable `CourseCard`, `CourseGrid`, `CourseFilters` Specified | ✅ **Complete** |
| 4 | Mobile Drawer & Responsive Breakpoint Layouts Specified | ✅ **Complete** |
| 5 | SEO Canonical Strategy & WordPress Migration URL Rules Formulated | ✅ **Complete** |
| 6 | Full Specification Saved to [`docs/ndp-119-course-listing-ui-ux.md`](file:///r:/Learn-more-technology/docs/ndp-119-course-listing-ui-ux.md) | ✅ **Complete** |
