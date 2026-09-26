# Jira Backlog Review

## Previous Task
- **Jira ID:** `LMT-MAINT-007`
- **Title:** Prune Unused Legacy Scraped Assets from public/images
- **Closure status:** **COMPLETED / CLOSED**
- **Production status:** **DEPLOYED & VERIFIED (`v1.6.0-asset-pruning` / commit `c5e3a8d`)**

---

## Remaining Tasks

### LMT-MAINT-008 - Author 10 Additional Tech Interview Q&A Articles
- **Status:** **READY / SELECTED**
- **Requirement:** Author 10 new high-value technical interview preparation articles in Markdown under `src/content/blog/` targeting high-volume Bangalore IT training keywords (Java Full Stack, React, SQL, DevOps/Kubernetes, Azure Cloud, Power BI, Python Data Science, Software Testing, Data Engineering, Cyber Security).
- **Acceptance Criteria:**
  1. 10 comprehensive Markdown blog articles authored with complete frontmatter metadata.
  2. Dynamic SSG routes generated cleanly under `/blog/[slug]`.
  3. Canonical URLs, OpenGraph metadata, and BlogPosting Schema.org JSON-LD generated for each new post.
  4. Sitemap (`/sitemap.xml`) dynamically updated to include all 10 new articles with priority `0.7`.
  5. Related course links embedded within each article linking to master training landing pages.
  6. TypeScript compilation (`npx tsc --noEmit`) and production build (`npm run build`) pass with 0 errors (expanding total routes from 49 to 59).
  7. Zero regressions across existing blog articles, course pages, location hubs, and `/api/leads`.
- **Dependencies:** None.
- **Affected Areas:** `src/content/blog/`, `/blog` index, `/sitemap.xml`.
- **Blockers:** None.

---

### LMT-MAINT-009 - Implement DynamoDB Lead Storage API Route
- **Status:** **BACKLOG / BLOCKED (IAM)**
- **Requirement:** Enhance `/api/leads` to persist lead capture submissions into an Amazon DynamoDB table (`LearnMoreLeads`) alongside the existing response and WhatsApp routing.
- **Acceptance Criteria:**
  1. AWS SDK DynamoDB client integrated into `/api/leads/route.ts`.
  2. Lead schema defined (`leadId`, `timestamp`, `name`, `email`, `phone`, `course`, `location`, `source`).
  3. Fallback error handling ensuring lead submission succeeds even if DynamoDB write experiences intermittent latency.
- **Dependencies:** AWS IAM DynamoDB permissions and Table ARN.
- **Affected Areas:** `src/app/api/leads/route.ts`, AWS DynamoDB table.
- **Blockers:** AWS IAM permissions for DynamoDB.

---

### LMT-MAINT-010 - Build Client-Side Instant Course Search Modal
- **Status:** **BACKLOG**
- **Requirement:** Build an interactive client-side instant search modal accessible via keyboard shortcut (`Cmd+K` / `Ctrl+K`) and header search icon to allow prospective students to quickly filter all 12 courses by keyword, technology, or category.
- **Acceptance Criteria:**
  1. Instant search dialog component created under `src/components/search/`.
  2. Keyboard shortcut (`Ctrl+K` / `Cmd+K`) and click triggers operational.
  3. Real-time filtering across course titles, tags, and categories.
  4. Responsive across mobile drawer and desktop navbar.
- **Dependencies:** UI component library conventions.
- **Affected Areas:** Global Navbar, Header Search Modal component.
- **Blockers:** None.

---

### LMT-MAINT-011 - Integrate Razorpay Seat Booking Payment Gateway
- **Status:** **BACKLOG / BLOCKED (Keys)**
- **Requirement:** Integrate Razorpay Checkout SDK to enable students to pay nominal seat reservation fees online for upcoming training batches.
- **Acceptance Criteria:**
  1. Razorpay script loaded asynchronously.
  2. Order creation API route (`/api/checkout/create-order`).
  3. Webhook verification route (`/api/checkout/webhook`).
  4. Payment receipt confirmation UI modal.
- **Dependencies:** Razorpay merchant account keys.
- **Affected Areas:** Course detail booking buttons, `/api/checkout/` endpoints.
- **Blockers:** Razorpay live API key credentials.

---

### LMT-MAINT-012 - Safely Decommission Legacy WordPress Host (+7 Days)
- **Status:** **BLOCKED / SCHEDULED**
- **Requirement:** Terminate legacy WordPress hosting server and database instances following the 7-day post-cutover DNS stability window.
- **Acceptance Criteria:**
  1. 7 days elapsed post-cutover with 0 DNS lookup failures or MX email regressions.
  2. Final offline database and wp-content archive backed up to secure Amazon S3 bucket.
  3. Legacy server instances terminated.
- **Dependencies:** 7-day post-launch stability gate.
- **Affected Areas:** Legacy hosting infrastructure.
- **Blockers:** 7-day post-launch timeline window.

---

## Next Task Ready for Implementation

- **Jira ID:** `LMT-MAINT-008`
- **Title:** Author 10 Additional Tech Interview Q&A Articles
- **Current status:** **READY**
- **Requirement:** Author 10 high-value, comprehensive technical interview preparation articles in Markdown under `src/content/blog/` targeting high-volume Bangalore IT training and career search queries (Java Full Stack, React, SQL, DevOps/Kubernetes, Azure Cloud, Power BI, Python Data Science, Software Testing, Data Engineering, Cyber Security) to expand the organic indexation footprint and internal link equity.
- **Acceptance criteria:**
  1. 10 comprehensive Markdown blog articles authored with complete frontmatter metadata.
  2. Dynamic SSG routes generated cleanly under `/blog/[slug]`.
  3. Canonical URLs, OpenGraph metadata, and BlogPosting Schema.org JSON-LD generated for each new post.
  4. Sitemap (`/sitemap.xml`) dynamically updated to include all 10 new articles with priority `0.7`.
  5. Related course links embedded within each article linking to master training landing pages.
  6. TypeScript compilation (`npx tsc --noEmit`) and production build (`npm run build`) pass with 0 errors (expanding total routes from 49 to 59).
  7. Zero regressions across existing blog articles, course pages, location hubs, and `/api/leads`.
- **Dependencies:** None.
- **Blockers:** None.
- **Implementation notes:** Markdown files will be added to `src/content/blog/` with standard YAML frontmatter conforming to the existing Next.js App Router blog engine.

---

## Final Status

```text
BACKLOG REVIEW COMPLETE
```