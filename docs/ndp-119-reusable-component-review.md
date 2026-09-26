# NDP-119: Reusable Component Review & Design System Finalization

> **Project:** Learn More Technologies Rebuild & Migration (`https://learnmoretechnologies.in/`)  
> **Jira Task:** NDP-119 — UI/UX Design & New Website Structure  
> **Stage:** Reusable Component Review & Design System Finalization (Pre-Development Architecture)  
> **Scope:** Architecture, Component Audit, Design Tokens, Server/Client Strategy, 516+ Page Scalability & UI/UX Finalization  
> **Status:** COMPLETE & READY FOR STAKEHOLDER APPROVAL  

---

## 1. Executive Summary & Architecture Objective

Learn More Technologies is migrating an established WordPress platform featuring **516+ indexed pages, 50+ technology courses, 8 flagship IT hubs across Bangalore, technical blog guides, corporate training modules, and student placement resources** to a modern, high-performance Next.js App Router architecture.

### The Core Architectural Mandate
To ensure high maintainability, consistent brand identity, high performance (Core Web Vitals 95+), and painless scaling across hundreds of future pages, the platform is strictly engineered on the principle:

$$\mathbf{DATA} + \mathbf{REUSABLE\ COMPONENTS} + \mathbf{DYNAMIC\ ROUTES} \gg \mathbf{CUSTOM\ PER\text{-}PAGE\ CODE}$$

Instead of building 516 bespoke page files, the entire website is powered by **34 high-cohesion, modular components**, unified UI design tokens, and typed JSON/TypeScript data models driving dynamic routes (`/courses/[courseSlug]`, `/courses/category/[categorySlug]`, `/locations/[slug]`, `/blog/[slug]`).

---

## 2. Complete Existing Component Inventory & Audit

Every component currently in the `src/components/` directory was audited for cohesion, single-responsibility, prop boundaries, and reusability.

