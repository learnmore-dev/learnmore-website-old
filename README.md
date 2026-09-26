LearnMore Technologies — Next.js App Router Architecture
Production-grade website migration & redesign for LearnMore Technologies (https://learnmoretechnologies.in/). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, and SEO structured data.

🚀 Key Highlights & Architecture
Next.js App Router & SSG: Fully pre-rendered via generateStaticParams for maximum performance, ultra-fast TTFB, and optimal Googlebot crawling.
Dynamic Course & Geo-SEO Engine:
Dynamic Canonical Course Pages: /courses/[courseSlug]
Dynamic Category Hubs: /courses/category/[categorySlug]
Dynamic Campus Hubs: /locations/[citySlug]
Programmatic Geo-SEO Landing Pages: /locations/[citySlug]/[courseSlug] (captures queries like Python Training in Marathahalli, AWS Course in Whitefield)
Complete SEO Preservation & Migration Layer:
301 redirects configured in next.config.mjs for all legacy WordPress URLs, duplicate paths, and legacy LMS endpoints.
Programmatic XML Sitemap (/sitemap.xml) with priority tagging.
Comprehensive Schema.org JSON-LD structured data (EducationalOrganization, Course, CourseInstance, LocalBusiness, FAQPage, BlogPosting, BreadcrumbList).
High-Converting Lead Capture Funnels:
Sticky Mobile Bottom Action Bar (Call, WhatsApp, Free Demo).
Context-Aware Quick Enquiry Modals with pre-filled course metadata.
Gated Module-by-Module PDF Syllabus Downloads.
Direct WhatsApp Counselor Integration.
📁 Directory Structure
r:/Learn-more-technology/
├── app/
│   ├── layout.tsx                               # Root layout with Schema.org & Sticky Navigation
│   ├── page.tsx                                 # High-converting Homepage
│   ├── not-found.tsx                            # Smart 404 Recovery page
│   ├── sitemap.ts                               # Dynamic XML Sitemap generator
│   ├── robots.ts                                # Search Engine crawler rules
│   ├── courses/
│   │   ├── page.tsx                             # All Courses Catalog with category filters
│   │   ├── category/[categorySlug]/page.tsx     # Dynamic Course Category Hub
│   │   └── [courseSlug]/page.tsx                # Canonical Course Detail with full syllabus
│   ├── locations/
│   │   ├── page.tsx                             # Locations Hub
│   │   └── [citySlug]/
│   │       ├── page.tsx                         # Campus / Branch page (Marathahalli, Whitefield, etc.)
│   │       └── [courseSlug]/page.tsx            # Programmatic Geo-Targeted Course Landing Page
│   ├── blog/
│   │   ├── page.tsx                             # Tech Blog Hub
│   │   ├── category/[categorySlug]/page.tsx     # Blog Category Archive
│   │   └── [postSlug]/page.tsx                  # Single Blog Article with TOC & Course Lead Magnet
│   ├── corporate-training/page.tsx              # Enterprise Training Solutions
│   ├── placement/page.tsx                       # 100% Placement Cell & Hiring Partners
│   ├── internship/page.tsx                      # Industrial IT Internship Program
│   ├── become-a-teacher/page.tsx                # Instructor Recruitment Portal
│   ├── about-us/page.tsx                        # Company Story, Mission & Vision
│   ├── testimonials/page.tsx                    # Verified Student Placement Reviews
│   ├── trainers/page.tsx                        # Faculty & Mentors Directory
│   ├── faq/page.tsx                             # Centralized Knowledge Base & FAQs
│   ├── contact-us/page.tsx                      # Multi-Campus Contact & Directions
│   ├── privacy-policy/page.tsx                  # Legal: Privacy Policy
│   └── terms-and-conditions/page.tsx            # Legal: Terms of Service
├── src/
│   ├── types/index.ts                           # Strongly-typed TypeScript interfaces
│   ├── data/                                    # Scalable Centralized Datasets
│   │   ├── courses.ts                           # Comprehensive course syllabi & batches
│   │   ├── categories.ts                        # 9 Course categories
│   │   ├── locations.ts                         # 5 Bangalore physical campuses + online hubs
│   │   ├── blogs.ts                             # Technical interview questions & guides
│   │   ├── trainers.ts                          # Senior instructor credentials & background
│   │   ├── testimonials.ts                      # Verified student placement reviews
│   │   └── navigation.ts                        # Menu & footer link datasets
│   ├── components/
│   │   ├── layout/                              # Header, MegaMenu, MobileDrawer, Footer, StickyBottomBar
│   │   ├── course/                              # CourseCard, CourseGrid, CurriculumAccordion, ProjectShowcase, BatchScheduleTable
│   │   ├── forms/                               # QuickEnquiryModal, EmbeddedLeadForm, BrochureDownloadModal
│   │   └── common/                              # Breadcrumbs, FAQAccordion, TrainerCard, LocationCard, TestimonialCard, JsonLd
│   └── lib/utils.ts                             # Tailwind & formatting helper utilities
├── next.config.mjs                              # 301 Migration Redirect Rules & Next.js config
└── tailwind.config.ts                           # Custom Color Palette & Breakpoints
🛠️ Development & Build Commands
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production (Generates static HTML & optimizes assets)
npm run build

# Start production server
npm run start
