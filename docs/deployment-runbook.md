# Production Deployment & Operations Runbook

**Project:** Learn More Technologies  
**Target Environment:** AWS Amplify Hosting Gen 2 / CloudFront Global Edge CDN + Route 53  

---

## 1. Local Development Workflow

```bash
# 1. Clone repository and install dependencies (Node.js 18+ or 20+ LTS recommended)
npm install

# 2. Start local development server
npm run dev
# App will run on http://localhost:3000

# 3. Perform typecheck
npx tsc --noEmit

# 4. Create production build locally
npm run build

# 5. Test production build locally
npm run start
```

---

## 2. AWS Production Deployment (Amplify Gen 2)

AWS Amplify automatically deploys commits pushed to the connected branch using the build specifications in [`amplify.yml`](file:///r:/Learn-more-technology/amplify.yml).

### Build Pipeline:
1. **Frontend Phase:**
   - Command: `npm ci`
   - Build: `npm run build`
2. **Artifacts:**
   - Base Directory: `.next`
   - Files: `**/*`
3. **Edge Caching:** Static assets (`/_next/static/*`, `/public/*`) cached with `Cache-Control: public, max-age=31536000, immutable`.

---

## 3. Environment Variables Configuration

Set these environment variables inside AWS Amplify Console (**App settings > Environment variables**):

| Variable Name | Example / Expected Value | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://learnmoretechnologies.in` | Canonical base URL |
| `NEXT_PUBLIC_DEFAULT_PHONE` | `+919036524555` | Central telephone CTA |
| `NEXT_PUBLIC_MARATHAHALLI_WHATSAPP` | `919036524555` | Marathahalli branch WhatsApp |
| `NEXT_PUBLIC_BTM_WHATSAPP` | `919036542555` | BTM Layout branch WhatsApp |
| `NEXT_PUBLIC_KALYAN_NAGAR_WHATSAPP`| `919036354551` | Kalyan Nagar branch WhatsApp |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics 4 ID |
| `NODE_ENV` | `production` | Next.js runtime environment |

---

## 4. Emergency 5-Minute Rollback Procedure

If a critical production defect occurs:
1. Open **AWS Route 53 Console** > Hosted Zones > `learnmoretechnologies.in`.
2. Locate the **Apex `A` record** (`learnmoretechnologies.in`) and **`www` `A` record**.
3. Toggle alias target back to the legacy WordPress server IP address.
4. Save record changes. With Route 53 TTL set to 300 seconds, traffic reverts to WordPress within 5 minutes.
