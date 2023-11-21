import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#011936",
        "red-crayola": "#ED254E",
        "mint-cream": "#F4FFFD",
        "naples-yellow": "#F9DC5C",
        "charcoal": "#465362",
        "wave-color": "#CEE0DF"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;