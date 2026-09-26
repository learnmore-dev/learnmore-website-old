# Content Management & Editing Guide

**Learn More Technologies** utilizes a lightweight, high-performance TypeScript Data Architecture located in `src/data/`. Non-technical team members or developers can easily update courses, campus information, blog articles, and phone numbers without modifying UI layouts.

---

## 1. Updating Course Content
- **File:** [`src/data/courses.ts`](file:///r:/Learn-more-technology/src/data/courses.ts)
- **What you can update:**
  - Course Title, Slug, Duration, and Badge (e.g. `Bestseller`, `Trending`).
  - Key Highlights, Skills Gained, and Tool tags.
  - Curriculum Modules, Duration Hours, and Hands-on Lab descriptions.
  - Upcoming Batch Timings, Fee details, and Course-specific FAQs.
- **Example:**
  ```typescript
  {
    id: "course-aws-solutions",
    slug: "aws-certified-solutions-architect",
    title: "AWS Certified Solutions Architect & Cloud Practitioner Training",
    categorySlug: "cloud-computing",
    rating: { score: 4.9, reviewCount: 3420 },
    duration: { hours: 60, weeks: 8, modes: ["Classroom", "Live Online"] },
    overview: "Master AWS cloud infrastructure...",
    ...
  }
  ```

---

## 2. Managing Branch Locations & Contact Numbers
- **File:** [`src/data/locations.ts`](file:///r:/Learn-more-technology/src/data/locations.ts)
- **What you can update:**
  - Branch phone numbers, WhatsApp numbers, and email addresses.
  - Physical campus address, landmark, and Google Maps embed URLs.
  - Campus facilities, lab photos, and nearby landmarks.

---

## 3. Adding or Editing Blog Articles
- **File:** [`src/data/blogs.ts`](file:///r:/Learn-more-technology/src/data/blogs.ts)
- **What you can update:**
  - Title, Slug, Meta Description, Author, and Publish Date.
  - Reading time, Category tags, and Full Markdown/HTML Article Body.

---

## 4. Updating Navigation & Menus
- **File:** [`src/data/navigation.ts`](file:///r:/Learn-more-technology/src/data/navigation.ts)
- **What you can update:**
  - Header main menu links and dropdown categories.
  - Featured courses inside the mega-menu.
  - Footer column links and Quick Links.

---

## 5. Adding Trainers & Student Testimonials
- **Trainers:** [`src/data/trainers.ts`](file:///r:/Learn-more-technology/src/data/trainers.ts)
- **Testimonials:** [`src/data/testimonials.ts`](file:///r:/Learn-more-technology/src/data/testimonials.ts)
