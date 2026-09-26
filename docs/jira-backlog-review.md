# Jira Backlog Review

## Completed Tasks

| Jira ID | Task Title | Status |
|---|---|---|
| `LMT-MAINT-001` | Post-Launch Production Operational Validation | COMPLETED / Closed |
| `LMT-MAINT-002` | Upcoming Course Batch Commencement Dates Refresh | COMPLETED / Closed |
| `LMT-MAINT-003` | Google Search Console Site Verification & Dynamic Sitemap Submission | COMPLETED / Closed |
| `LMT-MAINT-004` | Production GA4 Telemetry & Custom Conversion Event Tracking | COMPLETED / Closed |
| `LMT-MAINT-005` | CloudWatch 5xx/4xx Metric Alarms & SNS Alerting Runbook | COMPLETED / Closed |
| `LMT-MAINT-006` | Apply Non-breaking Next.js & PostCSS Patches in Dev | COMPLETED / Closed |
| `LMT-MAINT-007` | Prune Unused Legacy Scraped Assets from public/images | COMPLETED / Closed |
| `LMT-MAINT-008` | Author 10 Additional Tech Interview Q&A Articles | COMPLETED / Closed |
| `LMT-MAINT-010` | Build Client-Side Instant Course Search Modal | COMPLETED / Closed |

## Remaining Tasks

| Jira ID | Task Title | Current Status | Notes |
|---|---|---|---|
| `LMT-MAINT-009` | Implement DynamoDB Lead Storage API Route | Blocked | Awaiting AWS IAM write credentials & table provisioning (`LearnMoreLeads`). |
| `LMT-MAINT-011` | Integrate Razorpay Seat Booking Payment Gateway | Blocked | Awaiting live Razorpay merchant key ID & key secret. |
| `LMT-MAINT-012` | Safely Decommission Legacy WordPress Host (+7 Days) | Waiting for Dependency | Gated on mandatory 7-day post-cutover DNS stability window. |

## Blocked Tasks

| Jira ID | Task Title | Blocking Dependency |
|---|---|---|
| `LMT-MAINT-009` | Implement DynamoDB Lead Storage API Route | AWS IAM credentials with `dynamodb:PutItem` permissions and DynamoDB table creation ARN. |
| `LMT-MAINT-011` | Integrate Razorpay Seat Booking Payment Gateway | Live Razorpay merchant account credentials (`NEXT_PUBLIC_RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`). |

## Ready Tasks
None. All unblocked Sprint maintenance tasks have been completed, verified on production, and closed.

## Selected Next Task
- Jira ID: None
- Task title: N/A
- Requirements: N/A
- Acceptance criteria: N/A
- Dependencies: External AWS IAM credentials, Razorpay merchant account credentials, and 7-day DNS monitoring milestone.
- Required inputs: External API keys / AWS IAM roles or stakeholder approval of new backlog user stories.

## Project Completion Check
- All Jira tasks complete: NO
- Remaining implementation work: YES
- Blocking dependencies: YES

## Final Status

NO JIRA TASK READY — DEPENDENCY REVIEW REQUIRED
