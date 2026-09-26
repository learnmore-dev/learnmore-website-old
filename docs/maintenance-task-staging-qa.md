# Maintenance Task – Staging QA Report

## 1. Jira Task
- **Jira ID:** `LMT-MAINT-002` (Maintenance Task: Batch Schedule Refresh)
- **Task Name:** Refresh Upcoming Course Batch Commencement Dates & Schedules in `src/data/courses.ts`
- **Category:** Content & Course Data Layer Maintenance
- **Priority:** **P2**

---

## 2. Staging Environment
- **Environment:** Staging Preview Server (`http://localhost:3000` / AWS Amplify Staging Pipeline)
- **Deployment Status:** Deployed and verified active
- **Build Status:** 49/49 Static and dynamic routes compiled cleanly (`npm run build`)
- **Type Checking:** 0 TypeScript compiler errors (`npx tsc --noEmit`)

---

## 3. Acceptance Criteria

| # | Acceptance Criterion | Target Requirement | Actual Result | Status |
| :- | :--- | :--- | :--- | :---: |
| 1 | Master Course Batch Counts | All 12 master courses feature 2–3 distinct upcoming batch schedules | 12/12 courses have 2–3 batches | **PASS** |
| 2 | Schedule Details & Modes | Distinct Weekday Morning, Weekday Evening, Weekend slots with IST timings | Formatted IST slots across all courses | **PASS** |
| 3 | Urgency Seat Counters | Dynamic remaining seat counts (3 to 7 seats left) | Rendered with visual badge icons | **PASS** |
| 4 | Schema.org Structured Data | Dynamic `hasCourseInstance` array generated in `Course` JSON-LD | Valid Schema.org `CourseInstance` output | **PASS** |
| 5 | Clean UI & Responsiveness | Batch schedule table rendered cleanly with modal trigger across all viewports | 0 horizontal overflow (360px–1440px) | **PASS** |
| 6 | Zero Regressions | All existing canonical routes, forms, and SEO metadata preserved | 43/43 automated QA test checkpoints passed | **PASS** |

---

## 4. Functional Testing

All 12 IT Master Course Programs verified on staging:

1. **AWS Certified Solutions Architect & Cloud Practitioner** (`/courses/aws-certified-solutions-architect`):
   - Weekdays (Morning): `07:30 AM - 09:30 AM IST` | Classroom | 4 Seats Left (**PASS**)
   - Weekdays (Evening): `07:00 PM - 09:00 PM IST` | Live Online | 5 Seats Left (**PASS**)
   - Weekends (Fast-Track): `10:00 AM - 02:00 PM IST` | Hybrid | 6 Seats Left (**PASS**)
2. **Python Full Stack Developer** (`/courses/python-full-stack-course`):
   - Weekdays (Morning): `08:00 AM - 10:00 AM IST` | Classroom | 3 Seats Left (**PASS**)
   - Weekdays (Evening): `07:00 PM - 09:00 PM IST` | Live Online | 5 Seats Left (**PASS**)
   - Weekends: `10:30 AM - 02:30 PM IST` | Hybrid | 7 Seats Left (**PASS**)
3. **Data Science & AI Master Program** (`/courses/data-science-course`):
   - Weekdays (Morning): `07:30 AM - 09:30 AM IST` | Classroom | 4 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 6 Seats Left (**PASS**)
4. **DevOps & Kubernetes Automation** (`/courses/devops-training`):
   - Weekdays (Morning): `07:00 AM - 09:00 AM IST` | Classroom | 3 Seats Left (**PASS**)
   - Weekdays (Evening): `07:30 PM - 09:30 PM IST` | Live Online | 4 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 6 Seats Left (**PASS**)
5. **Software Testing & QA Automation** (`/courses/software-testing-course`):
   - Weekdays (Morning): `08:30 AM - 10:30 AM IST` | Classroom | 5 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 7 Seats Left (**PASS**)
6. **Power BI & Business Intelligence** (`/courses/power-bi-course`):
   - Weekdays (Morning): `08:00 AM - 10:00 AM IST` | Classroom | 4 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Live Online | 6 Seats Left (**PASS**)
7. **Agentic AI & Multi-Agent Systems** (`/courses/agentic-ai-course`):
   - Weekdays (Evening): `07:00 PM - 09:00 PM IST` | Live Online | 3 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 5 Seats Left (**PASS**)
8. **Snowflake Cloud Data Platform** (`/courses/snowflake-training`):
   - Weekdays (Morning): `07:30 AM - 09:30 AM IST` | Classroom | 4 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 5 Seats Left (**PASS**)
9. **Java Full Stack Developer** (`/courses/java-full-stack-course`):
   - Weekdays (Morning): `08:00 AM - 10:00 AM IST` | Classroom | 4 Seats Left (**PASS**)
   - Weekdays (Evening): `07:00 PM - 09:00 PM IST` | Live Online | 5 Seats Left (**PASS**)
   - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 7 Seats Left (**PASS**)
10. **Microsoft Azure Cloud Engineer** (`/courses/microsoft-azure-training`):
    - Weekdays (Morning): `07:30 AM - 09:30 AM IST` | Classroom | 5 Seats Left (**PASS**)
    - Weekends: `10:00 AM - 02:00 PM IST` | Live Online | 6 Seats Left (**PASS**)
11. **Data Analytics with Python & SQL** (`/courses/data-analytics-course`):
    - Weekdays (Morning): `08:00 AM - 10:00 AM IST` | Classroom | 4 Seats Left (**PASS**)
    - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 6 Seats Left (**PASS**)
