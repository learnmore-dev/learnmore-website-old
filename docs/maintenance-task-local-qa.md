# Maintenance Task – Local QA & Testing Report

## 1. Task Summary
- **Task:** Refresh Upcoming Course Batch Commencement Dates & Schedules in `src/data/courses.ts`
- **Category:** Content & Course Data Maintenance
- **Priority:** **P2**
- **Target Branch / Environment:** Local Development & Staging

---

## 2. Implementation Status
- **Build Status:** **PASS** (`npm run build` completed with 0 errors across 49/49 static and dynamic routes).
- **TypeScript Compilation:** **PASS** (`npx tsc --noEmit` clean, 0 type errors).
- **Lint Check:** **PASS** (`next lint` clean).

---

## 3. Scope of Testing
1. **Course Data Layer:** All 12 master courses in `src/data/courses.ts` verified for realistic upcoming batch schedules (Weekday Morning, Weekday Evening, Weekend Fast-Track), IST time slots, delivery modes (`Classroom`, `Live Online`, `Hybrid`), and urgency seat counters (3–7 seats remaining).
2. **Schema.org Structured Data:** Verified dynamic generation of `CourseInstance` array within `Course` JSON-LD on all 12 course routes.
3. **Core Regression Suite:** Verified 21 core canonical pages, 6 category routes, 5 location hubs, 4 blog articles, `robots.txt`, and `sitemap.xml`.
4. **API Integration:** Verified `/api/leads` POST route recording submissions and generating valid unique tracking IDs.
5. **UI & Viewports:** Verified responsive rendering across 360px, 390px, 480px, 768px, 1024px, 1280px, and 1440px.

---

## 4. Test Results Across 12 Master Courses

| Course Slug | Batch Count | Time Slot (IST) | Mode | Seat Counter | Schema.org Valid | Result |
| :--- | :---: | :--- | :--- | :---: | :---: | :---: |
| `aws-certified-solutions-architect` | 3 | 07:30 AM - 09:30 AM / 07:00 PM - 09:00 PM / 10:00 AM - 02:00 PM | Classroom / Online / Hybrid | 4, 5, 6 | Yes | **PASS** |
| `python-full-stack-course` | 3 | 08:00 AM - 10:00 AM / 07:00 PM - 09:00 PM / 10:30 AM - 02:30 PM | Classroom / Online / Hybrid | 3, 5, 7 | Yes | **PASS** |
| `data-science-course` | 2 | 07:30 AM - 09:30 AM / 10:00 AM - 02:00 PM | Classroom / Hybrid | 4, 6 | Yes | **PASS** |
| `devops-training` | 3 | 07:00 AM - 09:00 AM / 07:30 PM - 09:30 PM / 10:00 AM - 02:00 PM | Classroom / Online / Hybrid | 3, 4, 6 | Yes | **PASS** |
| `software-testing-course` | 2 | 08:30 AM - 10:30 AM / 10:00 AM - 02:00 PM | Classroom / Hybrid | 5, 7 | Yes | **PASS** |
| `power-bi-course` | 2 | 08:00 AM - 10:00 AM / 10:00 AM - 02:00 PM | Classroom / Online | 4, 6 | Yes | **PASS** |
| `agentic-ai-course` | 2 | 07:00 PM - 09:00 PM / 10:00 AM - 02:00 PM | Live Online / Hybrid | 3, 5 | Yes | **PASS** |
| `snowflake-training` | 2 | 07:30 AM - 09:30 AM / 10:00 AM - 02:00 PM | Classroom / Hybrid | 4, 5 | Yes | **PASS** |
| `java-full-stack-course` | 3 | 08:00 AM - 10:00 AM / 07:00 PM - 09:00 PM / 10:00 AM - 02:00 PM | Classroom / Online / Hybrid | 4, 5, 7 | Yes | **PASS** |
| `microsoft-azure-training` | 2 | 07:30 AM - 09:30 AM / 10:00 AM - 02:00 PM | Classroom / Online | 5, 6 | Yes | **PASS** |
| `data-analytics-course` | 2 | 08:00 AM - 10:00 AM / 10:00 AM - 02:00 PM | Classroom / Hybrid | 4, 6 | Yes | **PASS** |
| `oracle-dba-training` | 2 | 07:30 AM - 09:30 AM / 10:00 AM - 02:00 PM | Classroom / Hybrid | 3, 5 | Yes | **PASS** |

---

## 5. Core Regression Results (21 Checkpoints)

- **Homepage (`/`):** **PASS** (Status 200 OK, Hero CTA, Testimonial ticker, Footer)
- **About Us (`/about-us`):** **PASS** (Status 200 OK)
- **Courses Index (`/courses`):** **PASS** (Status 200 OK)
- **Corporate Training (`/corporate-training`):** **PASS** (Status 200 OK)
- **Placements (`/placement`):** **PASS** (Status 200 OK)
- **Blog Index (`/blog`):** **PASS** (Status 200 OK)
- **Contact Us (`/contact-us`):** **PASS** (Status 200 OK)
- **Privacy Policy (`/privacy-policy`):** **PASS** (Status 200 OK)
- **Terms and Conditions (`/terms-and-conditions`):** **PASS** (Status 200 OK)
- **Testimonials (`/testimonials`):** **PASS** (Status 200 OK)
- **FAQ (`/faq`):** **PASS** (Status 200 OK)
- **Become a Teacher (`/become-a-teacher`):** **PASS** (Status 200 OK)
- **Internship (`/internship`):** **PASS** (Status 200 OK)
- **Locations Index (`/locations`):** **PASS** (Status 200 OK)
- **Marathahalli Location (`/locations/marathahalli`):** **PASS** (Status 200 OK)
- **BTM Layout Location (`/locations/btm`):** **PASS** (Status 200 OK)
- **Kalyan Nagar Location (`/locations/kalyan-nagar`):** **PASS** (Status 200 OK)
- **Trainers Page (`/trainers`):** **PASS** (Status 200 OK)
- **Sample Blog Post (`/blog/data-analyst-interview-questions-answers`):** **PASS** (Status 200 OK)
- **Robots.txt (`/robots.txt`):** **PASS** (Status 200 OK)
- **Sitemap.xml (`/sitemap.xml`):** **PASS** (Status 200 OK)

---

## 6. Lead Capture API Test
- **Endpoint:** `POST /api/leads`
- **Payload:** `{"name":"Staging QA Verification Lead","email":"staging.qa@learnmoretechnologies.in","phone":"+91 9876543210","course":"AWS Certified Solutions Architect & Cloud Practitioner Training","source":"Staging Deployment Validation"}`
- **Response:** `200 OK`, `{"success":true,"message":"Lead recorded successfully.","leadId":"LEAD-1789794043911"}`
- **Result:** **PASS**

---

## 7. Final Local QA Status

```text
LOCAL QA PASSED – READY FOR STAGING
```
