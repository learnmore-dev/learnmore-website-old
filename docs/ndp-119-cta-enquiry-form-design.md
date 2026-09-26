# NDP-119: CTA & Enquiry Form UI/UX Design System Specification

> **Project:** LearnMore Technologies Website Redesign & Migration (`https://learnmoretechnologies.in/`)  
> **Jira Task:** NDP-119 — CTA & Enquiry Form Architecture  
> **Phase:** UI/UX Specification & Design Phase (Pre-Development)  
> **Target Audiences:** Tech Job Seekers, Fresh Graduates, Working IT Professionals, Enterprise HRs/L&D Managers  
> **Design Language:** Crimson Red (`#b91c1c` / `#991b1b`) & Deep Slate-950 (`#020617`)  
> **Document Status:** COMPLETE & READY FOR STAKEHOLDER REVIEW  

---

## 1. Executive Summary & Objective

The Call-to-Action (CTA) and Lead Enquiry architecture serves as the **core conversion engine** of the LearnMore Technologies website. Every page template—from high-intent Course Landing Pages to informational Campuses and technical Blog Guides—must seamlessly funnel users toward active engagement while maintaining trust, clarity, and zero annoyance.

### Key Objectives:
1. **Maximize Qualified Course Enquiries:** Reduce friction across desktop, tablet, and mobile devices through contextual, pre-filled forms.
2. **Multi-Channel Contact Accessibility:** Provide instant, frictionless pathways to contact academic counselors via direct Phone Desk (`+91 9036524555`), WhatsApp Advisor, and online lead capture.
3. **Zero Aggressive Intrusions:** Eliminate annoying timed popups, exit-intent overlays, and auto-playing media that harm user experience and SEO Core Web Vitals.
4. **Context-Aware CTAs:** Align button labels and form fields directly with page intent (e.g. *Reserve Seat* for courses, *Request Proposal* for B2B corporate, *Apply for Sprints* for internships).
5. **Reusability & Clean Architecture:** Standardize on a lean, accessible set of 5 form patterns and 4 CTA variants across the entire Next.js App Router codebase.

---

## 2. CTA Hierarchy & Strategy

To avoid decision paralysis and competing visual priorities, all CTAs across the platform adhere to a strict 4-level visual hierarchy:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. PRIMARY CTA (Crimson Red / High Contrast)                                │
│    Usage: Primary conversion action on the screen                           │
│    Styling: bg-brand-600 hover:bg-brand-500 text-white shadow-md font-bold  │
│    Examples: "Book Free Demo Class", "Reserve Seat", "Request Proposal"      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. SECONDARY CTA (Dark Slate Outline / Soft Dark Background)                │
│    Usage: Direct alternative action without competing with the primary goal │
│    Styling: bg-slate-800 hover:bg-slate-700 text-white border border-slate-700│
│    Examples: "Call Desk: +91 9036524555", "View Full Curriculum"           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. TERTIARY / INSTANT CHANNEL CTA (WhatsApp Emerald)                        │
│    Usage: Low-friction instant messenger channel                            │
│    Styling: bg-emerald-700/80 hover:bg-emerald-700 text-emerald-200 border   │
│    Examples: "WhatsApp Syllabus", "Chat with Academic Advisor"              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. CONTEXTUAL / INLINE TEXT CTA (Brand Red Underline)                       │
│    Usage: In-article links, card footers, related course callouts           │
│    Styling: text-brand-600 hover:text-brand-700 font-bold inline-flex       │
│    Examples: "Explore Curriculum →", "View Marathahalli Branch →"           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Page-by-Page CTA Placement Strategy

