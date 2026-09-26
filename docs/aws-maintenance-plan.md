# AWS Cloud Operations & Maintenance Plan

**Project:** Learn More Technologies  
**AWS Region:** Asia Pacific (Mumbai) `ap-south-1`  
**Core Services:** AWS Amplify Hosting Gen 2, Amazon CloudFront, Amazon Route 53, AWS Certificate Manager, Amazon CloudWatch, Amazon SNS  

---

## ☁️ Cloud Infrastructure Operations

### 1. Application & Build Health
* **Console:** AWS Amplify Console > App Deployments
* **Routine:** Verify CI/CD pipeline builds successfully on Git commit pushes; inspect build time (< 3 minutes).

### 2. Edge CDN & Caching (CloudFront)
* **Cache Behavior:** `/_next/static/*` and `/public/*` cached with 1-year immutable headers.
* **Cache Invalidation:** Automatically handled by AWS Amplify during each production build deployment.

### 3. Route 53 DNS & SSL
* **Apex & WWW Records:** Configured as Route 53 Aliases to CloudFront distribution.
* **Email Safeguard:** MX, SPF, and DKIM records must remain untouched.
* **SSL Renewal:** AWS Certificate Manager auto-renews domain validation certificates.

### 4. Monitoring & CloudWatch Alarms
* **Metric Alarm 1 (P1 Critical):** `5xx Error Rate >= 5% in 5 minutes` (`LMT-Prod-CloudFront-5xx-High-Error-Rate`).
* **Metric Alarm 2 (P2 Warning):** `4xx Error Spike >= 10% in 10 minutes` (`LMT-Prod-CloudFront-4xx-Error-Spike`).
* **Notification Target:** Amazon SNS Topic `arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts`.
* **Operational Runbook:** See [`docs/cloudwatch-monitoring-setup.md`](./cloudwatch-monitoring-setup.md) for AWS CLI scripts, CloudFormation templates, and alarm simulation procedures.

### 5. Cost & Resource Optimization
* Next.js Static Site Generation (SSG) utilizes minimal server compute; expected AWS hosting cost is exceptionally low (< $15/month under standard traffic).

