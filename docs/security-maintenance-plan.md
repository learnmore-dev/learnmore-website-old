# Security Maintenance Plan

**Project:** Learn More Technologies  

---

## 🛡️ Security Protocol & Standards

1. **Environment Variables & Secrets:**
   - No production API keys, database credentials, or private tokens committed to Git.
   - All runtime keys managed securely via AWS Amplify Hosting Console.
2. **AI Crawler & Scraper Protection:**
   - Dynamic `robots.txt` blocks 9 automated LLM scraper bots (`GPTBot`, `CCBot`, `Anthropic-ai`, etc.).
3. **Client Input Validation:**
   - Strict regex validation on phone numbers (`/^[6-9]d{9}$/`) and email addresses.
4. **AWS IAM Least Privilege:**
   - Deployment role scoped strictly to Amplify Hosting, CloudFront, Route 53, and CloudWatch.
5. **SSL / TLS Encryption:**
   - AWS ACM SSL certificate enforced with automatic 90-day renewal; HTTP automatically redirected to HTTPS with HSTS headers.