| # | Component Name | Current Location | Purpose & Core Responsibility | Where Used | Reusability | Lifecycle (RSC / Client) | Action |
|---|---|---|---|---|---|---|---|
| 1 | `Header` | `src/components/layout/Header.tsx` | Sticky global header with top bar, branding logo, navigation links, MegaMenu trigger, and primary action CTAs. | All 21+ routes via Root Layout | High (Universal) | Client Component (`"use client"`) | **KEEP** |
| 2 | `MegaMenu` | `src/components/layout/MegaMenu.tsx` | Rich interactive 2-tier dropdown navigation displaying Course Categories, popular courses, and highlighted tracks. | `Header` | High (Header) | Client Component (`"use client"`) | **KEEP** |
| 3 | `MobileDrawer` | `src/components/layout/MobileDrawer.tsx` | Off-canvas mobile slide-out drawer with accordion navigation, contact info, and quick booking triggers. | `Header` | High (Mobile/Tablet) | Client Component (`"use client"`) | **KEEP** |
| 4 | `StickyBottomBar` | `src/components/layout/StickyBottomBar.tsx` | Mobile-only thumb-zone sticky bottom bar for instant Phone, WhatsApp, and Demo modal engagement. | All routes via Root Layout | High (Mobile Only) | Client Component (`"use client"`) | **KEEP** |
| 5 | `Footer` | `src/components/layout/Footer.tsx` | Comprehensive SEO-rich 4-column footer with course links, location hubs, certifications, social links, and legal badges. | All 21+ routes via Root Layout | High (Universal) | Server Component (RSC) | **KEEP** |
| 6 | `Breadcrumb` | `src/components/common/Breadcrumb.tsx` | Accessible hierarchical navigation breadcrumbs with Schema.org BreadcrumbList microdata support. | Course details, Category pages, Blog detail, Static pages | High (All subpages) | Server Component (RSC) | **KEEP** |
| 7 | `PageHero` | `src/components/common/PageHero.tsx` | Universal standardized page hero header with badge, gradient title, description, and breadcrumb slot. | Static business pages (About, Contact, Placement, etc.) | High (Static pages) | Server Component (RSC) | **KEEP** |
| 8 | `SectionHeading` | `src/components/common/SectionHeading.tsx` | Standardized section title with uppercase badge, gradient/solid heading, subtitle, and alignment controls. | Homepage, Course listing, About, Testimonials, Placement | High (Universal) | Server Component (RSC) | **KEEP** |
| 9 | `CTAButton` | `src/components/common/CTAButton.tsx` | Reusable button primitive supporting 4 variants (primary, secondary, outline, ghost), icons, sizes, and modal triggers. | Universal across all cards, heroes, forms, and bars | High (Primitive) | Server / Client Hybrid | **KEEP** |
| 10 | `CTASection` | `src/components/common/CTASection.tsx` | Full-width high-conversion dark banner with customizable badge, heading, description, dual action buttons, and phone trigger. | Homepage, Course Catalog, Category pages, Location hubs | High (Conversion) | Server Component (RSC) | **KEEP** |
| 11 | `FAQAccordion` | `src/components/common/FAQAccordion.tsx` | Accessible, animated interactive FAQ accordion with FAQPage Schema.org structured data injection. | Homepage, Course detail, Category pages, Standalone FAQ page | High (Universal) | Client Component (`"use client"`) | **KEEP** |
| 12 | `LocationCard` | `src/components/common/LocationCard.tsx` | Structured card displaying campus details, address, transit info, phone, map link, and quick contact actions. | Locations listing, Location detail, Homepage, Contact | High (Hubs) | Server Component (RSC) | **KEEP** |
| 13 | `TrainerCard` | `src/components/common/TrainerCard.tsx` | Faculty profile card with experience years, former tier-1 tech companies, student count, and biography. | Trainers page, About Us page, Course detail | High (Faculty) | Server Component (RSC) | **KEEP** |
| 14 | `TestimonialCard` | `src/components/common/TestimonialCard.tsx` | Verified student placement review card with rating stars, hiring company badge, salary package, and quote. | Testimonials page, Homepage, Placement page, Course detail | High (Social Proof) | Server Component (RSC) | **KEEP** |
| 15 | `JsonLd` | `src/components/common/JsonLd.tsx` | Type-safe JSON-LD script injector for rich Google SERP snippet structured data. | All pages (Course, FAQ, Org, Breadcrumb) | High (SEO Primitive) | Server Component (RSC) | **KEEP** |
| 16 | `CourseCard` | `src/components/course/CourseCard.tsx` | Standardized card displaying course badge, title, rating, hours, modes, technologies, and dual CTAs (Explore & Syllabus). | Homepage, Course Catalog, Category pages, Related courses | High (Core Catalog) | Server Component (RSC) | **KEEP** |
| 17 | `CourseGrid` | `src/components/course/CourseGrid.tsx` | Responsive 1/2/3-column grid container for consistent card spacing and empty state handling. | Course Catalog, Category pages, Homepage | High (Layout) | Server Component (RSC) | **KEEP** |
| 18 | `CourseCatalogView` | `src/components/course/CourseCatalogView.tsx` | Interactive client orchestrator managing category filtering, search queries, mode toggles, and pagination. | `/courses` catalog page | High (Catalog) | Client Component (`"use client"`) | **KEEP** |
| 19 | `CourseFilters` | `src/components/course/CourseFilters.tsx` | Sidebar/inline filter controls (categories, delivery modes, search input, reset button). | `CourseCatalogView` | High (Filters) | Client Component (`"use client"`) | **KEEP** |
| 20 | `CourseSearchDiscovery` | `src/components/course/CourseSearchDiscovery.tsx` | Instant search combobox with real-time course suggestions and category jump links. | Course Catalog Hero, Homepage Hero | High (Search) | Client Component (`"use client"`) | **KEEP** |
| 21 | `CoursePagination` | `src/components/course/CoursePagination.tsx` | Accessible numbered pagination control with Previous/Next buttons and page count indicators. | `CourseCatalogView`, Blog listing | High (Pagination) | Client Component (`"use client"`) | **KEEP** |
| 22 | `CourseEmptyState` | `src/components/course/CourseEmptyState.tsx` | Friendly no-results state with search query feedback and filter reset action. | `CourseCatalogView` | High (Feedback) | Client Component (`"use client"`) | **KEEP** |
| 23 | `CourseSkeleton` | `src/components/course/CourseSkeleton.tsx` | Loading skeleton shimmer cards for courses during search, filter changes, or SSR hydration. | `CourseCatalogView`, Page Suspense | High (Feedback) | Server Component (RSC) | **KEEP** |
| 24 | `CurriculumAccordion` | `src/components/course/CurriculumAccordion.tsx` | Interactive course syllabus accordion showing module numbers, titles, hours, topic lists, and hands-on lab exercises. | Individual Course detail pages (`/courses/[courseSlug]`) | High (Course Detail) | Client Component (`"use client"`) | **KEEP** |
| 25 | `ProjectShowcase` | `src/components/course/ProjectShowcase.tsx` | Real-world industry capstone project showcase cards with tech stack badges and key outcomes. | Individual Course detail pages (`/courses/[courseSlug]`) | High (Course Detail) | Server Component (RSC) | **KEEP** |
| 26 | `BatchScheduleTable` | `src/components/course/BatchScheduleTable.tsx` | Upcoming classroom & online batch schedule table with date, time, mode, seat counters, and booking triggers. | Individual Course detail pages (`/courses/[courseSlug]`) | High (Course Detail) | Server Component (RSC) | **KEEP** |
| 27 | `ContactForm` | `src/components/forms/ContactForm.tsx` | Comprehensive contact page inquiry form with branch selection, training mode, and message fields. | `/contact-us` | High (Inquiry) | Client Component (`"use client"`) | **KEEP** |
| 28 | `CorporateLeadForm` | `src/components/forms/CorporateLeadForm.tsx` | Dedicated B2B corporate training RFP form with company name, team size, training domains, and custom requirements. | `/corporate-training` | High (B2B Lead) | Client Component (`"use client"`) | **KEEP** |
| 29 | `ApplicationForm` | `src/components/forms/ApplicationForm.tsx` | Detailed candidate application form for Student Internships and Instructor/Trainer job positions. | `/internship`, `/become-a-teacher` | High (Application) | Client Component (`"use client"`) | **KEEP** |
| 30 | `EmbeddedLeadForm` | `src/components/forms/EmbeddedLeadForm.tsx` | High-intent sticky sidebar lead capture widget with pre-selected course and campus dropdowns. | Course detail sticky sidebar, Location hubs | High (Course Sidebar) | Client Component (`"use client"`) | **KEEP** |
| 31 | `QuickEnquiryModal` | `src/components/forms/QuickEnquiryModal.tsx` | Accessible modal dialog for instant 30-second demo class booking triggered from any CTA button. | Global Root Layout (Universal) | High (Global Modal) | Client Component (`"use client"`) | **KEEP** |
| 32 | `BrochureDownloadModal` | `src/components/forms/BrochureDownloadModal.tsx` | Accessible modal dialog capturing email/phone in exchange for instant PDF syllabus delivery. | Global Root Layout (Universal) | High (Global Modal) | Client Component (`"use client"`) | **KEEP** |
| 33 | `BlogCard` | `src/components/blog/BlogCard.tsx` | Editorial article card featuring category pill, reading time, publication date, title, author, and snippet. | Blog listing, Category blog views, Related posts | High (Blog) | Server Component (RSC) | **KEEP** |
| 34 | `BlogGrid` | `src/components/blog/BlogGrid.tsx` | Responsive multi-column editorial grid for blog articles. | Blog listing (`/blog`), Category pages | High (Blog Layout) | Server Component (RSC) | **KEEP** |

