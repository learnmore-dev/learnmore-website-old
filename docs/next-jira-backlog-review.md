# Jira Backlog Review Report

## Completed Tasks
1. **NDP-118 Website Audit:** Complete audit of legacy WordPress website and assets. (**COMPLETED**)
2. **NDP-119 UI/UX & Website Structure:** Next.js modern component hierarchy, Tailwind CSS design system, and responsive layout foundations. (**COMPLETED**)
3. **NDP-120 Homepage:** Production homepage with hero section, statistics, course showcase, reviews, and interactive modals. (**COMPLETED**)
4. **NDP-121 Course Pages & Catalog:** Dynamic catalog and 12 detailed IT Master Course pages with curriculum accordions and Schema.org JSON-LD. (**COMPLETED**)
5. **NDP-122 Static & Business Pages:** 9 essential business pages (About Us, Placements, Corporate Training, Trainers, Testimonials, FAQ, Contact Us, Privacy, Terms). (**COMPLETED**)
6. **NDP-123 Blog & Content Engine:** SSG blog architecture with Markdown rendering and interview Q&A guides. (**COMPLETED**)
7. **NDP-124 SEO, Metadata & URL Migration:** Self-referencing canonicals, 308 permanent redirect map, `sitemap.xml`, and `robots.txt`. (**COMPLETED**)
8. **NDP-125 Production Launch:** Cutover to AWS Amplify Gen 2 hosting with custom domain `https://learnmoretechnologies.in`. (**COMPLETED**)
9. **LMT-MAINT-001 (Sprint 1 Task 1):** Post-launch smoke testing and operational validation. (**COMPLETED**)
10. **LMT-MAINT-002 (Sprint 1 Task 2):** Refresh upcoming course batch commencement dates, IST timing slots, delivery modes, and seat counters in `src/data/courses.ts`. (**COMPLETED**)
11. **LMT-MAINT-003 (Sprint 1 Task 3):** Authenticate Google Search Console (GSC) Domain Property & Submit Production Sitemap. (**COMPLETED**)
12. **LMT-MAINT-004 (Sprint 1 Task 4):** Inject Live Production GA4 Measurement ID in Amplify & Configure GA Event Tracking. (**COMPLETED**)

---

## Remaining Tasks

| Ticket ID | Type | Area | Task Title | Priority | Status | Dependency / Notes |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **LMT-MAINT-005** | AWS | Monitoring | Setup CloudWatch 5xx / 4xx Metric Alarms with SNS Email Alerts | **P1** | **READY** | AWS IAM / CloudWatch permissions; Next in priority order |
| **LMT-MAINT-006** | SECURITY | Dependencies | Apply Non-breaking Next.js & PostCSS Patches in Dev | **P2** | **READY** | Development environment branch |
| **LMT-MAINT-007** | MAINTENANCE | Tech Debt | Prune Unused Legacy Scraped Assets from public/images | **P2** | **READY** | Asset reference audit |
| **LMT-MAINT-008** | CONTENT | Blog / SEO | Author 10 Additional Tech Interview Q&A Articles | **P2** | **READY** | SEO keyword target cluster |
| **LMT-MAINT-009** | ENHANCEMENT | Backend | Implement DynamoDB Lead Storage API Route | **P2** | **READY** | AWS Serverless Stack |
| **LMT-MAINT-010** | ENHANCEMENT | UI / Search | Build Client-Side Instant Course Search Modal | **P3** | **READY** | UI component design |
| **LMT-MAINT-011** | ENHANCEMENT | Admissions | Integrate Razorpay Seat Booking Payment Gateway | **P3** | **READY** | Merchant account verification |

---

## Blocked Tasks

| Ticket ID | Type | Area | Task Title | Priority | Status | Blocker / Dependency |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **LMT-MAINT-012** | MAINTENANCE | DevOps | Safely Decommission Legacy WordPress Host (+7 Days) | **P3** | **BLOCKED / SCHEDULED** | Blocked pending 7-day post-cutover DNS and email stability validation window |

---

## Next Task

- **Jira ID:** `LMT-MAINT-005`
- **Title:** Setup CloudWatch 5xx / 4xx Metric Alarms with SNS Email Alerts
- **Objective:** Configure proactive monitoring and real-time incident alerting for `https://learnmoretechnologies.in` using AWS CloudWatch and Amazon SNS, ensuring the DevOps team receives immediate notifications upon 5xx server spikes or abnormal 4xx client errors.
- **Why it is next based on documented dependencies/order:**
  1. It is the only remaining **P1 (High Priority)** operational task in the post-launch maintenance backlog.
  2. With GSC verified (`LMT-MAINT-003`) and GA4 event tracking operational (`LMT-MAINT-004`), infrastructure monitoring and automated alerting is the critical final operational guardrail for the production environment.
  3. All prerequisite tasks are completed, and no unresolved blockers exist.
- **Scope:**
  - Define CloudWatch Metric Alarm for CloudFront/Amplify 5xx error rates ($\ge 5$ errors per 5-minute evaluation period).
  - Define CloudWatch Metric Alarm for CloudFront/Amplify 4xx error rate anomalies ($\ge 50$ errors per 5-minute evaluation period).
  - Document Amazon SNS Topic subscription procedures and automated email alert formatting.
  - Define operational runbook and alert response thresholds in `docs/cloudwatch-monitoring-setup.md` / AWS operations guides.
- **Acceptance Criteria:**
  1. **[ ]** CloudWatch Metric Alarm specification for 5xx server error rate ($\ge 5$ in 5 mins) is defined with evaluation periods and statistic definitions.
  2. **[ ]** CloudWatch Metric Alarm specification for 4xx client error anomaly rate ($\ge 50$ in 5 mins) is defined.
  3. **[ ]** Amazon SNS Alert Topic routing and DevOps subscription runbook is documented and verified.
  4. **[ ]** Verification procedures for testing alarm triggers and SNS notifications are fully documented.
  5. **[ ]** Zero code regressions or breaking changes to existing Next.js App Router setup.
  6. **[ ]** TypeScript compilation (`npx tsc --noEmit`) and production build (`npm run build`) continue to pass with 0 errors.
- **Dependencies:**
  - AWS IAM / CloudWatch console access.
  - Production environment active on AWS Amplify Gen 2 / CloudFront.
- **Expected Files / Components Affected:**
  - `docs/cloudwatch-monitoring-setup.md` (Operational Runbook & Setup Guide)
  - `docs/aws-maintenance-plan.md` (Updated with alarm ARNs and threshold criteria)
- **SEO Requirements:**
  - Zero disruption to existing canonical URLs, sitemap, or robots.txt during monitoring integration.
- **Testing Requirements:**
  - Local validation of build and lint.
  - Step-by-step verification guide for AWS CloudWatch alarm deployment and test email dispatch.

---

## Final Status

```text
NEXT TASK READY
```
