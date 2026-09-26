# Post-Launch Jira Backlog

This backlog outlines all post-launch operational, SEO, security, maintenance, and enhancement tasks for **Learn More Technologies** (`https://learnmoretechnologies.in/`).

---

## 📋 Comprehensive Backlog Table

| Proposed Ticket | Type | Area | Task | Priority | Dependency | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **LMT-MAINT-003** | SEO | Search Console | Authenticate GSC Domain Property & Submit Sitemap | **P1** | DNS Cutover | **COMPLETED / CLOSED** |
| **TO BE CREATED** | AWS | Analytics | Inject Live Production GA4 Measurement ID in Amplify | **P1** | Client GA4 Account | **READY TO CREATE** |
| **TO BE CREATED** | AWS | Monitoring | Setup CloudWatch 5xx / 4xx Alarms with SNS Email Alerts | **P1** | AWS IAM / CloudWatch | **READY TO CREATE** |
| **TO BE CREATED** | SECURITY | Dependencies | Apply Non-breaking Next.js & PostCSS Patches in Dev | **P2** | Development Branch | **READY TO CREATE** |
| **TO BE CREATED** | MAINTENANCE | Tech Debt | Prune Unused Legacy Scraped Assets from public/images | **P2** | Asset Audit | **READY TO CREATE** |
| **TO BE CREATED** | CONTENT | Blog / SEO | Author 10 Additional Tech Interview Q&A Articles | **P2** | SEO Keyword List | **READY TO CREATE** |
| **LMT-MAINT-002** | CONTENT | Courses | Refresh Upcoming Batch Dates & Schedules in src/data | **P2** | Academic Calendar | **COMPLETED / CLOSED** |
| **TO BE CREATED** | ENHANCEMENT | Backend | Implement DynamoDB Lead Storage API Route | **P2** | AWS Serverless Stack| **READY TO CREATE** |
| **TO BE CREATED** | ENHANCEMENT | UI / Search | Build Client-Side Instant Course Search Modal | **P3** | UI Component Library| **READY TO CREATE** |
| **TO BE CREATED** | ENHANCEMENT | Admissions | Integrate Razorpay Seat Booking Payment Gateway | **P3** | Merchant Account | **READY TO CREATE** |
| **TO BE CREATED** | MAINTENANCE | DevOps | Safely Decommission Legacy WordPress Host (+7 Days) | **P3** | 7-Day Stability Gate| **SCHEDULED (+7D)** |

---

## 🏷️ Priority Key:
* **P0 (Production Blocker):** 0 tasks. (No blocking production bugs found; 100% routes, redirects, and forms are operational).
* **P1 (Important Post-Cutover / SEO / Business):** 3 tasks (GSC verification, GA4 ID injection, CloudWatch alarms).
* **P2 (Normal Maintenance & Security Patches):** 5 tasks (Dependency updates, asset pruning, blog authoring, batch schedule refresh, DynamoDB lead API).
* **P3 (Future Enhancements & Decommissioning):** 3 tasks (Course search modal, online fee payment, WordPress retirement).
