# Technical Debt Audit & Management Plan

**Project:** Learn More Technologies  
**Audit Date:** September 19, 2026  

---

## 🔍 Codebase Audit Findings

### 1. Static Asset Redundancy in `public/`
* **Finding:** Legacy scraped assets from WordPress migration (old banner variations, thumbnail iterations) exist in `public/`.
* **Impact:** Slightly increases repository clone size; does not affect production load time because only referenced assets are bundled.
* **Remediation:** Run automated asset reference scanner to prune unreferenced `.png` and `.jpg` files in `public/images/`.
* **Priority:** **P2**

### 2. Client-Side WhatsApp Lead Forwarding
* **Finding:** Admission inquiries directly launch WhatsApp Web / API links. While high-converting, if a student closes WhatsApp before sending, the lead is not saved to a backend database.
* **Impact:** Potential edge-case lead drop-off if user does not click 'Send' in WhatsApp.
* **Remediation:** Add a lightweight Next.js API route (`/api/leads`) that persists submissions to AWS DynamoDB / PostgreSQL before forwarding to WhatsApp.
* **Priority:** **P2**

### 3. Strict Static Generation (SSG) Hardcoded Data Layer
* **Finding:** Course syllabi, batch timings, and blog posts are maintained in typed TypeScript files in `src/data/`.
* **Impact:** High speed and zero hosting cost, but requires a developer to edit TypeScript files and trigger a git commit to update batch dates.
* **Remediation:** For future scale (100+ blogs), evaluate a headless CMS (Sanity.io / Strapi) or retain TypeScript files with simplified JSON templates.
* **Priority:** **P3**
