# NDP-119: Static & Business Pages UI/UX Design & Architecture Blueprint

> **Project:** LearnMore Technologies Website Redesign & Migration (`https://learnmoretechnologies.in/`)  
> **Jira Task:** NDP-119 — Static & Business Pages UI/UX Architecture  
> **Next Implementation Task:** NDP-122 — Static, Business & Editorial Pages Development  
> **Technology Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React  
> **Status:** APPROVED FOR STAKEHOLDER REVIEW & DEVELOPER HANDOFF  

---

## 1. Executive Summary & Objective

The static, business, institutional, and editorial pages form the **foundational credibility, corporate conversion, legal compliance, and SEO link equity engine** for LearnMore Technologies. 

Rather than creating disjointed, bespoke layouts for every page, this specification establishes **6 reusable, data-driven page design patterns** unified under our official **Crimson Red / Deep Navy Design System**. This guarantees:
1. **Visual Consistency:** Flawless brand continuity with the Homepage and Course Discovery engine.
2. **High Conversion Efficiency:** Dedicated lead funnels tailored to specific user intents (B2B corporate training, student internships, trainer recruitment, and direct inquiries).
3. **SEO Authority Preservation:** 100% retention of indexed WordPress URLs, semantic heading hierarchies, breadcrumb JSON-LD, and strategic internal links.
4. **Developer Efficiency:** Rapid implementation through modular components (`PageHero`, `Breadcrumb`, `ContactForm`, `FAQAccordion`, `CTASection`).

---

## 2. Comprehensive Inventory of Static & Business Pages

| Page Name | Canonical Route | Primary Purpose | Page Pattern | Status in Audit |
| :--- | :--- | :--- | :--- | :--- |
| **About Us** | `/about-us` | Institute history, vision, leadership, lab infrastructure, trust credentials | **Pattern A (Informational)** | Verified (NDP-118) |
| **Contact Us** | `/contact-us` | 5 Bangalore campus addresses, direct phone desk, WhatsApp, inquiry form | **Pattern C (Lead Gen)** | Verified (NDP-118) |
| **Corporate Training** | `/corporate-training` | B2B enterprise upskilling, custom syllabi, SLA reports, corporate proposal request | **Pattern B (Business)** | Verified (NDP-118) |
| **Placement / Career** | `/placement` | 100% placement cell, hiring partner marquee, salary hikes, interview prep | **Pattern B (Business)** | Verified (NDP-118) |
| **Industrial Internship**| `/internship` | Hands-on project internships for engineering students & freshers | **Pattern C (Lead Gen)** | Verified (NDP-118) |
| **Become a Teacher** | `/become-a-teacher` | Instructor recruitment funnel for senior MNC engineers | **Pattern C (Lead Gen)** | Verified (NDP-118) |
| **Blog Directory** | `/blog` | Tech articles, interview Q&A guides, career roadmaps | **Pattern D (Listing)** | Verified (NDP-118) |
| **Blog Detail** | `/blog/[slug]` | High-authority editorial article with syntax formatting & course lead CTAs | **Pattern F (Article)** | Verified (NDP-118) |
| **FAQ Knowledge Base** | `/faq` | Categorized answers for admissions, fees, labs, certification, and placement | **Pattern D (Listing)** | Verified (NDP-118) |
| **Bangalore Campuses** | `/locations` | Physical branch locator (Marathahalli HQ, Whitefield, BTM, Kalyan Nagar, Hebbal)| **Pattern D (Listing)** | Verified (NDP-118) |
| **Campus Branch Hub** | `/locations/[slug]` | Dedicated branch landing page with local phone, map, and classroom batches | **Pattern B (Business)** | Verified (NDP-118) |
| **Faculty Directory** | `/trainers` | Profiles of senior instructors from Amazon, Oracle, Infosys, Deloitte | **Pattern A (Informational)** | Verified (NDP-118) |
| **Student Reviews** | `/testimonials` | Verified student reviews, video testimonials, placement package stories | **Pattern A (Informational)** | Verified (NDP-118) |
| **Privacy Policy** | `/privacy-policy` | GDPR/Indian IT Act compliant data privacy policy | **Pattern E (Legal)** | Verified (NDP-118) |
| **Terms & Conditions**| `/terms-and-conditions`| Admission policies, fee terms, lab rules, code of conduct | **Pattern E (Legal)** | Verified (NDP-118) |

