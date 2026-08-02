import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: "#1B1815", // warm charcoal, not pure black
          panel: "#242019",
          light: "#2E2820",
        },
        chalk: {
          DEFAULT: "#F2EEE4", // bone white text
          dim: "#A79E8D", // warm grey secondary text
          paper: "#EDE7DA", // paper contrast sections
        },
        brass: {
          DEFAULT: "#C89B3C", // worn brass / iron plate accent
          light: "#DDB65E",
          dark: "#9C7526",
        },
        rust: {
          DEFAULT: "#8B3A2F", // rust red, secondary accent
          light: "#A8483B",
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