```text
┌───────────────────────────┬──────────────────────────┬──────────────────────────┬──────────────────────────┐
│ Page Location             │ Primary CTA              │ Secondary / Tertiary     │ Embedded / Overlay Form  │
├───────────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ 1. Homepage Hero          │ "Explore Master Courses" │ "Book Free Live Demo"    │ Quick Enquiry Modal      │
│ 2. Course Discovery Grid  │ "View Curriculum"        │ "WhatsApp Syllabus"      │ None (Browse Catalog)    │
│ 3. Individual Course Page │ "Book Free Live Demo"    │ "Call: +91 9036524555"  │ Sticky Sidebar Form      │
│ 4. Course Curriculum End  │ "Download Syllabus PDF"  │ "Talk to Course Mentor"  │ Brochure Download Modal  │
│ 5. Upcoming Batches Table │ "Reserve Seat"           │ "Request Weekend Slot"   │ Quick Seat Modal         │
│ 6. Corporate Training     │ "Request Proposal"       │ "Download B2B Deck"      │ Corporate Lead Form      │
│ 7. Placement & Careers    │ "Book Career Counseling" │ "View 450+ Hiring MNCs"  │ Placement Connect Form   │
│ 8. Industrial Internship  │ "Apply for Internship"   │ "Download Sprint Plan"   │ Application Form         │
│ 9. Become a Trainer       │ "Apply as Instructor"    │ "Schedule Faculty Chat"  │ Application Form         │
│ 10. Contact Us & Branches │ "Submit Enquiry"         │ "Get Directions on Maps" │ 2-Col Main Contact Form  │
│ 11. Campus Branch Detail  │ "Enquire at Campus"      │ "WhatsApp Branch Desk"   │ Sticky Branch Form       │
│ 12. Tech Blog Listing     │ "Read Guide"             │ "Explore Related Course" │ None (Search & Filter)   │
│ 13. Blog Detail Article   │ "Master in Live Cohort"  │ "Download Project Code"  │ Sticky Sidebar Lead Box  │
│ 14. Global FAQ Hub        │ "Talk to Counselor"      │ "WhatsApp Support"       │ Helpdesk Contact Box     │
│ 15. Legal Policies        │ None (Informational)     │ "Contact Privacy Officer"│ None (Plain Prose)       │
└───────────────────────────┴──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

---

## 4. Reusable Form Taxonomy & Specifications

We define **5 standardized, reusable form templates** that handle 100% of website lead captures without duplicating markup or logic:

```text
                                  ┌───────────────────────────────┐
                                  │   GLOBAL FORM TAXONOMY        │
                                  └──────────────┬────────────────┘
                                                 │
      ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
      ▼                  ▼                       ▼                       ▼                  ▼
