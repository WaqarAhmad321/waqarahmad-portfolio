import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "470px",
      },
      colors: {
        special: "rgb(90, 103, 216)",
        "heading-color": "#1A202C",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      animation: {
        updown: "updown 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
