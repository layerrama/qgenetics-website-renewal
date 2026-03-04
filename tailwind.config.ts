import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#136dec",
        "primary-light": "#63B3ED",
        "primary-dark": "#1A365D",
        "background-light": "#F0F7FF",
        "background-dark": "#0A1625",
        surface: "rgba(255, 255, 255, 0.95)",
        "text-main": "#2D3748",
        "text-muted": "#718096",
        accent: "#90CDF4",
        "soft-gradient-start": "#EBF8FF",
        "soft-gradient-end": "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        sans: ["var(--font-display)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(19, 109, 236, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
