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
        "dark-grey": "#011936",
        "light-grey": "#465362",
        "secondary-red": "#ED254E",
      },
      backgroundImage: {
        "blob-scene": "url('/public/blob.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
