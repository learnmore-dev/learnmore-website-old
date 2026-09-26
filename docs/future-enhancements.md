# Future Improvements & Technical Roadmap

This document outlines prioritized enhancements for **Learn More Technologies** to be scheduled in subsequent development sprints following production stabilization.

---

## 🔴 HIGH PRIORITY (Next Sprint / 30 Days)
1. **Google Search Console Property Onboarding:**
   - Verify domain property in GSC and submit canonical `sitemap.xml`.
   - Monitor real-time indexing status for 42 canonical URLs.
2. **Google Analytics 4 Measurement ID Configuration:**
   - Replace placeholder in AWS Amplify environment with production `NEXT_PUBLIC_GA_ID`.
   - Set up custom GA4 conversion events for WhatsApp CTAs, Click-to-Call, and Syllabus Downloads.
3. **Database-Backed Lead Logging API:**
   - Integrate serverless AWS DynamoDB / PostgreSQL API route to store all admission inquiries as a fallback record alongside WhatsApp forwarding.

---

## 🟡 MEDIUM PRIORITY (60–90 Days)
1. **Search & Filter Enhancement:**
   - Implement client-side instant fuzzy search across 50+ courses with technology/category tags.
2. **Interactive Student LMS / Mock Test Portal:**
   - Build a lightweight authenticated portal for enrolled students to access class recordings and mock interview test series.
3. **Automated WhatsApp Lead Webhook (CRM Integration):**
   - Wire form submissions to an enterprise CRM (Zoho / HubSpot) via AWS Lambda webhook.
4. **Headless CMS Integration:**
   - Evaluate Sanity.io or Strapi for non-developer blog authoring without needing direct git commits.

---

## 🟢 LOW PRIORITY (Backlog / Future Consideration)
1. **Online Course Fee Payment Gateway:**
   - Integrate Razorpay / Cashfree for instant token admission seat booking.
2. **PWA (Progressive Web App) Offline Support:**
   - Configure service worker for offline syllabus viewing and instant push notifications.
3. **Multi-Language Support (i18n):**
   - Add localized landing pages for regional student outreach.