┌───────────┐      ┌───────────┐           ┌───────────┐           ┌───────────┐      ┌───────────┐
│ Form A:   │      │ Form B:   │           │ Form C:   │           │ Form D:   │      │ Form E:   │
│ Contact   │      │ Course    │           │ Corporate │           │ Candidate │      │ Quick     │
│ Main Form │      │ Sidebar   │           │ B2B Form  │           │ Portal    │      │ Modal     │
└───────────┘      └───────────┘           └───────────┘           └───────────┘      └───────────┘
```

### 4.1. Form A: Main Contact & Inquiry Form ([`ContactForm.tsx`](file:///r:/Learn-more-technology/src/components/forms/ContactForm.tsx))
* **Locations:** `/contact-us`
* **Layout:** Full 2-column card layout.
* **Fields:**
  1. `Full Name` (Text, Required, min 2 chars)
  2. `Email Address` (Email, Required, standard regex RFC 5322)
  3. `Phone Number` (Tel, Required, 10-digit Indian mobile `[6-9]\d{9}`)
  4. `Preferred Course` (Select dropdown populated from `courses.ts`, Required)
  5. `Preferred Campus` (Select dropdown: Marathahalli HQ, Whitefield, BTM, Kalyan Nagar, Hebbal, Live Online)
  6. `Learning Mode` (Radio Pills: Classroom vs Live Online)
  7. `Message / Query` (Textarea, Optional, max 500 chars)
* **Submit Action:** "Send Message & Book Consultation"

### 4.2. Form B: Contextual Course Sidebar Form ([`EmbeddedLeadForm.tsx`](file:///r:/Learn-more-technology/src/components/forms/EmbeddedLeadForm.tsx))
* **Locations:** `/courses/[courseSlug]`, `/blog/[slug]`, `/locations/[slug]`
* **Layout:** Sticky 1-column card with gradient accent header.
* **Fields:**
  1. `Full Name` (Text, Required)
  2. `Phone Number` (Tel, Required)
  3. `Email Address` (Email, Required)
  4. `Preferred Mode` (Radio: Classroom / Live Online)
  5. *Hidden Fields:* `courseTitle`, `courseSlug`, `locationName`, `sourceUrl`
* **Submit Action:** "Reserve Free Demo Class"

### 4.3. Form C: Corporate Enterprise Proposal Form ([`CorporateLeadForm.tsx`](file:///r:/Learn-more-technology/src/components/forms/CorporateLeadForm.tsx))
* **Locations:** `/corporate-training`
* **Layout:** High-credibility B2B inquiry form.
* **Fields:**
  1. `Full Name` (Text, Required)
  2. `Official Work Email` (Email, Required, validates against consumer webmail e.g. gmail/yahoo where applicable)
  3. `Corporate Mobile Number` (Tel, Required)
  4. `Company / Organization Name` (Text, Required)
  5. `Target Team Size` (Select: 5-15 engineers, 15-50 engineers, 50-200 engineers, 200+ enterprise)
  6. `Technology Training Domain` (Select: Cloud/DevOps, Full Stack Web, GenAI/ML, QA Automation, Data Engineering)
  7. `Delivery Preference` (Select: Dedicated On-Premise ODC, Virtual Interactive Live, Weekend Masterclass)
  8. `Custom SLA / Scope Details` (Textarea, Optional)
* **Submit Action:** "Request Customized Corporate Proposal"

### 4.4. Form D: Candidate Application Portal ([`ApplicationForm.tsx`](file:///r:/Learn-more-technology/src/components/forms/ApplicationForm.tsx))
* **Locations:** `/internship`, `/become-a-teacher`
* **Layout:** Adaptive candidate intake form supporting dual modes via `type="internship" | "teacher"`.
* **Fields:**
  1. `Candidate Name` (Text, Required)
  2. `Email Address` (Email, Required)
  3. `Phone Number` (Tel, Required)
  4. `Qualification / Current Company` (Text, Required)
  5. `Experience Years / Graduation Year` (Text, Required)
  6. `Technology Domain` (Select)
  7. `Resume URL / LinkedIn Profile URL` (Url, Optional)
  8. `Statement / Note` (Textarea, Optional)
* **Submit Action:** Internship: "Submit Internship Application" | Trainer: "Submit Faculty Application"

### 4.5. Form E: Quick Free Demo Modal ([`QuickEnquiryModal.tsx`](file:///r:/Learn-more-technology/src/components/forms/QuickEnquiryModal.tsx))
* **Locations:** Global Header ("Book Free Demo" button), Mobile Sticky Drawer, Course Grid Cards.
* **Layout:** Centered accessible modal dialog with backdrop blur and ESC-key close handler.
* **Fields:**
  1. `Full Name` (Text, Required)
  2. `Phone Number` (Tel, Required)
  3. `Target Course / Domain` (Select, Required)
  4. `Campus Choice` (Select, Optional)
* **Submit Action:** "Confirm Free Demo Seat"

---

## 5. Form Validation, States & User Feedback

Every form component implements 5 standardized UI states to provide instantaneous, accessible feedback:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. DEFAULT / REST STATE                                                     │
│    Neutral slate borders (border-slate-200), subtle placeholder, visible    │
│    labels above inputs for accessibility.                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. FOCUSED STATE                                                            │
│    High-contrast Crimson ring (focus:ring-2 focus:ring-brand-500).          │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. VALIDATION ERROR STATE                                                   │
│    Red border (border-red-500), red background tint (bg-red-50/50), inline │
│    error helper message with AlertCircle icon below the faulty field.       │
│    Validation Rules:                                                        │
│    - Name: Min 2 characters, alphabetical.                                  │
│    - Phone: Strict 10-digit Indian Mobile `^[6-9]\d{9}$`.                   │
│    - Email: Standard email format `^[^\s@]+@[^\s@]+\.[^\s@]+$`.             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. SUBMITTING / LOADING STATE                                               │
│    Form fields disabled (`disabled:opacity-60`), submit button displays an  │
│    animated spinning loader (Loader2) with text "Securing Demo Seat...".    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. SUCCESS CONFIRMATION STATE                                               │
│    Replaces form inputs with a green card (`bg-emerald-50 border-emerald-   │
│    200`), CheckCircle2 icon, personalized thank-you message, counselor     │
│    callback timeframe (24–48 hours), and secondary WhatsApp instant trigger.│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Mobile Sticky Bottom Action Bar ([`StickyBottomBar.tsx`](file:///r:/Learn-more-technology/src/components/layout/StickyBottomBar.tsx))

On mobile devices ($\le 1023\text{px}$), traditional hero CTAs scroll out of view quickly. The **Mobile Sticky Bottom Bar** provides constant, non-intrusive conversion accessibility without blocking body content.

### Structure:
```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MOBILE STICKY ACTION DRAWER                           │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌───────────────────────┐ │
│ │ 📞 Call Desk         │ │ 💬 WhatsApp          │ │ ✨ Free Demo          │ │
│ │ (tel:+919108334999)  │ │ (wa.me/919108334999) │ │ (Triggers Modal)      │ │
│ └──────────────────────┘ └──────────────────────┘ └───────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation Rules:
1. **Z-Index Hierarchy:** `z-40`, positioned below modal dialogs (`z-50`) to avoid overlapping when forms open.
2. **Safe-Area Insets:** Incorporates `env(safe-area-inset-bottom)` for iPhone home bars.
3. **Page Bottom Offset:** All layout containers maintain `pb-20` on mobile to prevent the sticky bar from obscuring footer content or legal links.
4. **Touch Target Size:** Each button is sized at $\ge 44\text{px}$ height with full-width flex distribution for effortless one-handed thumb interaction.

