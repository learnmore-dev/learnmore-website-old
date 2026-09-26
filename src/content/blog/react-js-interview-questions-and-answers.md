---
slug: "react-js-interview-questions-and-answers"
title: "Top 30 React.js Interview Questions and Answers (Hooks, SSR & State Management)"
category: "Interview Questions"
categorySlug: "interview-questions"
author: "Pooja Sharma"
authorRole: "Senior UI/UX & Frontend Architect"
date: "2026-07-12"
readTime: 12
summary: "Comprehensive React.js interview guide covering React 18/19 features, Virtual DOM reconciliation, useMemo vs useCallback, Redux Toolkit vs Zustand, Next.js Server Components, and performance optimization."
relatedCourseSlug: "java-full-stack-course"
metaTitle: "React.js Interview Questions and Answers for 2026 - LearnMore"
metaDescription: "Prepare for React.js developer interviews with 30 essential questions on React Fiber, Hooks, SSR, Next.js Server Components, and Redux Toolkit."
---

## 1. How does React Fiber and Virtual DOM Reconciliation work?
**React Fiber** is the complete rewrite of React's core reconciliation algorithm introduced to enable incremental rendering:
- **Diffing Algorithm:** React compares previous and next Virtual DOM trees using a heuristic O(n) algorithm.
- **Fiber Nodes:** Each UI element is represented as a unit of work that can be paused, prioritized, aborted, or reused.
- **Concurrent Mode (React 18):** Enables interruptible rendering with `useTransition` and `useDeferredValue`, keeping user input responsive during heavy re-renders.

---

## 2. When to use useMemo vs useCallback with practical examples?
- `useMemo`: Memoizes the **result of a calculation** between renders. Use when computing expensive values (e.g. sorting large data sets).
- `useCallback`: Memoizes a **function definition** between renders. Use when passing callback props to optimized child components wrapped in `React.memo`.

---

## 3. Comparing Redux Toolkit, Zustand, and React Context API
- **React Context API:** Built-in. Ideal for low-frequency global state (themes, authenticated user info). Causes re-render of all consumers on value change.
- **Redux Toolkit (RTK):** Opinionated standard for enterprise applications requiring predictable state, time-travel debugging, and standardized slice patterns with RTK Query.
- **Zustand:** Minimalist, hook-based state management with zero boilerplate, selector-based subscriptions, and no Context provider wrapper needed.

---

## 4. Difference between React Server Components (RSC) and Client Components?
- **Server Components (Default in Next.js App Router):** Render exclusively on the server. They have zero impact on client JavaScript bundle size and can directly access databases and secrets.
- **Client Components (`"use client"`):** Pre-rendered on server and hydrated on the browser. Required for interactive state (`useState`), side effects (`useEffect`), and browser event listeners.

---

## 5. How to design reusable Custom Hooks for data fetching and debouncing?
Custom hooks encapsulate stateful logic into reusable functions prefixed with `use`:
- `useDebounce(value, delay)`: Delays state updates until a user stops typing, minimizing unnecessary API requests during real-time search queries.
- `useFetch(url)`: Handles loading, error, and data states with automatic abort controller cleanup on component unmount.
