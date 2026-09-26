# Technical Developer Handover

**Project:** Learn More Technologies  
**Repository:** `Learn-more-technology`  
**Framework:** Next.js 14.2.5 (App Router), React 18, TypeScript 5.5, Tailwind CSS 3.4  

---

## 🛠️ Technology Stack & Dependencies
* **Core:** Next.js 14 App Router (Static Site Generation by default)
* **Language:** TypeScript 5.5 (Strict mode enabled)
* **Styling:** Tailwind CSS 3.4 + `clsx` + `tailwind-merge`
* **Icons:** `lucide-react` (Clean, feather-based SVG icons)
* **Fonts:** `next/font/google` (`Plus_Jakarta_Sans` and `Caveat`)
* **Infrastructure:** AWS Amplify Gen 2 / AWS CloudFront + Route 53 + ACM

---

## 🏗️ Core Engineering Principles
1. **100% Static Pre-rendering:** Every page is pre-rendered at build time (SSG) for maximum CDN edge caching performance and instant First Contentful Paint (<0.8s).
2. **Decoupled Data Architecture:** All dynamic data lives in typed TypeScript files in `src/data/`. Component markup is purely presentational and re-usable.
3. **SEO by Construction:** Automatic XML sitemap generation (`src/app/sitemap.ts`), dynamic `robots.txt` with AI scraper restrictions (`src/app/robots.ts`), and Schema.org JSON-LD structured data on all pages.
4. **Permanent Redirect Handling:** 35 legacy WordPress routes are declared in `next.config.mjs` as permanent 308/301 redirects.

---

## 🚀 Common Developer Commands

```bash
# Start local dev server
npm run dev

# Run TypeScript compiler check
npx tsc --noEmit

# Run production build
npm run build

# Start production server
npm run start
```