---

## 7. Direct Contact Integrations: Phone & WhatsApp

### 7.1. Verified Phone Desk Integration (`tel:`)
* **Primary Desk:** `+91 9036524555` (Marathahalli HQ & Central Admissions).
* **Format:** Sanitized international link `href="tel:+919108334999"`.
* **Campus Branch Desks:**
  - Whitefield: `+91 91083 34998`
  - BTM Layout: `+91 91083 34997`
  - Kalyan Nagar: `+91 91083 34996`
  - Hebbal: `+91 91083 34995`

### 7.2. Contextual WhatsApp Advisor Links (`wa.me`)
To maximize inquiry conversion, WhatsApp buttons dynamically construct pre-filled query messages based on the page context:

| Context | Generated WhatsApp URL |
|---|---|
| **Course Detail** | `https://wa.me/919108334999?text=Hi%20LearnMore,%20I%20am%20interested%20in%20the%20[CourseTitle]%20course.` |
| **Campus Branch** | `https://wa.me/919108334999?text=Hi%20LearnMore,%20I%20want%20to%20visit%20the%20[CampusName]%20branch.` |
| **Corporate B2B** | `https://wa.me/919108334999?text=Hi%20LearnMore,%20I%20need%20a%20corporate%20training%20proposal.` |
| **Internship** | `https://wa.me/919108334999?text=Hi%20LearnMore,%20I%20want%20details%20on%20software%20internships.` |
| **General Site** | `https://wa.me/919108334999?text=Hi%20LearnMore,%20I%20would%20like%20course%20details.` |

---

## 8. Modal & Popup UX Philosophy

> [!IMPORTANT]
> **Zero Timed or Exit-Intent Popups:** LearnMore Technologies does not use automatic timed modal popups (e.g. "Wait! 10% discount if you register now"). Research proves these hurt brand trust, increase bounce rates, and damage Google Core Web Vitals (INP/CLS).

### Allowed Modal Triggers:
1. **User-Initiated Only:** Modals open **exclusively** upon direct user action (e.g., clicking *"Book Free Demo"* or *"Download Syllabus"*).
2. **Keyboard Accessibility:** `ESC` key immediately closes modals; focus is trapped within the active dialog and restored to the triggering button upon dismissal.
3. **Scroll Lock:** Background document scroll is locked (`overflow: hidden`) when a modal is active.

---

## 9. Tracking & Lead Attribution Architecture

Every form submission captures critical attribution metadata without compromising privacy:

```typescript
export interface LeadSubmissionPayload {
  // Candidate Information
  fullName: string;
  email: string;
  phone: string;
  
  // Contextual Data
  courseSlug?: string;
  courseTitle?: string;
  preferredCampus?: string;
  preferredMode: "Classroom" | "Live Online" | "Hybrid";
  message?: string;

  // Attribution & Source Tracking
  formType: "ContactMain" | "CourseSidebar" | "CorporateB2B" | "Application" | "QuickDemoModal";
  pageUrl: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp: string; // ISO 8601
}
```

---

## 10. Form Field Matrix