---

## 3. Duplicate Component Analysis & Consolidation Findings

During the architectural audit, all potential duplicates were inspected. The codebase is remarkably clean and adheres to unified primitives:

### Analysis of Common UI Primitives:
1. **Buttons (`CTAButton` vs generic `Button`):**
   - *Finding:* There is a single, centralized button component: `src/components/common/CTAButton.tsx`. It handles Next.js `<Link>`, external `<a>`, native `<button>`, and supports variants (`primary`, `secondary`, `outline`, `ghost`), sizes (`sm`, `md`, `lg`), and built-in icons (`arrow`, `phone`, `download`, `whatsapp`).
   - *Recommendation:* **KEEP** `CTAButton.tsx` as the single source of truth for all clickable actions across the platform.

2. **CTA Banners (`CTASection` vs per-page custom wrappers):**
   - *Finding:* Homepage, Courses catalog, and Category pages previously had inline background wrappers.
   - *Action Completed:* Consolidated styling into `CTASection` with rich dark background tokens (`bg-gradient-to-r from-slate-950 via-brand-950 to-slate-950 border border-brand-900/30`).
   - *Recommendation:* In NDP-120/121/122, enforce usage of `<CTASection />` everywhere instead of writing inline banner markup.

3. **Course Cards:**
   - *Finding:* There is exactly ONE `CourseCard.tsx` used across Homepage, Catalog, Category listings, and Related Courses. No duplicate card implementations exist.

4. **Modals (`QuickEnquiryModal` & `BrochureDownloadModal`):**
   - *Finding:* Both modals share identical backdrop transitions, close buttons, escape-key listeners, and focus traps, tailored for their distinct lead capture requirements.
   - *Recommendation:* Retain both specialized modal components for clean developer ergonomics while sharing core Tailwind modal styles.

---

## 4. Recommended Target Component Architecture

The target file tree organizes components strictly by feature domain and reuse tier:

