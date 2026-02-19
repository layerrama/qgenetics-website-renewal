import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ce362",
        background: "#f6f8f6",
        foreground: "#102216",
        surface: "#ffffff",
        sage: {
          50: "#f4f7f5",
          100: "#e3ebe5",
          200: "#c5d6cb",
          600: "#4d7a5e",
          800: "#2d4034",
          900: "#111813"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16, 34, 22, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
