import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#e11d48",
          600: "#b91c1c", // Logo Crimson Red Primary
          700: "#991b1b", // Rich Deep Red
          800: "#7f1d1d", // Dark Burgundy Red
          900: "#4c0519", // Deep Wine
          950: "#2b000b", // Deep Velvet Red-Black
        },
        navy: {
          900: "#0f172a",
          950: "#030712",
        },
        crimson: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#e11d48",
          600: "#b91c1c",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#4c0519",
          950: "#2b000b",
        },
        emerald: {
          500: "#10B981",
          600: "#059669",
        },
      },
    },
  },
  plugins: [],
};
export default config;