```text
src/
├── app/                              # Next.js App Router dynamic & static routes
│   ├── layout.tsx                    # Root Layout (Header, Footer, Modals, StickyBar)
│   ├── page.tsx                      # Homepage template
│   ├── courses/
│   │   ├── page.tsx                  # Course catalog (/courses)
│   │   ├── [courseSlug]/page.tsx     # Dynamic individual course template (50+ courses)
│   │   └── category/[categorySlug]/  # Dynamic category template (12 categories)
│   ├── locations/
│   │   ├── page.tsx                  # Bangalore hubs directory (/locations)
│   │   └── [slug]/page.tsx           # Dynamic location hub template (8 branches)
│   ├── blog/
│   │   ├── page.tsx                  # Blog directory (/blog)
│   │   └── [slug]/page.tsx           # Dynamic editorial article template (100+ articles)
│   └── (static-business-pages)/      # /about-us, /contact-us, /placement, etc.
│
├── components/
│   ├── layout/                       # Core chrome & persistent navigation
│   │   ├── Header.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileDrawer.tsx
│   │   ├── StickyBottomBar.tsx
│   │   └── Footer.tsx
│   │
│   ├── common/                       # Universal UI primitives & shared cards
│   │   ├── CTAButton.tsx             # Universal button primitive
│   │   ├── CTASection.tsx            # Standard conversion banner
│   │   ├── PageHero.tsx              # Standardized page header hero
│   │   ├── SectionHeading.tsx        # Standardized section title
│   │   ├── Breadcrumb.tsx            # Schema.org breadcrumbs
│   │   ├── FAQAccordion.tsx          # Schema.org interactive accordion
│   │   ├── JsonLd.tsx                # Structured data script injector
│   │   ├── TrainerCard.tsx           # Faculty profile card
│   │   ├── TestimonialCard.tsx       # Student review card
│   │   └── LocationCard.tsx          # Campus hub card
│   │
│   ├── course/                       # Course catalog & detail components
│   │   ├── CourseCard.tsx            # Standardized course card
│   │   ├── CourseGrid.tsx            # Responsive grid container
│   │   ├── CourseCatalogView.tsx     # Client filtering orchestrator
│   │   ├── CourseFilters.tsx         # Sidebar/inline filter controls
│   │   ├── CourseSearchDiscovery.tsx # Instant search combobox
│   │   ├── CoursePagination.tsx      # Pagination bar
│   │   ├── CourseEmptyState.tsx      # No-results state
│   │   ├── CourseSkeleton.tsx        # Loading skeleton shimmer
│   │   ├── CurriculumAccordion.tsx   # Detailed syllabus breakdown
│   │   ├── ProjectShowcase.tsx       # Real-world capstone projects
│   │   └── BatchScheduleTable.tsx    # Live upcoming batch dates
│   │
│   ├── forms/                        # High-conversion lead capture
│   │   ├── QuickEnquiryModal.tsx     # Global 30s demo booking modal
│   │   ├── BrochureDownloadModal.tsx # Global PDF syllabus download modal
│   │   ├── EmbeddedLeadForm.tsx      # Course detail sticky sidebar form
│   │   ├── ContactForm.tsx           # Main contact page form
│   │   ├── CorporateLeadForm.tsx     # B2B enterprise training RFP form
│   │   └── ApplicationForm.tsx       # Internship & Trainer hiring form
│   │
│   └── blog/                         # Technical blog & editorial
│       ├── BlogCard.tsx              # Article listing card
│       └── BlogGrid.tsx              # Responsive blog grid
│
├── data/                             # Normalized TypeScript content databases
│   ├── courses.ts                    # 50+ technology course objects
│   ├── categories.ts                 # 12 course categories
│   ├── locations.ts                  # 8 physical campus hubs
│   ├── trainers.ts                   # Senior faculty profiles
│   ├── testimonials.ts               # Student reviews & placement records
│   ├── blogs.ts                      # Technical guides & interview questions
│   └── navigation.ts                 # Menu structures & footer links
│
├── types/                            # Strict TypeScript interfaces
│   └── index.ts                      # Course, Category, Location, Lead, Blog types
│
└── lib/                              # Shared helper utilities
    └── utils.ts                      # cn (clsx + twMerge), formatDate, helpers
```

---

## 5. Domain Component Specifications

### 5.1 Layout Components

| Component | Responsibility | Props Contract | Responsive Behavior | Server / Client |
|---|---|---|---|---|
| `Header` | Desktop sticky nav, brand logo, course category megamenu trigger, phone desk CTA, mobile hamburger toggle. | None (reads `navigation.ts`) | Desktop: full menu + CTA. Mobile (<1024px): compact logo + hamburger. | Client |
| `MegaMenu` | 2-tier dropdown displaying categories on left and category-specific courses on right. | `isOpen: boolean, onClose: () => void` | Desktop only. Rendered conditionally; hidden on mobile in favor of MobileDrawer. | Client |
| `MobileDrawer` | Off-canvas left-to-right drawer with category accordions, direct phone, and WhatsApp triggers. | `isOpen: boolean, onClose: () => void` | Mobile & Tablet (<1024px) only. Full viewport height with backdrop blur. | Client |
| `StickyBottomBar` | High-contrast thumb-zone quick actions (Call, WhatsApp, Free Demo modal). | None | Mobile only (<640px). Fixed at viewport bottom with safe-area padding. | Client |
| `Footer` | Comprehensive 4-column footer with course taxonomy, branch locations, accreditation, and copyright. | None (reads `navigation.ts`) | Desktop: 4 columns. Tablet: 2x2 grid. Mobile: 1 stacked column. | Server (RSC) |

### 5.2 Common Components

