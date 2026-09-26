# Post-Launch Operational & Maintenance Guide

**Project:** Learn More Technologies  
**Production URL:** [https://learnmoretechnologies.in/](https://learnmoretechnologies.in/)  
**Framework:** Next.js 14.2.35 (App Router) + TypeScript + Tailwind CSS  
**Cloud Infrastructure:** AWS Amplify Gen 2 / Amazon CloudFront + Route 53 + ACM (Mumbai `ap-south-1`)  

---

## 1. Production URL & SSL
- **Canonical Apex:** `https://learnmoretechnologies.in`
- **WWW Subdomain:** `https://www.learnmoretechnologies.in` (301 redirect to apex)
- **SSL Certificate:** AWS Certificate Manager (ACM) 2048-bit RSA with auto-renewal.

---

## 2. Technology Stack
- **Framework:** Next.js 14 (App Router, 100% SSG pre-rendered)
- **Language:** TypeScript 5.5 (Strict typing)
- **Styling:** Tailwind CSS 3.4
- **Typography:** Self-hosted Google Fonts (`Plus_Jakarta_Sans` & `Caveat`) via `next/font/google`
- **Icons:** `lucide-react`

---

## 3. AWS Architecture
- **Hosting:** AWS Amplify Hosting Gen 2
- **Edge Acceleration:** Amazon CloudFront Global Edge Network
- **DNS Management:** Amazon Route 53
- **SSL Termination:** AWS Certificate Manager (ACM)
- **Logging:** CloudWatch Logs & Amplify Access Logs

---

## 4. Monitoring & Alarms
- **CloudWatch Metric Alarms:**
  - `5xx Errors >= 5 within 5 minutes` (Alert Priority: P1)
  - `4xx Errors >= 50 within 5 minutes` (Alert Priority: P2)
- **Log Locations:** AWS Amplify Console > Deployments & Access Logs; CloudWatch Log Groups.

---

## 5. SEO Monitoring Routine
- **Daily/Weekly:** Inspect Google Search Console for crawl anomalies and soft 404s.
- **Sitemap & Robots:** Maintain canonical sitemap (`/sitemap.xml`) and anti-AI scraper policy (`/robots.txt`).
- **Canonicals:** Enforce `https://learnmoretechnologies.in/...` on all new routes.

---

## 6. Analytics & Conversion Tracking
- **GA4 ID:** Configured via `NEXT_PUBLIC_GA_ID` environment variable in Amplify.
- **Tracked Events:** Form submissions, Phone call clicks (`tel:`), and WhatsApp branch chats.

---

## 7. Forms & Lead Generation Flow
- **Validation:** 10-digit mobile (`/^[6-9]d{9}$/`), name, email.
- **Branch Dispatch:**
  - Marathahalli: `+91 90365 24555`
  - BTM Layout: `+91 90365 42555`
  - Kalyan Nagar: `+91 90363 54551`

---

## 8. Backups & Rollback Safety
- **Git Repository:** Primary code repository mirrored with branch protection.
- **WordPress Standby:** Old WordPress host maintained for 7 days post-deployment.
- **5-Minute Rollback:** Update Route 53 Apex/WWW `A` records back to legacy WordPress host IP.

---

## 9. Security Best Practices
- **Zero Secret Commits:** Use `.env.example` for variables; store actual keys only in AWS Amplify Console.
- **AI Bot Protection:** `robots.txt` disallows 9 automated AI training crawlers.
- **Input Sanitization:** Client-side and regex verification on all input fields.

---

## 10. Dependency Maintenance
- **Policy:** Never perform major breaking upgrades directly in production.
- **Routine:** Run `npm audit` quarterly in development branch, test thoroughly, and deploy via standard CI/CD pipeline.

---

## 11. Content Maintenance Workflow
All website data lives in `src/data/`:
- Courses & Curriculums: `src/data/courses.ts`
- Categories: `src/data/categories.ts`
- Campus Info: `src/data/locations.ts`
- Blog Articles: `src/data/blogs.ts`
- Trainers & Testimonials: `src/data/trainers.ts`, `src/data/testimonials.ts`

---

## 12. Incident Handling & Escalation Matrix
- **Severity 1 (P1 - Site Down / 5xx Spike):** Immediate Route 53 rollback or Amplify rebuild within 15 minutes.
- **Severity 2 (P2 - Form/CTA issue):** Hotfix in development, local verification, and push to production branch within 2 hours.
- **Severity 3 (P3 - Minor content typo):** Standard content update ticket resolved within 24 hours.

---

## 13. Production Change & Deployment Workflow
```text
Issue detected / Request received
      ↓
Reproduce & Verify locally
      ↓
Determine severity & Create Jira ticket
      ↓
Implement fix on feature branch
      ↓
Run tests: npm run build & npx tsc --noEmit
      ↓
Deploy to staging / Preview branch
      ↓
QA Verification
      ↓
Merge & deploy to production
      ↓
Smoke test on live production
      ↓
Close Jira ticket
```

---

## 14. Rollback Plan
Documented in [`docs/deployment-runbook.md`](./deployment-runbook.md). Instant DNS A-record repointing in Route 53.

---

## 15. Jira Ticket Workflow
All post-launch requests, bugs, and enhancements must follow the template in [`docs/post-launch-jira-backlog.md`](./post-launch-jira-backlog.md).

---

## 16. Future Enhancements Roadmap
Documented in [`docs/future-enhancements.md`](./future-enhancements.md).
