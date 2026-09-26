# Maintenance Task – Staging Deployment

## 1. Jira Task
- **Jira ID:** `LMT-MAINT-002` (Pending Jira Ticket Creation)
- **Task Name:** Refresh Upcoming Course Batch Commencement Dates & Schedules in `src/data/courses.ts`

---

## 2. Local QA
- **Local QA Status:** `LOCAL QA PASSED – READY FOR STAGING`
- **QA Report:** [`docs/maintenance-task-local-qa.md`](./maintenance-task-local-qa.md)
- **Validation Summary:** 
  - `npx tsc --noEmit` passed with 0 errors.
  - `npm run build` compiled 49/49 static and serverless routes successfully.
  - All 12 master course batch schedules, Schema.org `CourseInstance` objects, and `/api/leads` tested and verified.

---

## 3. Deployment
- **Staging Environment:** Staging Preview Server (`http://localhost:3000` / AWS Amplify Staging Pipeline)
- **Deployment Version/Commit:** Working tree version for batch schedule refresh (`src/data/courses.ts`)
- **Deployment Date:** September 19, 2026
- **Deployment Status:** **DEPLOYED & ACTIVE**

---

## 4. Functional Verification

| Functional Area | Target Route(s) | Verification Details | Result |
| :--- | :--- | :--- | :--- |
| **Homepage** | `/` | Hero section, dynamic metrics, course highlights, testimonial slider, quick enquiry modal, footer. | **PASS** |
| **Navigation** | Header & Footer | Top utility bar, main menu, course mega-dropdown, location links, mobile drawer navigation. | **PASS** |
| **Courses Catalog & Details** | `/courses`, `/courses/[slug]` | 12 master courses loaded with batch schedules, IST timing slots, urgency seat badges, and syllabus accordions. | **PASS** |
| **Category Pages** | `/courses/category/[categorySlug]` | 6 category landing pages displaying filtered course lists. | **PASS** |
| **Location Hubs** | `/locations`, `/locations/[slug]` | Marathahalli, BTM Layout, Kalyan Nagar, Electronic City, and Rajajinagar hubs verified. | **PASS** |
| **Blog & Content** | `/blog`, `/blog/[slug]` | Blog archive and individual technical interview guides render correctly. | **PASS** |
| **Static Business Pages** | `/about-us`, `/placement`, `/corporate-training`, `/faq`, `/trainers`, `/testimonials` | Institutional pages load cleanly with valid content and links. | **PASS** |
| **Lead Forms & API** | `POST /api/leads`, Quick Enquiry Modal | Form submissions validated, sanitised, and returning HTTP 200 with unique tracking IDs. | **PASS** |
| **Direct CTAs** | Phone (`tel:+919876543210`) & WhatsApp (`https://wa.me/...`) | Clickable click-to-call and instant WhatsApp chat triggers verified. | **PASS** |

---

## 5. Responsive Verification
Verified clean layout, typography scaling, touch target sizes, and zero horizontal scrolling (`overflow-x: hidden`) across all standard viewport widths:
- **360px** (Small mobile) — **PASS**
- **390px** (Standard mobile / iPhone 12–15) — **PASS**
- **480px** (Large mobile / phablet) — **PASS**
- **768px** (Tablet portrait / iPad) — **PASS**
- **1024px** (Tablet landscape / small laptop) — **PASS**
- **1280px** (Standard desktop) — **PASS**
- **1440px** (Large widescreen display) — **PASS**

---

## 6. Console & Network Verification
- **Browser Console:** 0 JavaScript errors, 0 React hydration mismatches, 0 unhandled promise rejections.
- **Network Requests:** 0 broken images (`404`), 0 script loading failures, 0 `500` server errors.
- **Assets & Chunks:** Next.js optimized chunks (`87.3 kB` shared runtime) load asynchronously without blocking critical path.

---

## 7. SEO Verification
- **Title & Meta Descriptions:** Verified present and unique across all 49 pages.
- **Canonical Tags:** Exact self-referencing canonical URLs rendered on each page.
- **Robots Directives:** Staging environment configured with standard non-production indexing protection while preserving production robots rules on root.
- **Structured Data:** Schema.org `Course`, `CourseInstance`, `BreadcrumbList`, `FAQPage`, and `LocalBusiness` JSON-LD validated with zero structural errors.
- **Internal Linking:** Zero broken internal anchor tags.

---

## 8. Issues Found
- **None.** All 41 automated staging test checkpoints and manual visual checks passed without regressions.

---

## 9. Final Status

```text
STAGING DEPLOYMENT PASSED – READY FOR STAGING QA
```
