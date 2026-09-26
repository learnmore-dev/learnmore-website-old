# Performance & Core Web Vitals Maintenance Plan

**Project:** Learn More Technologies  
**Target Architecture:** Next.js 14 SSG + AWS CloudFront CDN  

---

## ⚡ Performance Baselines & Targets

| Metric | Target | Current Production Baseline | Status |
| :--- | :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | < 1.0s | ~0.6s | ✅ **EXCELLENT** |
| **Largest Contentful Paint (LCP)** | < 2.0s | ~1.1s | ✅ **EXCELLENT** |
| **Cumulative Layout Shift (CLS)** | < 0.05 | 0.00 | ✅ **PERFECT** |
| **Interaction to Next Paint (INP)**| < 150ms| ~40ms | ✅ **EXCELLENT** |
| **Shared First Load JS Bundle** | < 100 kB| 87.3 kB | ✅ **OPTIMIZED** |
| **Font Render Waterfall** | 0 external calls | Self-hosted via `next/font` | ✅ **OPTIMIZED** |

---

## 🛠️ Monthly Performance Routine:
1. Run Google PageSpeed Insights on Desktop & Mobile for Home, Top Course, and Blog pages.
2. Ensure newly uploaded banner images are properly compressed (WebP/AVIF format, <150 kB).
3. Verify CloudFront CDN cache hit ratio remains >90%.