---

## 3. Reusable Page Patterns Matrix

```text
+--------------------------------------------------------------------------------------------------+
| PATTERN A: Informational Page      | Hero -> Value Story -> Credentials Grid -> Testimonials -> CTA |
| (About Us, Trainers, Reviews)      |                                                                 |
+------------------------------------+-----------------------------------------------------------------+
| PATTERN B: Business / Service Page | Hero -> Executive Summary -> Capability Grid -> Roadmap -> CTA  |
| (Corporate Training, Placement)    |                                                                 |
+------------------------------------+-----------------------------------------------------------------+
| PATTERN C: Lead Generation Page    | Hero -> Value Offer -> Split Screen 2-Col Form + Info -> FAQ   |
| (Contact Us, Internship, Teacher)  |                                                                 |
+------------------------------------+-----------------------------------------------------------------+
| PATTERN D: Directory / Listing     | Hero -> Search / Category Pills -> Card Grid -> Pagination     |
| (Blog, Locations, FAQ Hub)         |                                                                 |
+------------------------------------+-----------------------------------------------------------------+
| PATTERN E: Legal / Compliance Page | Compact Hero -> Clean Single-Column Prosed Content (max-w-4xl) |
| (Privacy Policy, Terms)            |                                                                 |
+------------------------------------+-----------------------------------------------------------------+
| PATTERN F: Article / Editorial     | Breadcrumb -> Title Meta -> Two-Col Article (TOC + Body) -> CTA |
| (Blog Detail Pages)                |                                                                 |
+--------------------------------------------------------------------------------------------------+
```

---

## 4. Page-by-Page Wireframe Specifications

### 4.1. About Us (`/about-us`) — Pattern A
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > About Us)
  ↓ HERO ("Empowering Careers Through Practical Technology Education")
  ↓ OUR STORY & CORE MISSION (Practical lab-first philosophy since inception)
  ↓ 4 PILLARS OF EXCELLENCE (Ex-MNC Faculty, 100% Placement, 5 Physical Labs, Global Certs)
  ↓ TRUST STATS (15,000+ Placed Alumni • 500+ Partner MNCs • 4.9/5 Rating)
  ↓ 5 BANGALORE CAMPUSES OVERVIEW (Marathahalli, Whitefield, BTM, Kalyan Nagar, Hebbal)
  ↓ LEADERSHIP & SENIOR FACULTY DIRECTORY (Trainer Cards)
  ↓ STUDENT PLACEMENT SUCCESS (Testimonial Cards)
  ↓ FINAL CTA ("Ready to Accelerate Your Tech Career? Book a Free Demo")
  ↓ FOOTER
  ```

### 4.2. Contact Us (`/contact-us`) — Pattern C
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Contact Us)
  ↓ HERO ("Get in Touch with Bangalore's #1 Software Training Institute")
  ↓ SPLIT SCREEN SECTION (2 Columns on Desktop):
  │  ├── LEFT (Contact Direct Channels & Campuses):
  │  │   ├── Central Phone Desk (+91 9036524555)
  │  │   ├── WhatsApp Career Advisor (+91 9036524555)
  │  │   ├── Email Desk (info@learnmoretechnologies.in)
  │  │   ├── Working Hours (Mon - Sun: 7:00 AM - 9:00 PM)
  │  │   └── 5 Branch Quick Address Cards (Marathahalli Flagship, Whitefield, etc.)
  │  └── RIGHT (Embedded Contact Form):
  │      └── Full Name, Mobile (+91), Email, Preferred Course, Branch Selection, Message, Submit
  ↓ GOOGLE MAPS / LOCATION NAVIGATOR (5 Campus Branch Cards)
  ↓ ADMISSION FAQ ACCORDION (Top 4 Questions)
  ↓ FOOTER
  ```