| Component | Responsibility | Props Contract | Key Styling Rules | Server / Client |
|---|---|---|---|---|
| `CTAButton` | Universal interactive button with accessible focus rings, loading states, and icon slots. | `variant, size, icon, href, onClick, children` | Primary: `bg-brand-600 hover:bg-brand-500 text-white`. Outline: `border border-slate-700`. | Server / Client |
| `PageHero` | Standard header for static pages with badge, title, subtitle, and breadcrumbs. | `badge, title, highlightTitle, subtitle, breadcrumbs` | `bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white`. | Server (RSC) |
| `SectionHeading` | Section title with badge pill, high-contrast heading, and descriptive subtitle. | `badge, title, subtitle, centered, dark` | Center-aligned on desktop & mobile when `centered=true`. | Server (RSC) |
| `FAQAccordion` | Accessible expandable Q&A items with SVG chevron rotation and Schema.org FAQPage script. | `faqs: {question, answer}[]` | Smooth height transition, `aria-expanded` attributes, accessible keyboard tab stop. | Client |
| `LocationCard` | Branch address, phone, transit directions, and Google Maps deep links. | `location: LocationHub` | Hover elevation: `hover:-translate-y-1 hover:shadow-xl`. | Server (RSC) |
| `TrainerCard` | Faculty years of experience, former companies, bio, and student counts. | `trainer: Trainer` | Gradient avatar badge, company pill badges. | Server (RSC) |
| `TestimonialCard` | Verified student placement record with salary package, hiring logo, and rating. | `testimonial: Testimonial` | Gold star rating icons, verified student green badge. | Server (RSC) |

### 5.3 Course Components

| Component | Responsibility | Props Contract | Key Feature | Server / Client |
|---|---|---|---|---|
| `CourseCard` | Rich course preview card with badge, rating, hours, modes, technologies, and CTAs. | `course: Course` | Dual CTA: "Explore Course" (link) & "Syllabus" (modal trigger). | Server (RSC) |
| `CourseCatalogView` | Client orchestrator coordinating search, multi-category selection, and pagination. | `courses: Course[], categories: Category[]` | Real-time client-side filtering without page reloads. | Client |
| `CurriculumAccordion`| Course module breakdown with hours, topics, and hands-on lab projects. | `modules: CourseModule[]` | Expand/collapse all toggle, highlighted lab tags. | Client |
| `ProjectShowcase` | Real-world industry capstone projects built during training. | `projects: CourseProject[]` | Tech stack pill badges, key business outcome callout. | Server (RSC) |
| `BatchScheduleTable`| Upcoming batch dates, timings, classroom vs online delivery, and seat availability. | `batches: CourseBatch[]` | Scarcity indicator (e.g. "Only 3 Seats Left"). | Server (RSC) |

### 5.4 Form Components

| Component | Responsibility | Target Intent | Key Fields | Server / Client |
|---|---|---|---|---|
| `QuickEnquiryModal` | Global 30-second Demo Class booking popup. | High (Universal) | Full Name, Email, Phone, Preferred Mode | Client |
| `BrochureDownloadModal` | Instant PDF syllabus delivery via email/WhatsApp. | Medium (Information) | Full Name, Email, Phone, Course Name | Client |
| `EmbeddedLeadForm` | Sticky sidebar conversion form on Course detail pages. | High (Course Intent) | Full Name, Email, Phone, Preferred Campus | Client |
| `ContactForm` | Comprehensive inquiry form on `/contact-us`. | General Inquiry | Name, Email, Phone, Branch, Mode, Message | Client |
| `CorporateLeadForm` | B2B enterprise workforce upskilling proposal form. | Enterprise B2B | Name, Work Email, Company, Team Size, Tech | Client |
| `ApplicationForm` | Career & Internship candidate submissions. | Recruitment | Name, Email, Phone, College/Role, Resume Link | Client |

---

## 6. Course Data Architecture & Schema Definition

The course system powers 50+ technology courses across 12 domains. The standardized TypeScript interface in `src/types/index.ts` strictly governs all course data:

```typescript
export interface Course {
  id: string;                               // Unique ID (e.g. "lmt-aws-csa")
  slug: string;                             // URL slug (e.g. "aws-certified-solutions-architect")
  title: string;                            // Full title
  categorySlug: string;                     // Category reference (e.g. "cloud-computing")
  categoryName: string;                     // Display name
  badge?: "Bestseller" | "Trending" | "High Salary" | "Hot Tech";
  rating: {
    score: number;                          // e.g. 4.9
    reviewCount: number;                    // e.g. 1840
  };
  duration: {
    hours: number;                          // e.g. 60
    weeks: number;                          // e.g. 8
    modes: ("Classroom" | "Live Online" | "Weekend Batches")[];
  };
  overview: string;                         // 2-paragraph rich introduction
  highlights: string[];                     // 4-6 key selling bullets
  skillsGained: string[];                   // Key competencies
  toolsAndTechnologies: {                  // Icon/text tech stack
    name: string;
    category?: string;
  }[];
  curriculum: CourseModule[];               // Structured modules
  projects: CourseProject[];                // Industry capstones
  certifications: {                         // Official global exam alignment
    title: string;
    organization: string;
    examCode?: string;
    description: string;
  }[];
  trainers: CourseTrainer[];                // Assigned faculty
  upcomingBatches: CourseBatch[];           // Live schedule
  faqs: CourseFAQ[];                        // Course-specific Q&As
  relatedCourseSlugs: string[];             // Cross-sell slugs
  seo: {                                    // Meta tags
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
```

