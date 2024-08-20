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
        xss: "380px",
        xs: "470px",
      },
      colors: {
        special: "rgb(44, 115, 248)",
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
      backgroundImage: {
        "blob-image": "url('/background/blob-scene.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
