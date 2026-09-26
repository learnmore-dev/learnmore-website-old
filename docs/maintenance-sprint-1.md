# Maintenance Sprint 1: Post-Launch Stabilization & Tracking

**Sprint Goal:** Complete post-cutover search console onboarding, configure production Google Analytics 4, establish CloudWatch operational alarms, and apply minor security dependency patches.

**Sprint Duration:** 2 Weeks (Post-DNS Cutover)  
**Target Platform:** Production (`https://learnmoretechnologies.in`) & Development Staging

---

## 🎯 Sprint Backlog Items

### P0 Issues (Blockers)
* *No P0 issues identified.* (Core application, SSG rendering, 35 redirects, and contact routing verified 100% operational).

### P1 Issues (High Business / SEO Value)
1. **[TO BE CREATED] Authenticate Google Search Console & Submit Sitemap:**
   - Verify domain property in GSC via DNS TXT record or HTML tag.
   - Submit `https://learnmoretechnologies.in/sitemap.xml`.
   - Monitor indexation coverage and crawl rate.
2. **[TO BE CREATED] Inject Live Production GA4 Measurement ID:**
   - Add client `NEXT_PUBLIC_GA_ID` to AWS Amplify Console environment variables.
   - Verify real-time pageviews and custom WhatsApp/Call CTA conversion events.
3. **[TO BE CREATED] Configure CloudWatch 5xx / 4xx Alarms:**
   - Create CloudWatch Metric Alarms for `5xx Errors >= 5 within 5m` and `4xx Errors >= 50 within 5m`.
   - Subscribe team email addresses to Amazon SNS topic.

### P2 Issues (Maintenance & Security)
4. **[TO BE CREATED] Dependency Patch in Development Branch:**
   - Update `next` to latest stable patch and update `postcss`.
   - Test build locally (`npm run build` & `npx tsc --noEmit`).
   - Deploy to staging preview branch for regression testing.
5. **[TO BE CREATED] Batch Timing & Course Content Refresh:**
   - Update upcoming batch commencement dates in [`src/data/courses.ts`](file:///r:/Learn-more-technology/src/data/courses.ts).

---

## 🔗 Sprint Dependencies
* Domain owner access for Google Search Console DNS TXT verification.
* Client Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`).
* AWS IAM permissions to configure CloudWatch Alarms & SNS topics.

---

## 🧪 QA & Production Deployment Requirements
* Local typecheck (`npx tsc --noEmit`) and build verification (`npm run build`).
* Staging preview verification in AWS Amplify PR branch.
* Smoke test on production post-deployment without downtime.

---

## ✅ Definition of Done (DoD)
For every completed ticket:
- [ ] Requirement understood and documented.
- [ ] Development completed in dedicated feature branch.
- [ ] No unrelated changes introduced.
- [ ] Local testing completed (`npm run build` passes with 0 errors).
- [ ] Relevant routes, mobile responsiveness, and SEO tags verified.
- [ ] Staging deployment completed & verified.
- [ ] Production deployment executed via CI/CD.
- [ ] Production smoke test completed.
- [ ] Documentation updated in `docs/`.