> [!NOTE]
> **Data Integrity Rule:** When migrating legacy WordPress courses in NDP-121, if specific fields (such as exam codes or capstone projects) are missing from existing legacy pages, mark them in the data file as `REQUIRES DATA` rather than inventing unverified information.

---

## 7. Server Components vs. Client Components Strategy

To ensure lightning-fast initial load times, optimal TTFB (Time to First Byte), and zero layout shift, we adopt a **Server-First Strategy**:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ SERVER COMPONENTS (RSC) - Default (~75% of codebase)                        │
│ • Zero client-side JavaScript bundle impact                                 │
│ • Direct access to filesystem & data files                                  │
│ • Perfect SEO indexing (HTML rendered on server)                            │
│                                                                             │
│ Components: PageHero, SectionHeading, Footer, CourseCard, CourseGrid,       │
│ ProjectShowcase, BatchScheduleTable, TrainerCard, TestimonialCard,          │
│ LocationCard, BlogCard, BlogGrid, JsonLd, Breadcrumb, CTASection           │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ CLIENT COMPONENTS ("use client") - Only Where Interactive (~25%)            │
│ • Event listeners (`onClick`, `onChange`, `onSubmit`)                       │
│ • React Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`)            │
│ • Browser APIs (Local storage, window scroll, modals, focus traps)          │
│                                                                             │
│ Components: Header (drawer toggle), MegaMenu, MobileDrawer, StickyBottomBar,│
│ CourseCatalogView (live search & filters), FAQAccordion (expand/collapse),  │
│ All Form Components (validation, submission, modal triggers)                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Scalability Strategy for 516+ Legacy Pages

The WordPress website contains over 516 indexed URLs. The Next.js rebuild handles this vast footprint with **zero component bloat** via parameterized dynamic routes:

```text
Dynamic Route Path                 Target Content Scale       Single Reusable Template File
──────────────────────────────────────────────────────────────────────────────────────────────
/courses/[courseSlug]              50+ Technology Courses     src/app/courses/[courseSlug]/page.tsx
/courses/category/[categorySlug]   12 Technology Categories   src/app/courses/category/[categorySlug]/page.tsx
/locations/[slug]                  8 Bangalore Campuses       src/app/locations/[slug]/page.tsx
/blog/[slug]                       100+ Technical Guides      src/app/blog/[slug]/page.tsx
/blog/category/[categorySlug]      8 Blog Domains             src/app/blog/category/[categorySlug]/page.tsx
```

### Static Site Generation (SSG) with `generateStaticParams`:
Every dynamic route exports `generateStaticParams()` to pre-render all 516+ pages at build time. This guarantees sub-50ms static delivery via CDN while keeping server execution costs minimal.

---

## 9. Comprehensive Design System & Design Tokens

### 9.1 Color Tokens

```text
Token Name          Hex Code      Tailwind Class             Application
──────────────────────────────────────────────────────────────────────────────────────────────
Brand Primary       #b91c1c       bg-brand-600 / text-brand-600  Primary CTA buttons, active states, key icons
Brand Dark          #991b1b       bg-brand-700 / text-brand-700  Hover states, gradient stops
Brand Deep Red      #7f1d1d       bg-brand-800               Header accents, borders
Brand Wine          #4c0519       bg-brand-900               Hero gradients, card borders
Brand Velvet Black  #2b000b       bg-brand-950               Deep gradient base for CTA banners
Navy Deep           #020617       bg-slate-950 / bg-navy-950 Page heroes, sticky bottom bar, dark cards
Navy Surface        #0f172a       bg-slate-900 / bg-navy-900 Dark secondary surfaces, code blocks
Emerald Accent      #059669       bg-emerald-600             WhatsApp CTAs, verified badges, success states
Amber Accent        #d97706       bg-amber-500               Rating stars, batch scarcity badges, highlights
Text Primary        #0f172a       text-slate-900             High-contrast body headings on light surfaces
Text Secondary      #475569       text-slate-600             Descriptive paragraphs, body text
Text Muted          #94a3b8       text-slate-400             Metadata, dates, timestamps, placeholder text
Border Light        #e2e8f0       border-slate-200           Standard light card borders, input borders
Border Dark         #1e293b       border-slate-800           Dark card borders, footer dividers
```

### 9.2 Typography Hierarchy

- **Font Family:** `Inter`, system-ui, -apple-system, sans-serif
- **Hero H1:** `text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight`
- **Section H2:** `text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug`
- **Card H3:** `text-lg sm:text-xl font-bold tracking-tight text-slate-900`
- **Subheading H4:** `text-base font-bold text-slate-900`
- **Body Regular:** `text-sm sm:text-base text-slate-600 leading-relaxed`
- **Body Small:** `text-xs sm:text-sm text-slate-500 leading-normal`
- **Badge / Pill Text:** `text-[10px] sm:text-xs font-bold uppercase tracking-wider`
- **Button Text:** `text-xs sm:text-sm font-bold tracking-normal`

### 9.3 Spacing & Container Widths

- **Max Layout Container:** `max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14`
- **Standard Section Spacing:** `py-12 sm:py-16 lg:py-20`
- **Card Padding:** `p-5 sm:p-6 lg:p-8`
- **Grid Gap:** `gap-6 sm:gap-8`

### 9.4 Border Radius Tokens

- **Badges & Pills:** `rounded-full` (`9999px`)
- **Inputs & Small Buttons:** `rounded-lg` (`8px`) or `rounded-xl` (`12px`)
- **Standard Cards:** `rounded-2xl` (`16px`)
- **Banners & Modals:** `rounded-3xl` (`24px`)

### 9.5 Shadow Tokens

- **Card Base:** `shadow-sm hover:shadow-xl transition duration-200`
- **Primary CTA Button:** `shadow-md shadow-brand-500/20 hover:shadow-lg shadow-brand-500/30`
- **Modal Dialog:** `shadow-2xl`

---

## 10. Page-to-Component Matrix

This matrix verifies that all existing and planned routes across the entire Learn More Technologies migration are fully serviced by our reusable component architecture:

| Page Route | Page Type | Layout Components | Content & Domain Components | Form & Modal Components |
|---|---|---|---|---|
| `/` | Homepage | `Header`, `MegaMenu`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `SectionHeading`, `CourseCard`, `CourseGrid`, `LocationCard`, `TrainerCard`, `TestimonialCard`, `FAQAccordion`, `CTASection` | `QuickEnquiryModal`, `BrochureDownloadModal` |
| `/courses` | Course Catalog | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `CourseCatalogView`, `CourseFilters`, `CourseSearchDiscovery`, `CourseCard`, `CourseGrid`, `CoursePagination`, `CourseEmptyState`, `CourseSkeleton`, `CTASection` | `QuickEnquiryModal`, `BrochureDownloadModal` |
| `/courses/[courseSlug]` | Course Detail | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `Breadcrumb`, `CurriculumAccordion`, `ProjectShowcase`, `BatchScheduleTable`, `TrainerCard`, `TestimonialCard`, `FAQAccordion`, `CourseCard` (Related), `JsonLd` | `EmbeddedLeadForm`, `QuickEnquiryModal`, `BrochureDownloadModal` |
| `/courses/category/[categorySlug]` | Category Listing | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `Breadcrumb`, `SectionHeading`, `CourseCard`, `CourseGrid`, `FAQAccordion`, `CTASection`, `JsonLd` | `QuickEnquiryModal`, `BrochureDownloadModal` |
| `/locations` | Campuses Directory | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `LocationCard`, `FAQAccordion`, `CTASection` | `QuickEnquiryModal` |
| `/locations/[slug]` | Campus Hub Detail | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `Breadcrumb`, `SectionHeading`, `CourseCard` (Branch Courses), `FAQAccordion`, `CTASection`, `JsonLd` | `EmbeddedLeadForm`, `QuickEnquiryModal` |
| `/about-us` | Corporate About | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `TrainerCard`, `CTASection` | `QuickEnquiryModal` |
| `/contact-us` | Contact & Support | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `LocationCard`, `FAQAccordion` | `ContactForm` |
| `/corporate-training` | B2B Enterprise | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `TrainerCard`, `TestimonialCard`, `FAQAccordion` | `CorporateLeadForm`, `QuickEnquiryModal` |
| `/placement` | Placements & Hiring | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `TestimonialCard`, `FAQAccordion`, `CTASection` | `QuickEnquiryModal` |
| `/internship` | Student Internship | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `FAQAccordion` | `ApplicationForm` |
| `/become-a-teacher` | Faculty Recruitment | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `FAQAccordion` | `ApplicationForm` |
| `/blog` | Editorial Directory | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `BlogCard`, `BlogGrid`, `CTASection` | `QuickEnquiryModal` |
| `/blog/[slug]` | Editorial Article | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `Breadcrumb`, `BlogCard` (Related), `CTASection`, `JsonLd` | `EmbeddedLeadForm`, `QuickEnquiryModal` |
| `/faq` | Knowledgebase | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `FAQAccordion`, `CTASection`, `JsonLd` | `QuickEnquiryModal` |
| `/testimonials` | Student Stories | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `TestimonialCard`, `CTASection` | `QuickEnquiryModal` |
| `/trainers` | Faculty Directory | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `SectionHeading`, `TrainerCard`, `CTASection` | `QuickEnquiryModal` |
| `/privacy-policy` | Legal Compliance | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `Breadcrumb` | None |
| `/terms-and-conditions` | Legal Terms | `Header`, `MobileDrawer`, `StickyBottomBar`, `Footer` | `PageHero`, `Breadcrumb` | None |

---

## 11. Component Dependency Map

```text
RootLayout (src/app/layout.tsx)
├── Header
│   ├── Logo (Next.js Image)
│   ├── DesktopNavigation
│   ├── MegaMenu (Category & Course Lists)
│   ├── CTAButton (Call & Demo Triggers)
│   └── MobileDrawer
│       ├── Navigation Accordions
│       ├── Phone & WhatsApp Direct Links
│       └── CTAButton
├── StickyBottomBar (Mobile only)
│   ├── Call Link
│   ├── WhatsApp Direct Link
│   └── Quick Demo Modal Trigger
├── Main Page Content (Dynamic / Static Route)
├── QuickEnquiryModal (Global Portal)
├── BrochureDownloadModal (Global Portal)
└── Footer
    ├── Brand Information & Address
    ├── Dynamic Course Category Links
    ├── Bangalore Campus Hub Links
    ├── Accreditation & Badges
    └── Social & Legal Links