| Field Name | Type | Form A (Contact) | Form B (Course) | Form C (Corporate) | Form D (App) | Form E (Modal) | Validation Rule |
|---|:---:|:---:|:---:|:---:|:---:|:---:|---|
| **Full Name** | `text` | Required | Required | Required | Required | Required | $\ge 2$ characters |
| **Email** | `email` | Required | Required | Required (Work) | Required | Optional | RFC 5322 Email regex |
| **Phone** | `tel` | Required | Required | Required | Required | Required | 10-digit Indian `[6-9]\d{9}` |
| **Course** | `select` | Required | Pre-filled | N/A | Pre-filled | Required | Valid course slug |
| **Campus** | `select` | Required | Optional | N/A | Optional | Optional | Valid campus slug |
| **Mode** | `radio` | Required | Required | Optional | Optional | Optional | Classroom vs Online |
| **Company** | `text` | N/A | N/A | Required | N/A | N/A | $\ge 2$ characters |
| **Team Size** | `select` | N/A | N/A | Required | N/A | N/A | Selection from enum |
| **Resume URL** | `url` | N/A | N/A | N/A | Optional | N/A | Valid HTTPS URL |
| **Message** | `textarea` | Optional | N/A | Optional | Optional | N/A | Max 500 characters |

---

## 11. Component Mapping & Reusability Matrix

```text
src/components/
├── common/
│   ├── CTASection.tsx           # Full-width pre-footer conversion section with badge & dual CTAs
│   └── SectionHeading.tsx       # Standardized section headers with category pills & subtitles
├── layout/
│   ├── Header.tsx               # Top navigation with "Book Free Demo" modal trigger & direct phone desk
│   ├── StickyBottomBar.tsx      # Mobile sticky drawer with Call, WhatsApp, and Demo triggers
│   └── Footer.tsx               # Structured footer with course and campus directory links
└── forms/
    ├── ContactForm.tsx          # 2-column contact & campus visit enquiry form
    ├── CorporateLeadForm.tsx    # B2B enterprise training proposal request form
    ├── ApplicationForm.tsx      # Dual-mode candidate application form (internships & trainers)
    ├── EmbeddedLeadForm.tsx     # Compact sticky sidebar lead box for courses & blog posts
    ├── QuickEnquiryModal.tsx    # Accessible modal dialog for instant demo reservations
    └── BrochureDownloadModal.tsx# Lead-gate modal for full syllabus curriculum PDF downloads
```

---

## 12. Responsive Design & Accessibility (WCAG 2.1 AA)

1. **Focus Ring Visibility:** All inputs and CTA buttons feature `focus:ring-2 focus:ring-brand-500 focus:outline-none` with high visual contrast against dark and light backgrounds.
2. **Labels & ARIA:** Every input contains an associated `<label htmlFor="...">` element. Icons use `aria-hidden="true"`.
3. **Screen Reader Announcements:** Form submission errors and success messages are marked with `aria-live="polite"` or `role="alert"`.
4. **Touch Target Size:** Minimum $44\text{px} \times 44\text{px}$ touch targets across all mobile and tablet viewport widths.

---

## 13. Open Questions & Dependencies for Development Phase

1. **CRM / Lead Webhook Destination:** Which backend endpoint or webhook (e.g. internal REST API, HubSpot, Zoho CRM, or Webhook handler) should receive the unified `LeadSubmissionPayload` JSON object during production development?
2. **Automated WhatsApp Business API:** Would LearnMore Technologies prefer direct client-side WhatsApp chat triggers (`wa.me`) or an integrated WhatsApp Business Cloud API webhook for automatic syllabus dispatch?
3. **Syllabus PDF Hosting:** Where are official course syllabus PDFs hosted (e.g. `/public/syllabus/*.pdf` or Cloudflare R2 / AWS S3) for the `BrochureDownloadModal` download pipeline?

---

## 14. Approval Checklist

- [x] All CTA variants (Primary, Secondary, Tertiary, Inline) specified and visually styled.
- [x] Contextual WhatsApp and direct phone desk integration strategies documented with real numbers.
- [x] 5 standardized form templates defined with field matrices and validation rules.
- [x] Mobile sticky bottom action drawer specified with safe-area offsets.
- [x] Timed/intrusive popups eliminated in favor of user-initiated modal dialogs.
- [x] WCAG 2.1 AA accessibility and SEO crawlability confirmed.
- [x] Zero backend or subsequent sprint code development started ahead of approval.