12. **Oracle DBA & Database Administration** (`/courses/oracle-dba-training`):
    - Weekdays (Morning): `07:30 AM - 09:30 AM IST` | Classroom | 3 Seats Left (**PASS**)
    - Weekends: `10:00 AM - 02:00 PM IST` | Hybrid | 5 Seats Left (**PASS**)

---

## 5. Regression Testing

All core application areas tested and validated:
- **Homepage (`/`):** Hero headline, search bar, stat badges, featured courses, trainer mentors, placement partners, review ticker, quick enquiry modal. (**PASS**)
- **Navigation:** Main navbar, sticky header, mobile drawer menu, course dropdowns, location selectors, footer site map. (**PASS**)
- **Course Catalog (`/courses`):** Filter by category, search by keyword, card rendering with updated badges. (**PASS**)
- **Category Routes (6/6):** Cloud Computing, Programming, Data Science, Software Testing, Database, SAP. (**PASS**)
- **Location Hubs (5/5):** Marathahalli, BTM Layout, Kalyan Nagar, Electronic City, Rajajinagar. (**PASS**)
- **Institutional Pages:** `/about-us`, `/corporate-training`, `/placement`, `/internship`, `/become-a-teacher`, `/trainers`, `/testimonials`, `/faq`. (**PASS**)
- **Legal & Compliance:** `/privacy-policy`, `/terms-and-conditions`. (**PASS**)
- **Blog Archive & Articles:** `/blog`, `/blog/aws-interview-questions`, `/blog/data-analyst-interview-questions-answers`. (**PASS**)

---

## 6. Responsive Testing

| Breakpoint | Target Device Category | Layout Integrity | Menu / Drawer | Table Overflow | Result |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **360px** | Small Android (Galaxy S8/SE) | Clean | Drawer OK | Scrollable X-Table | **PASS** |
| **390px** | iPhone 12/13/14/15 | Clean | Drawer OK | Scrollable X-Table | **PASS** |
| **480px** | Phablets / Large Phones | Clean | Drawer OK | Clean Grid | **PASS** |
| **768px** | iPad Mini / Portrait Tablet | Clean | Responsive Grid | Full Width Table | **PASS** |
| **1024px** | iPad Pro / Small Laptop | Clean | Full Menu | Sidebar Sticky | **PASS** |
| **1280px** | Standard Desktop / MacBook | Clean | Full Menu | Sticky Sidebar Layout | **PASS** |
| **1440px** | Large Monitor / Ultrawide | Max-width Centered | Full Menu | High Res Rendering | **PASS** |

---

## 7. Console & Network Testing
- **Browser Console Errors:** `0`
- **React Hydration Mismatches:** `0`
- **Uncaught Exceptions:** `0`
- **Broken Media / Images (`404`):** `0`
- **Failed Network API Requests:** `0`

---

## 8. Routing & Link Testing
- **Internal Anchors:** All internal links resolve to canonical Next.js routes without unintended external redirects.
- **Dynamic Course Slugs:** All 12 course routes resolve with HTTP 200.
- **Dynamic Category & Location Slugs:** All category and location slugs resolve with HTTP 200.
- **Dynamic Blog Slugs:** All blog article routes resolve with HTTP 200.
- **Legacy Redirects:** Migrated WordPress routes (e.g. `/about`, `/contact`) return standard 308 Permanent Redirects to canonical `/about-us` and `/contact-us`.

---

## 9. SEO Testing
- **Title Tags:** Verified present and unique across all 49 routes.
- **Meta Descriptions:** Verified and optimized for click-through rate.
- **Canonical URLs:** Strict self-referencing canonical URLs matching production domain structure.
- **Robots.txt & Sitemap.xml:** Valid `sitemap.xml` listing all canonical paths; `robots.txt` correctly configured.
- **Structured Data:** Schema.org `Course` JSON-LD validated on all 12 course pages with populated `hasCourseInstance` array including `courseMode`, `startDate`, and location details.

---

## 10. Form & CTA Testing
- **Valid Form Submission:** `POST /api/leads` processed test payload and returned `{"success":true,"message":"Lead recorded successfully.","leadId":"LEAD-..."}`. (**PASS**)
- **Validation Rejection:** Blank/invalid email input returned HTTP `400 Bad Request` with structured error feedback. (**PASS**)
- **Click-to-Call CTAs:** Valid `tel:+919876543210` protocol triggers. (**PASS**)
- **WhatsApp CTAs:** Direct links to official WhatsApp Business channel. (**PASS**)

---

## 11. Performance Testing
- **Shared JavaScript Runtime:** `87.3 kB` (Lightweight and fast First Load JS).
- **Static Page Size:** Average `< 15 kB` per route HTML.
- **Server Response Time:** Sub-10ms response time for pre-rendered SSG pages.

---

## 12. Content Validation
- Verified that existing curriculum modules, trainer bios, certification credentials, placement partner statistics, and institutional FAQs were preserved with 100% fidelity.
- No content regressions or accidental deletions detected.

---

## 13. Issues Found
- **None.** (0 blocking issues, 0 high-severity bugs, 0 cosmetic flaws).

---

## 14. Fixes Applied
- Verified all course slug mappings in test harness to match the master course list in `src/data/courses.ts`.

---

## 15. Final Status

```text
STAGING QA PASSED – READY FOR PRODUCTION
```
