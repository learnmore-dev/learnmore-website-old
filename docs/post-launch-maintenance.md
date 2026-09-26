# Post-Launch Maintenance & Routine Monitoring Checklist

**Project:** Learn More Technologies (`https://learnmoretechnologies.in/`)  
**Target Environment:** AWS Amplify Gen 2 / CloudFront Global Edge CDN + Route 53  

---

## 📅 Routine Maintenance Schedule

### ☀️ DAILY CHECKLIST
* **Website Availability (Uptime):** Verify homepage and top course routes return HTTP `200 OK` under 1 second.
* **5xx Server Errors:** Inspect AWS CloudWatch / Amplify access logs for any runtime errors or uncaught exceptions.
* **Lead Generation & CTAs:** Perform test admission inquiry form submission; verify WhatsApp redirect with pre-filled message opens correctly for Marathahalli, BTM Layout, and Kalyan Nagar.
* **Critical Page Health:** Verify no accidental white screens or hydration mismatches on core landing pages.

---

### 📆 WEEKLY CHECKLIST
* **404 Errors & Missing Routes:** Review CloudWatch 404 access log distributions to catch unmapped legacy URLs or bad external backlinks.
* **Broken Internal Links:** Run internal crawler to verify zero broken `href` links across courses, blog articles, and campus pages.
* **Course & Blog Updates:** Check if new batches, fee revisions, or new technical interview articles need to be published in `src/data/`.
* **Lead Conversion Rate:** Check Google Analytics 4 event stream for click-to-call, WhatsApp clicks, and form submissions.
* **AWS Resource Utilization:** Monitor Amplify build minutes and CloudFront bandwidth usage.

---

### 🗓️ MONTHLY CHECKLIST
* **Search Engine Console (GSC) Health:**
  * Review Index Coverage and Crawl Stats in Google Search Console.
  * Inspect URL indexing velocity and resolve any Mobile Usability warnings.
* **Sitemap & Robots Validation:** Re-validate `https://learnmoretechnologies.in/sitemap.xml` and `robots.txt`.
* **Performance & Core Web Vitals:** Run Google PageSpeed Insights on Desktop & Mobile (aim for LCP < 2.5s, FID/INP < 200ms, CLS < 0.1).
* **Dependency & Security Review:** Run `npm audit` in development environment; schedule non-breaking dependency patches.
* **Security & SSL Certificate:** Verify AWS ACM certificate auto-renewal status (90-day renewal cycle).
* **Backup Verification:** Ensure Git source control, `.env` configurations, and WordPress fallback archives are securely mirrored.