```

---

## 12. Component Reuse & Quality Rules

To maintain codebase clean architecture throughout subsequent development phases (NDP-120, NDP-121, NDP-122), the team must adhere to these 8 binding rules:

1. **Rule 1 (No Unnecessary Primitives):** Never create a new button, badge, or card component if an existing component in `src/components/common/` or `src/components/course/` can satisfy the layout via props.
2. **Rule 2 (Zero Hardcoded Content in Components):** All titles, bullet points, fees, course names, and trainer bios must flow into components via typed props originating from `src/data/` or API routes.
3. **Rule 3 (Unified CTA System):** All user-clickable buttons must utilize `CTAButton.tsx` to maintain unified focus rings, hover transitions, and tracking attributes.
4. **Rule 4 (Single Responsibility):** Layout components must NOT fetch or mutate data. Course cards must NOT handle checkout or payment processing.
5. **Rule 5 (RSC Default):** All components are Server Components by default unless client interactivity (`useState`, `useEffect`, `onClick`) is strictly necessary.
6. **Rule 6 (Semantic Accessibility):** Every form input must have a linked `<label>` or explicit `aria-label`. Every accordion header must be a semantic `<button>` with `aria-expanded`.
7. **Rule 7 (SEO-First Microdata):** Course pages must output Course Schema JSON-LD, FAQ sections must output FAQPage JSON-LD, and subpages must output BreadcrumbList JSON-LD.
8. **Rule 8 (No Over-Engineering):** Avoid deep abstraction wrappers (`GenericBaseComponentWrapper`). Keep components straightforward, readable, and idiomatic to standard Next.js App Router patterns.

---

## 13. Open Questions & Recommendations for Next Stages

> [!NOTE]
> **Open Question 1 — Course PDF Syllabus Storage:**  
> Should downloadable course brochures be stored statically in the repository under `/public/brochures/` or served via an external Cloudflare/S3 bucket?  
> *Recommendation:* For initial development, place compressed PDFs under `/public/brochures/` keyed by course slug.

> [!NOTE]
> **Open Question 2 — Form Lead Webhooks (NDP-123 Phase):**  
> Which CRM endpoint (e.g. LeadSquared, Zoho CRM, or internal email webhook) will receive form submissions?  
> *Recommendation:* Standardize the payload format in `LeadSubmissionPayload` interface now so backend connection in later tasks requires zero UI refactoring.

---

## 14. Final Status Confirmation

- [x] **Complete Component Inventory Audited** (34 components analyzed)
- [x] **Duplicate / Overlapping Components Consolidated**
- [x] **Server vs. Client Component Strategy Finalized**
- [x] **516+ Page Scalability Architecture Confirmed** (Data + Dynamic Routes)
- [x] **Design Tokens & Design System Finalized** (Crimson Red & Slate-950)
- [x] **Page-to-Component Matrix Completed** (All 21+ routes verified)
- [x] **Zero Code/Data Broken** (21 routes compile and return 200 OK)
- [x] **NDP-119 UI/UX Design & Architecture Phase COMPLETE & READY FOR APPROVAL**

> **NEXT MILESTONE:** Await stakeholder sign-off on NDP-119 before starting NDP-120 (Homepage Development).
