# Production Troubleshooting Guide

This guide provides immediate diagnostic steps and resolutions for common issues encountered during development, build, or AWS production hosting for **Learn More Technologies**.

---

### Issue 1: `npm run build` fails on TypeScript errors
* **Cause:** Strict TypeScript type mismatch or missing property in `src/data/` definitions.
* **Resolution:** Run `npx tsc --noEmit` to identify the exact line and file. Check [`src/types/index.ts`](file:///r:/Learn-more-technology/src/types/index.ts) to ensure required interface fields are provided.
* **Verification:** Run `npm run build` and ensure it outputs `✓ Compiled successfully`.

---

### Issue 2: Broken Image in Next.js
* **Cause:** Image file missing from `public/` or invalid path in `src/data/`.
* **Resolution:** Ensure the image file is placed in `public/images/...` and referenced with leading slash (e.g. `/images/courses/aws.jpg`).
* **Verification:** Inspect browser console in development mode; verify image returns HTTP 200.

---

### Issue 3: WhatsApp Inquiry Form does not open with pre-filled text
* **Cause:** Adblocker blocking `window.open` popup or phone number format containing special characters.
* **Resolution:** Numbers must be strictly numeric without `+` or spaces (e.g., `919036524555`).
* **Verification:** Test form submission on mobile Chrome / Safari; verify WhatsApp application opens directly.

---

### Issue 4: 404 on Legacy WordPress URL
* **Cause:** Legacy WordPress URL not yet added to `next.config.mjs` redirect table.
* **Resolution:** Open [`next.config.mjs`](file:///r:/Learn-more-technology/next.config.mjs), add a new redirect object under `redirects()`:
  ```javascript
  {
    source: "/old-wordpress-slug",
    destination: "/courses/target-course-slug",
    permanent: true,
  }
  ```
* **Verification:** Request the old URL and verify it responds with HTTP `308/301`.

---

### Issue 5: Domain SSL / HTTPS Warning in Browser
* **Cause:** ACM Certificate pending DNS CNAME validation in Route 53 or CloudFront distribution provisioning.
* **Resolution:** Verify ACM certificate status in `us-east-1` (for CloudFront) or `ap-south-1` (for Amplify); ensure CNAME record is active in Route 53.
* **Verification:** Open `https://learnmoretechnologies.in` in an incognito window; verify valid lock icon.