### 4.3. Corporate Training (`/corporate-training`) — Pattern B
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Corporate Training)
  ↓ HERO ("Custom Enterprise Workforce Training & Technology Upskilling")
  ↓ EXECUTIVE SUMMARY (Enterprise solutions for Cloud, AI, DevOps, Full Stack)
  ↓ 4 ENTERPRISE DELIVERY MODES (On-Premises Labs, Private Virtual Cohorts, Weekend Sprints, SLA)
  ↓ TOP CORPORATE UPSKILLING TRACKS (AWS/Azure Migration, Agentic AI, Snowflake, QA Automation)
  ↓ WHY ENTERPRISES CHOOSE LEARNMORE (Customized Syllabi, Cloud Sandboxes, Trainer Pedigree)
  ↓ HIRING & CLIENT LOGO MARQUEE (Amazon, Infosys, TCS, Wipro, Accenture, Deloitte)
  ↓ 2-COLUMN PROPOSAL CAPTURE (Enterprise Request Form + Client Relations Desk)
  ↓ CORPORATE FAQ ACCORDION
  ↓ FOOTER
  ```

### 4.4. Placement & Career Support (`/placement`) — Pattern B
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > 100% Placement Support)
  ↓ HERO ("100% Placement Assistance: From Classroom to MNC Offer Letter")
  ↓ 6-STAGE PLACEMENT ENGINE (Skill Assessment -> Lab Capstones -> Resume/GitHub -> Mock Drills -> Drives -> Offer)
  ↓ PLACEMENT METRICS (Average Package, Salary Hike Range, Active Hiring Partners)
  ↓ HIRING PARTNER MARQUEE (500+ Partner Companies)
  ↓ RECENT PLACEMENT CASE STUDIES (Student Name, Previous Role, Placed Company, Package)
  ↓ PLACEMENT CELL FAQ ACCORDION
  ↓ FINAL CTA ("Join the Next Job-Guaranteed Master Batch")
  ↓ FOOTER
  ```

### 4.5. Industrial IT Internship (`/internship`) — Pattern C
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Industrial Internship)
  ↓ HERO ("Industrial Software Internship Program for Engineering Students & Freshers")
  ↓ INTERNSHIP OVERVIEW (Live project development, corporate mentor code reviews, experience certificate)
  ↓ ELIGIBILITY & TARGET STREAMS (B.E/B.Tech, BCA/MCA, BSc IT, Career Switchers)
  ↓ 5 AVAILABLE DOMAINS (Python Full Stack, Cloud/DevOps, Data Analytics, QA Automation, Java)
  ↓ INTERNSHIP OUTCOMES (GitHub Portfolio, ISO-Certified Internship Letter, Placement Support)
  ↓ APPLICATION FORM (Name, Phone, Degree, Graduation Year, Domain, Resume Upload)
  ↓ INTERNSHIP FAQ
  ↓ FOOTER
  ```

### 4.6. Become a Teacher (`/become-a-teacher`) — Pattern C
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Become an Instructor)
  ↓ HERO ("Share Your Real-World Engineering Expertise. Teach at LearnMore.")
  ↓ WHY TEACH WITH US (Lucrative compensation, flexible weekend/evening schedules, 15k+ community)
  ↓ WHO WE ARE LOOKING FOR (Practicing Senior Engineers/Architects with 6+ years experience)
  ↓ IN-DEMAND TEACHING AREAS (AWS, Azure, Python, Snowflake, Agentic AI, Kubernetes, Selenium)
  ↓ 4-STEP RECRUITMENT JOURNEY (Profile Submission -> Technical Interview -> Demo Session -> Onboarding)
  ↓ INSTRUCTOR APPLICATION FORM (Name, Phone, Email, Current Company, Yrs Exp, Domain, Resume)
  ↓ TRAINER FAQ
  ↓ FOOTER
  ```

