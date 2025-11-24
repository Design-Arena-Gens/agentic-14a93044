import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf9ff",
          100: "#d0edff",
          200: "#a0dcff",
          300: "#64c4ff",
          400: "#34a6ff",
          500: "#118aff",
          600: "#006ce0",
          700: "#0057b3",
          800: "#00458a",
          900: "#053b70"
        }
      }
    }
  },
  plugins: []
};

export default config;
