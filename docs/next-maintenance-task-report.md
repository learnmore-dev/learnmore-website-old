# Next Maintenance Task Selection Report

## 1. Selected Jira Task
- **Jira ID:** `LMT-MAINT-010`
- **Task Title:** Build Client-Side Instant Course Search Modal
- **Priority:** `P2` (User Experience & Search Discovery)
- **Status:** **SELECTED — READY FOR IMPLEMENTATION**

---

## 2. Backlog Review Summary
A comprehensive review of the active Jira backlog was conducted following the closure and production verification of `LMT-MAINT-008` (Author 10 Additional Tech Interview Q&A Articles).

### Evaluated Backlog Tasks:
1. `LMT-MAINT-010`: Build Client-Side Instant Course Search Modal — **READY / APPROVED** (Priority P2, zero external blockers, immediate navigation discoverability enhancement across 12 IT training programs).
2. `LMT-MAINT-009`: Implement DynamoDB Lead Storage API Route — **BACKLOG / BLOCKED** (Pending AWS IAM permissions for DynamoDB write access).
3. `LMT-MAINT-011`: Integrate Razorpay Seat Booking Payment Gateway — **BACKLOG / BLOCKED** (Pending live Razorpay merchant key provisioning).
4. `LMT-MAINT-012`: Safely Decommission Legacy WordPress Host (+7 Days) — **SCHEDULED** (Gated on 7-day post-launch stability window).

---

## 3. Objective & Scope for LMT-MAINT-010
- **Objective:** Build an interactive, client-side instant search modal with keyboard shortcut support (`Cmd+K` / `Ctrl+K`) and global header triggers, enabling prospective students to rapidly search, filter, and navigate all 12 IT training courses without page reloads.
- **Component Scope:**
  - `src/components/search/CourseSearchModal.tsx` `[NEW]`
  - `src/components/layout/Header.tsx` (Add search trigger bar & modal mount)
  - `src/components/layout/MobileDrawer.tsx` (Add search button trigger)

---

## 4. Acceptance Criteria
1. **Interactive Modal Component**: Accessible dialog (`role="dialog"`, `aria-modal="true"`) with backdrop blur, auto-focus input, and `Escape` key dismissal.
2. **Keyboard Shortcut Support**: Global listener for `Cmd+K` (Mac) and `Ctrl+K` (Windows/Linux) to toggle search modal open/close from any page.
3. **Global Header Integration**: Search trigger button with keyboard badge placed in desktop header navbar and mobile navigation drawer.
4. **Instant Client-Side Filtering**: Real-time multi-field search matching query against course `title`, `categoryName`, `overview`, `skillsGained`, and `toolsAndTechnologies`.
5. **Category Quick Filters**: Interactive category chips (All, Cloud & DevOps, Programming, Data Science & AI, Software Testing) to narrow search results.
6. **Keyboard Navigation in Results**: `ArrowUp` / `ArrowDown` to highlight search results and `Enter` to navigate directly to `/courses/[slug]`.
7. **Empty State & Popular Suggestions**: Display curated popular course suggestions and category tags when search input is empty.
8. **TypeScript & Build Verification**: `npx tsc --noEmit` and `npm run build` pass with 0 errors and zero regressions across existing 59 routes.

---

## 5. Affected Areas
- **Components:** `src/components/search/CourseSearchModal.tsx` `[NEW]`, `src/components/layout/Header.tsx`, `src/components/layout/MobileDrawer.tsx`.
- **Global Layout:** Integrated across all pages via global Header.

---

## 6. Dependencies & Blockers
- **Dependencies:** None (Uses React hooks, Lucide icons, and existing `src/data/courses.ts` dataset).
- **Blockers:** None.

---

## 7. QA Scope
- Local test of keyboard shortcuts (`Cmd+K` / `Ctrl+K`, `Escape`, `ArrowUp`, `ArrowDown`, `Enter`).
- Verification of search filtering across course titles, overviews, categories, and tools.
- Verification of category filter chips.
- Responsive design validation (360px mobile to 1440px desktop).
- Production build validation (`npm run build` compiling 59/59 routes).

---

## 8. Final Status

```text
NEXT JIRA TASK SELECTED
```

