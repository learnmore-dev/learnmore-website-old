# Dependency Maintenance Review

**Project:** Learn More Technologies  
**Framework:** Next.js 14.2.20 / React 18.3.1 / TypeScript 5.7.2  

---

## 📦 Dependency Audit Table

| Package | Current Version | Issue / Advisory | Recommended Action | Priority |
| :--- | :--- | :--- | :--- | :--- |
| `next` | `14.2.20` | Patch updates available in 14.2.x series (e.g., 14.2.35). Older patch versions have minor DoS advisories on image optimization API. | Upgrade to `14.2.35` (latest 14.x LTS). Avoid major jump to Next 15 in production without full migration testing. | **P2** |
| `postcss` | `8.4.49` | Minor vulnerability reported in transitive dependencies. | Update `postcss` to `^8.4.50` or latest stable patch via `npm update postcss`. | **P2** |
| `react` / `react-dom` | `18.3.1` | Stable release. | Maintain on React 18 LTS. React 19 upgrade to be evaluated in separate milestone. | **P3** |
| `tailwindcss` | `3.4.16` | Stable release. | Maintain on 3.4.x. Tailwind v4 upgrade to be reviewed in Q1 2027. | **P3** |
| `lucide-react` | `0.468.0` | Stable icon set. | Retain current version; update as new icons are needed. | **P3** |

---

## ⚠️ Upgrade Policy
* **Never run `npm audit fix --force` in production**, as this can introduce breaking major version shifts (e.g. Next 16 preview).
* Always test dependency updates on a development branch with full `npm run build` and `npx tsc --noEmit` verification before staging.
