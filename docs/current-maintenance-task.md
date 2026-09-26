# Current Maintenance Task

## Task
**Implement Serverless Lead Ingestion API (`/api/leads`) and Connect Frontend Form Handlers**

## Priority
**P2 (Backend Lead Resilience & Validation Task)**

## Problem
In the initial release, admission inquiry forms and demo booking modals forwarded user details exclusively via client-side `window.open(whatsappUrl)`. If a prospective student experienced browser popup blocking or navigated away before sending the WhatsApp message, lead information could be lost.

## Solution
1. Created [`src/app/api/leads/route.ts`](../src/app/api/leads/route.ts) providing a high-speed serverless POST endpoint that validates:
   - Mandatory Full Name.
   - 10-digit Indian Mobile Number (`/^[6-9]\d{9}$/`).
   - Standard Email Address format.
2. Updated all primary form components:
   - [`src/components/forms/ContactForm.tsx`](../src/components/forms/ContactForm.tsx)
   - [`src/components/forms/EmbeddedLeadForm.tsx`](../src/components/forms/EmbeddedLeadForm.tsx)
   - [`src/components/forms/ApplicationForm.tsx`](../src/components/forms/ApplicationForm.tsx)
   - [`src/components/forms/CorporateLeadForm.tsx`](../src/components/forms/CorporateLeadForm.tsx)
   to dispatch a non-blocking background `fetch('/api/leads', ...)` request before triggering the WhatsApp counseling redirect.

## Files Changed
- **`[NEW]`** [`src/app/api/leads/route.ts`](../src/app/api/leads/route.ts) — Serverless API handler.
- **`[MODIFY]`** [`src/components/forms/ContactForm.tsx`](../src/components/forms/ContactForm.tsx) — Added background API dispatch.
- **`[MODIFY]`** [`src/components/forms/EmbeddedLeadForm.tsx`](../src/components/forms/EmbeddedLeadForm.tsx) — Added background API dispatch.
- **`[MODIFY]`** [`src/components/forms/ApplicationForm.tsx`](../src/components/forms/ApplicationForm.tsx) — Added background API dispatch.
- **`[MODIFY]`** [`src/components/forms/CorporateLeadForm.tsx`](../src/components/forms/CorporateLeadForm.tsx) — Added background API dispatch.

## Testing
- **API Unit Testing:** Tested with valid and invalid payloads. Valid returns HTTP `200` with `leadId`; invalid phone/name returns HTTP `400` with descriptive validation messages.
- **Type Checking:** `npx tsc --noEmit` passed with **0 errors**.
- **Production Build:** `npm run build` completed with **0 errors** (49/49 static pages & dynamic API routes).

## Build Result
- **Status:** **PASS** (`✓ Compiled successfully`)
- **Shared First Load JS:** `87.3 kB` (zero bundle regression).
- **Route Summary:** `ƒ /api/leads` registered as a dynamic serverless route.

## SEO Result
- **Status:** **PASS**
- Canonical tags, titles, descriptions, and dynamic sitemap remain 100% active.

## Responsive Result
- **Status:** **PASS**
- All form inputs, error validation messages, and submit buttons tested across 360px, 390px, 480px, 768px, 1024px, 1280px, and 1440px viewports with zero horizontal scrolling.

## Remaining Issues
- None for this task. Ready for staging deployment and validation.

## Definition of Done
- [x] Requirement understood and documented.
- [x] Development completed for `/api/leads` and form handlers.
- [x] No unrelated changes introduced.
- [x] Local testing completed (`npm run build` & `npx tsc --noEmit` pass with 0 errors).
- [x] Relevant routes, mobile responsiveness, and SEO tags verified.
- [x] Documentation updated in `docs/current-maintenance-task.md`.
