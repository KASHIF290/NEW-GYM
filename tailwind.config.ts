import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — true black with two subtly lighter panel tones
        // for layering cards/sections without ever leaving the dark theme.
        ink: {
          DEFAULT: "#000000", // pure black, primary background
          panel: "#0D0D0D", // card / raised surface
          soft: "#141414", // alternate section background
          line: "#242424", // hairline borders on dark
        },
        // Brand lime — pulled directly from the gym's signage/logo
        lime: {
          DEFAULT: "#8FD300",
          light: "#A6E62E",
          dark: "#6FA300",
        },
        // Text on dark
        paper: {
          DEFAULT: "#FFFFFF",
          dim: "#B3B3B3", // secondary text
          faint: "#7A7A7A", // tertiary / disabled
        },
        // Distinct error/warning color — kept separate from brand lime so
        // error states never look like a success/affirmative signal.
        alert: {
          DEFAULT: "#FF5A4E",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