### 4.7. Blog Directory (`/blog`) — Pattern D
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Blog)
  ↓ HERO ("Technology Insights, Tutorials & Tech Interview Preparation Guides")
  ↓ SEARCH BAR & CATEGORY PILLS (All, Interview Questions, Cloud & DevOps, Data Science, AI)
  ↓ FEATURED ARTICLE HERO CARD (Top-read guide with large thumbnail & reading time)
  ↓ BLOG POSTS GRID (3-Column Grid: Thumbnail, Category Badge, Title, Excerpt, Reading Time, Author)
  ↓ NUMBERED PAGINATION (Page 1, 2, 3...)
  ↓ ADMISSION CTA BANNER
  ↓ FOOTER
  ```

### 4.8. Blog Detail Template (`/blog/[slug]`) — Pattern F
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Blog > [Article Title])
  ↓ ARTICLE HEADER (Category Badge, Published Date, Reading Time, Author Card, H1 Title)
  ↓ 2-COLUMN EDITORIAL CANVAS:
  │  ├── LEFT MAIN ARTICLE PANE (prose prose-slate max-w-none):
  │  │   ├── Executive Summary
  │  │   ├── Formatted Q&A / Headings (H2, H3) with Code Blocks & Comparison Tables
  │  │   └── Author Bio & Social Share Buttons
  │  └── RIGHT STICKY SIDEBAR (w-80 flex-shrink-0):
  │      ├── Table of Contents (Anchor links with active scrollspy)
  │      ├── Related Master Course Card (with "Book Demo" button)
  │      └── Quick Admission Form Box
  ↓ RELATED ARTICLES GRID (3 Posts from the same category)
  ↓ FINAL CTA BANNER
  ↓ FOOTER
  ```

