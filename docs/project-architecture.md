# Project Architecture & Codebase Guide

**Project:** Learn More Technologies (`https://learnmoretechnologies.in/`)  
**Framework:** Next.js 14.2.5 (App Router) + TypeScript + Tailwind CSS 3.4.1  

---

## 📁 Repository Directory Structure

```text
r:/Learn-more-technology/
├── amplify.yml                 # AWS Amplify Gen 2 CI/CD build configuration
├── Dockerfile                  # Multi-stage production container build
├── .dockerignore               # Container build exclusions
├── .env.example                # Safe environment variable template
├── .gitignore                  # Source control ignore rules
├── next.config.mjs             # Next.js config & 35 legacy 301/308 redirects
├── package.json                # Project dependencies & scripts
├── tailwind.config.ts          # Tailwind CSS styling design system tokens
├── tsconfig.json               # TypeScript strict configuration
├── docs/                       # Project handover & QA documentation
├── public/                     # Static media assets (logos, icons, banners)
└── src/
    ├── app/                    # Next.js App Router route hierarchy
    │   ├── layout.tsx          # Root layout (Header, Footer, Floating Buttons, Fonts)
    │   ├── page.tsx            # Modern High-Converting Homepage
    │   ├── globals.css         # Tailwind directives & global utility styling
    │   ├── sitemap.ts          # Dynamic XML sitemap generator
    │   ├── robots.ts           # Dynamic robots.txt & AI bot crawler rules
    │   ├── not-found.tsx       # Custom branded 404 recovery page
    │   ├── about-us/           # About Us page
    │   ├── contact-us/         # Contact Us page with campus cards & inquiry forms
    │   ├── corporate-training/ # B2B Enterprise Training solutions page
    │   ├── placement/          # Placement records & hiring partner network
    │   ├── internship/         # Real-world internship programs page
    │   ├── become-a-teacher/   # Trainer recruitment page
    │   ├── faq/                # Categorized Frequently Asked Questions
    │   ├── testimonials/       # Video & student reviews page
    │   ├── trainers/           # Expert faculty profiles & credentials
    │   ├── privacy-policy/     # Legal privacy policy
    │   ├── terms-and-conditions/# Legal terms of service
    │   ├── courses/            # Course listing & detail routes
    │   │   ├── page.tsx        # All courses catalog with filters
    │   │   ├── [courseSlug]/   # Dynamic course master page (curriculum, FAQs)
    │   │   └── category/[categorySlug]/ # Category hub pages
    │   ├── locations/          # Campus hub & branch landing pages
    │   │   ├── page.tsx        # Overview of all Bangalore campuses
    │   │   └── [slug]/         # Dynamic branch pages (Marathahalli, BTM, Kalyan Nagar)
    │   └── blog/               # Technical blog & career interview Q&As
    │       ├── page.tsx        # Blog listing hub
    │       └── [slug]/         # Dynamic blog article renderer
    ├── components/             # Reusable UI component library
    │   ├── common/             # Buttons, Badges, Modals, JsonLd schema, Floating CTAs
    │   ├── forms/              # ApplicationForm, ContactForm, CorporateLeadForm
    │   ├── home/               # Homepage hero, marquee, stats, course tabs
    │   ├── layout/             # Header, Footer, Mobile Navigation, StickyBottomBar
    │   ├── courses/            # CourseCard, CurriculumAccordion, FeeTable
    │   └── locations/          # CampusMap, FacilityShowcase, BranchContactBox
    ├── data/                   # Structured TypeScript single-source-of-truth data
    │   ├── courses.ts          # 12 Master courses (modules, projects, FAQs, keywords)
    │   ├── categories.ts       # 6 Course categories & mapped course slugs
    │   ├── locations.ts        # 5 Campus profiles (addresses, phones, WhatsApp, maps)
    │   ├── blogs.ts            # 4 Technical blog articles & interview questions
    │   ├── trainers.ts         # Industry expert instructor bios & experience
    │   ├── testimonials.ts     # Verified student success stories & packages
    │   └── navigation.ts       # Header menu items, mega-menu, footer links
    ├── lib/                    # Helper utility functions
    │   └── utils.ts            # ClassName merging (`cn`) & string formatters
    └── types/                  # TypeScript interface definitions
        └── index.ts            # Course, Category, Location, Blog, Trainer interfaces
```

---

## 🔑 Key Component Roles & Data Flow

1. **Root Layout (`src/app/layout.tsx`):**
   - Injects self-hosted Google Fonts (`Plus_Jakarta_Sans` & `Caveat`) using `next/font/google`.
   - Renders persistent `Header`, `Footer`, `FloatingContactButtons`, `StickyBottomBar` (mobile), and Global `JsonLd` Schema.
2. **Data Layer (`src/data/`):**
   - All website content is strictly typed and decoupled from rendering logic. Adding a course or updating a phone number in `src/data/` automatically updates the UI, routes, and sitemap.
3. **SEO & Metadata Layer:**
   - Every `page.tsx` exports a dynamic or static `generateMetadata` function specifying `title`, `description`, `canonical`, `openGraph`, and `twitter` objects.
