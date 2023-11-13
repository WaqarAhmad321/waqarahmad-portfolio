type logoNames =
  | "typescript"
  | "react"
  | "nextjs"
  | "javascript"
  | "tailwind"
  | "reactQuery"
  | "html"
  | "css"
  | "supabase"
  | "redux"
  | "reactRouter"
  | "git"
  | "styledComponents"
  | "cssModules";

type Logos = {
  [K in logoNames]: {
    label: string;
    src: string;
    width: number;
    height: number;
  };
};

const logos: Logos = {
  typescript: {
    label: "TypeScript",
    src: "/techstack/typescript.svg",
    width: 60,
    height: 60,
  },
  react: {
    label: "React",
    src: "/techstack/react.png",
    width: 60,
    height: 60,
  },
  nextjs: {
    label: "Next.js",
    src: "/techstack/nextjs.svg",
    width: 80,
    height: 80,
  },
  javascript: {
    label: "JavaScript",
    src: "/techstack/javascript.svg",
    width: 60,
    height: 60,
  },
  tailwind: {
    label: "Tailwind",
    src: "/techstack/tailwind-css.svg",
    width: 90,
    height: 90,
  },
  reactQuery: {
    label: "React Query",
    src: "/techstack/react-query.svg",
    width: 65,
    height: 65,
  },
  supabase: {
    label: "Supabase",
    src: "/techstack/supabase.svg",
    width: 55,
    height: 30,
  },
  redux: {
    label: "Redux",
    src: "/techstack/redux.svg",
    width: 55,
    height: 30,
  },
  reactRouter: {
    label: "React Router",
    src: "/techstack/react-router.svg",
    width: 60,
    height: 30,
  },
  git: {
    label: "Git",
    src: "/techstack/git.svg",
    width: 55,
    height: 30,
  },
  html: {
    label: "HTML",
    src: "/techstack/html.svg",
    width: 70,
    height: 70,
  },
  css: {
    label: "CSS",
    src: "/techstack/css.svg",
    width: 70,
    height: 70,
  },
  styledComponents: {
    label: "Styled Components",
    src: "/techstack/styled-components.png",
    width: 60,
    height: 60,
  },
  cssModules: {
    label: "Css Modules",
    src: "/techstack/css-modules.webp",
    width: 55,
    height: 30,
  },
};

export default logos;