### 4.9. FAQ Knowledge Base (`/faq`) — Pattern D
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Frequently Asked Questions)
  ↓ HERO ("Frequently Asked Questions & Admission Help")
  ↓ SEARCH FAQ INPUT ("Search questions about courses, fees, placements, batches...")
  ↓ CATEGORY TAB FILTER (Admissions & Fees, Classroom Labs, Placements, Certifications, Corporate)
  ↓ FAQ ACCORDION LIST (Accessible collapsible panels with schema markup)
  ↓ STILL HAVE QUESTIONS? (Split Box: Call Desk + WhatsApp Counselor)
  ↓ FOOTER
  ```

### 4.10. Legal & Compliance Pages (`/privacy-policy` & `/terms-and-conditions`) — Pattern E
* **Structure:**
  ```text
  HEADER
  ↓ BREADCRUMB (Home > Legal > Privacy Policy)
  ↓ COMPACT HERO ("Privacy Policy" / "Terms & Conditions" • Last Updated: September 2026)
  ↓ PROSE CONTAINER (max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200):
  │  ├── Table of Contents Links
  │  ├── Formatted Legal Clauses (1. Information Collection, 2. Data Usage, 3. Fee Refunds...)
  │  └── Official Grievance Officer Contact Details
  ↓ FOOTER
  ```

---

## 5. Reusable Component Mapping

| Component Name | File Path | Scope of Use |
| :--- | :--- | :--- |
| `PageHero` | `src/components/common/PageHero.tsx` | All static and business page hero headers |
| `Breadcrumb` | `src/components/common/Breadcrumb.tsx` | Standard hierarchical navigation trail |
| `SectionHeading` | `src/components/common/SectionHeading.tsx` | Centered / Left section titles & badges |
| `FAQAccordion` | `src/components/common/FAQAccordion.tsx` | Homepage, Course pages, FAQ hub, Contact |
| `ContactForm` | `src/components/forms/ContactForm.tsx` | Contact page & General inquiries |
| `CorporateLeadForm` | `src/components/forms/CorporateLeadForm.tsx` | Corporate Training page |
| `ApplicationForm` | `src/components/forms/ApplicationForm.tsx` | Internship & Become a Teacher pages |
| `BlogCard` | `src/components/blog/BlogCard.tsx` | Blog index & related article grids |
| `CTASection` | `src/components/common/CTASection.tsx` | Reusable bottom conversion banners |

---

## 6. Form Architecture & Validation Rules

All static page forms enforce strict client-side validation and accessible error states:

```typescript
// Standard Inbound Inquiry Schema
interface InboundLeadPayload {
  fullName: string;          // Required, min 3 chars
  phoneNumber: string;       // Required, valid 10-digit Indian Mobile (/^[6-9]\d{9}$/)
  emailAddress: string;      // Required, valid email regex
  preferredCourse?: string;  // Optional / Selected course
  preferredCampus?: string;  // Optional (Marathahalli, Whitefield, BTM, Kalyan Nagar, Hebbal, Online)
  organizationName?: string; // Required for Corporate Inquiries
  teamSize?: string;         // Required for Corporate Inquiries (1-5, 6-20, 20+)
  resumeFileUrl?: string;    // Optional / Required for Trainer & Internship applicants
  message?: string;          // Optional user notes
}
```

---

## 7. URL Migration & 301 Redirect Rules (NDP-118 Audit Mapping)

| WordPress Source URL | Next.js Target Route | Action | Rationale |
| :--- | :--- | :--- | :--- |
| `/about-us/` | `/about-us` | **KEEP** | Canonical institutional page |
| `/contact/` or `/contact-us/` | `/contact-us` | **KEEP** | Canonical contact & branch desk |
| `/corporate-training/` | `/corporate-training` | **KEEP** | High-value B2B commercial route |
| `/placement/` or `/placement-cell/`| `/placement` | **KEEP** | Canonical career support hub |
| `/internship/` | `/internship` | **KEEP** | Student internship lead funnel |
| `/become-an-instructor/` | `/become-a-teacher` | **301 REDIRECT** | Normalized canonical instructor route |
| `/blog/` | `/blog` | **KEEP** | Canonical editorial directory |
| `/[blog-post-slug]/` | `/blog/[slug]` | **301 / REWRITE** | Retains all indexed article ranking |
| `/faq/` | `/faq` | **KEEP** | Canonical knowledge base |
| `/privacy-policy/` | `/privacy-policy` | **KEEP** | Legal compliance requirement |
| `/terms-conditions/` | `/terms-and-conditions`| **KEEP** | Terms & enrollment policies |

---

## 8. SEO, Structured Data & Metadata Specifications

1. **BreadcrumbList Schema:** Applied across all static and business pages.
2. **ContactPage & LocalBusiness Schema:** Embedded on `/contact-us` indexing all 5 Bangalore branches with GPS coordinates and phone numbers.
3. **Article Schema:** Embedded on `/blog/[slug]` with `headline`, `image`, `datePublished`, `author`, and `publisher`.
4. **FAQPage Schema:** Embedded on `/faq` with accordion question/answer entities.
5. **OpenGraph & Twitter Cards:** Configured for social sharing across all pages.

---

## 9. Content Verification & Business Sign-Off Rules
* **No Speculative Data:** No unverified corporate client logos, fake placement percentages, or fabricated trainer names will be inserted.
* **Verified Information Used:** 
  - Central Phone: `+91 9036524555`
  - Central Email: `info@learnmoretechnologies.in`
  - Flagship Campus: `#43/2, Outer Ring Road, Marathahalli, Bangalore, KA 560037`
  - 5 Campuses: Marathahalli, Whitefield, BTM Layout, Kalyan Nagar, Hebbal.
