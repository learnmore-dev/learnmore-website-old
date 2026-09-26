# Next Maintenance Task

## Selected Jira Task
- **Ticket:** `LMT-MAINT-010`
- **Title:** Build Client-Side Instant Course Search Modal

---

## Objective
Build an accessible, high-performance client-side instant search modal with keyboard shortcut support (`Cmd+K` / `Ctrl+K`) and global header triggers, enabling prospective students to rapidly search, filter, and discover all 12 IT training programs by title, technology, category, and curriculum keywords without page reloads.

---

## Description
Provide a seamless command-palette style search modal (`CourseSearchModal.tsx`) across the Learn More Technologies platform. The search modal will index all 12 courses from `src/data/courses.ts`, supporting real-time fuzzy matching across course titles, overviews, technologies, and skills. Users can open the search via desktop keyboard shortcut (`Cmd+K` / `Ctrl+K`), global header search trigger bar, or mobile navigation search button. The modal includes category filter pills, arrow key navigation (`Up`/`Down`/`Enter`), auto-focus search input, and responsive styling.

---

## Acceptance Criteria
1. **Interactive Modal Component**: Accessible dialog (`role="dialog"`, `aria-modal="true"`) with backdrop blur, auto-focus input, and `Escape` key dismissal.
2. **Keyboard Shortcut Support**: Global listener for `Cmd+K` (Mac) and `Ctrl+K` (Windows/Linux) to toggle search modal open/close from any page.
3. **Global Header Integration**: Search trigger button with keyboard badge placed in desktop header navbar and mobile navigation drawer.
4. **Instant Client-Side Filtering**: Real-time multi-field search matching query against course `title`, `categoryName`, `overview`, `skillsGained`, and `toolsAndTechnologies`.
5. **Category Quick Filters**: Interactive category chips (All, Cloud & DevOps, Programming, Data Science & AI, Software Testing) to narrow search results.
6. **Keyboard Navigation in Results**: `ArrowUp` / `ArrowDown` to highlight search results and `Enter` to navigate directly to `/courses/[slug]`.
7. **Empty State & Popular Suggestions**: Display curated popular course suggestions and category tags when search input is empty.
8. **TypeScript & Build Verification**: `npx tsc --noEmit` and `npm run build` pass with 0 errors and zero regressions across existing 59 routes.

---

## Dependencies
- None (Utilizes React client hooks, Lucide icons, and existing `src/data/courses.ts`).

---

## Affected Areas
- **Components:** `src/components/search/CourseSearchModal.tsx` `[NEW]`, `src/components/layout/Header.tsx`, `src/components/layout/MobileDrawer.tsx`.
- **Global Layout:** Integrated across all pages via global Header.

---

## Expected Implementation
1. Create `src/components/search/CourseSearchModal.tsx`.
2. Add global search trigger and modal mount to `src/components/layout/Header.tsx`.
3. Add search trigger button to `src/components/layout/MobileDrawer.tsx`.
4. Verify build and type safety.

---

## QA Requirements
- Test keyboard shortcuts (`Cmd+K` / `Ctrl+K`, `Escape`, `ArrowUp`, `ArrowDown`, `Enter`).
- Test search queries for titles (e.g. "AWS", "Python", "Java", "Selenium"), technologies (e.g. "Docker", "Kubernetes", "Power BI", "React"), and skills.
- Test category filter pill switching.
- Test responsive viewports (360px mobile to 1440px desktop).
- Validate 0 console errors and 0 build warnings.

---

## SEO Impact
- **Neutral to Positive**: Improves internal discoverability and user engagement metrics (lower bounce rate, higher session depth).

---

## Production Impact
- Zero runtime overhead or server load (100% client-side instant search).
- Preserves static site generation and lightweight page bundle sizes.

---

## Risks / Unknowns
- Ensure OS-aware shortcut display (`⌘K` on macOS, `Ctrl+K` on Windows/Linux).
- Ensure body scroll lock when modal is open to prevent background scrolling.

---

## Status

```text
STATUS: COMPLETED
```


