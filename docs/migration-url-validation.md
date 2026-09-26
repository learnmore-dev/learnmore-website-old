# URL Inventory & Migration Validation Report

This document cross-references all legacy WordPress URLs extracted from `scraped_urls.json`, `all_unique_paths.txt`, and the WordPress sitemap index against the new Next.js route tree and redirect mappings.

---

## 📊 Summary of 516-Page Inventory Audit

- **Original Published URLs / Sitemapped Entries:** ~516 (479 raw sitemap entries, 370 distinct legacy URLs)
- **Directly Matched & Active Next.js Routes:** 18
- **Configured 301 Permanent Redirects:** 17
- **Programmatic Geo / Keyword Variants (Under Review):** 289
- **Missing / Unmapped Legacy Content URLs:** 43
- **Obsolete WordPress Theme/Template Artifacts:** 0

---

## 📋 Comprehensive URL Inventory Table

| Old URL | New URL | Status | Action |
|---------|---------|--------|--------|
| `/blog` | `/blog` | **MATCHED** | Rendered by static Next.js page component |
| `/software-testing-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/selenium-with-python-interview-questions` | `/blog/selenium-with-python-interview-questions` | **MATCHED** | Handled via dynamic /blog/[slug] route |
| `/python-functions-explained-with-examples` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/php-vs-python-better-career-in-2025` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/advantages-of-python-programming-language` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/high-paying-opportunities-aws-resume` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/computer-course-best-for-high-salary` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/accenture-salary-package-for-freshers` | `/blog/accenture-salary-package-for-freshers` | **MATCHED** | Handled via dynamic /blog/[slug] route |
| `/wipro-salary-for-freshers-in-2025` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/wibro-job-opening-2025` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/aws-course-in-2025-is-a-smart-career-move` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/socket-programming-in-python-tips` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-pros-and-cons` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/java-full-stack-developer-best-career` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/how-to-upload-files-in-selenium` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/control-statements-in-java` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-it-companies-in-bangalore-freshers` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/learn-job-oriented-courses` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/tcs-hiring-2025-positions-salaries` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/python-in-robotics-education` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/fresher-resume-to-get-noticed` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/software-testing-questions-for-interviews` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/cracking-ai-with-java-tools-tips` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/programming-languages-dominate-in-2025` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/what-is-a-full-stack-developer` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/aws-cost-in-bangalore-complete-price` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/expert-power-bi-interview-questions` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/devops-interview-prep-real-25-questions` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/aws-interview-questions` | `/blog/aws-interview-questions` | **MATCHED** | Handled via dynamic /blog/[slug] route |
| `/data-analyst-interview-questions-answers` | `/blog/data-analyst-interview-questions-answers` | **MATCHED** | Handled via dynamic /blog/[slug] route |
| `/high-salary-java-full-stack-jobs` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/ai-in-cyber-threat-detection-how-it-works` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-data-analytics-tools-and-benefits` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/aws-cloud-practitioner-training` | `/courses/aws-certified-solutions-architect` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/ai-make-learning-python-easier` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/sap-leonardo-hype-and-real-world-business` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/careers-in-ai-skills-you-need-to-succeed` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-interview-questions-freshers-experts` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/highest-paying-tech-jobs-in-2025` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/ai-applications-and-their-role-in-society` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-coding-courses-for-school-graduates` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/what-is-aws-management-console` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/why-choose-java-as-the-best-career-option` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/data-science-interview-questions-answers` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/devops-engineer-skills-and-career-path` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/data-science-the-backbone-of-it-industry` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/software-testing-salary-in-india-2025` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-developer-interview-questions` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/python-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-data-analytics-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-java-full-stack-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-data-analytics-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-python-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/the-best-java-full-stack-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-noida` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-visakhapatnam` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-gurgaon` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-indore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/contact-us` | `/contact-us` | **MATCHED** | Rendered by static Next.js page component |
| `/microsoft-azure-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-trivandrum` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-chandigarh` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-patna` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-mumbai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-jaipur` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-ahmedabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-python-full-stack-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/best-java-full-stack-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/generative-ai-course-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/generative-ai-course-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/generative-ai-course-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/generative-ai-course-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/generative-ai-course-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/agentic-ai-course-in-whitefield` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/agentic-ai-course-in-btm` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/agentic-ai-course-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/agentic-ai-course-in-kalyan-nagar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/agentic-ai-course-in-bangalore` | `/courses/agentic-ai-course` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/python-full-stack-course` | `/courses/python-full-stack-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/java-full-stack-training-in-lucknow` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/corporate-trainings` | `/corporate-training` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/java-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-singapore-2` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/javascript-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/tableau-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/corporate-training` | `/corporate-training` | **MATCHED** | Rendered by static Next.js page component |
| `/sql-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-usa` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/full-stack-training-course` | `/courses/python-full-stack-course` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/about-us` | `/about-us` | **MATCHED** | Rendered by static Next.js page component |
| `/snowflake` | `/courses/snowflake-training` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/react-js-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/linux` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/html` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/certified-data-management-professional-cdmp` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/c-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-hebbal` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-lucknow` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-chennai` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-delhi` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-hyderabad` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-course-training-in-pune` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-trending-course` | `/courses/python-full-stack-course` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/python-course` | `/courses/python-full-stack-course` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/p` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/testimonial` | `/testimonials` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/ibm-certified-database-administrator-db2` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/oracle-dba` | `/courses/oracle-dba-training` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/datastax-apache-cassandra` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/cloudera-certified-associate-cca-data-analyst` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/java-course` | `/courses/java-full-stack-course` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/aws-course` | `/courses/aws-certified-solutions-architect` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/data-science-course` | `/courses/data-science-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/data-analytics-course` | `/courses/data-analytics-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/devops-training` | `/courses/devops-training` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/software-testing-course` | `/courses/software-testing-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/java-full-stack-course` | `/courses/java-full-stack-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/microsoft-azure-course` | `/courses/microsoft-azure-training` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/power-bi-course` | `/courses/power-bi-course` | **MATCHED** | Handled via dynamic /courses/[courseSlug] route |
| `/top-python-full-stack-training-in-bangalore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/thank-you` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/c` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/contact` | `/contact-us` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/instructor` | `/trainers` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/instructors` | `/trainers` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/lp-profile` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/windows-powershell` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/microsoft-azure` | `/courses/microsoft-azure-training` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/intelligence-masters-program` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/business-analyst-masters-course` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/big-data-master-program-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-trending-course` | `/courses/aws-certified-solutions-architect` | **REDIRECT REQUIRED** | 301 Permanent Redirect mapped in next.config.mjs |
| `/android-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/salesforce-training-in-marathahalli` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/advance-excel-training-content` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/new` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/become-a-teacher` | `/become-a-teacher` | **MATCHED** | Rendered by static Next.js page component |
| `/lp-checkout` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/courses` | `/courses` | **MATCHED** | Rendered by static Next.js page component |
| `/lp-term-conditions` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
| `/trainers` | `/trainers` | **MATCHED** | Rendered by static Next.js page component |
| `/sap-fico-syllabus` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/artificial-intelligence-syllabus` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-denmark` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-science-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/software-testing-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/devops-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-luxembourg` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/microsoft-azure-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-full-stack-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/power-bi-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/aws-training-in-macao-sar` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/java-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/python-full-stack-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/data-analytics-training-in-singapore` | `REVIEW` | **REVIEW** | Programmatic SEO / Geo keyword variant. Review for 301 consolidation to canonical course or city hub. |
| `/category/blog` | `MISSING` | **MISSING** | Original legacy content URL. Review for content migration or 301 redirect. |
