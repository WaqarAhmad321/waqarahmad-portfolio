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
  | "git";

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
    width: 50,
    height: 50,
  },
  react: {
    label: "React",
    src: "/techstack/react.png",
    width: 58,
    height: 50,
  },
  nextjs: {
    label: "Next.js",
    src: "/techstack/nextjs.svg",
    width: 80,
    height: 50,
  },
  javascript: {
    label: "TypeScript",
    src: "/techstack/javascript.svg",
    width: 50,
    height: 50,
  },
  tailwind: {
    label: "Tailwind",
    src: "/techstack/tailwind-css.svg",
    width: 78,
    height: 100,
  },
  html: {
    label: "HTML",
    src: "/techstack/html.svg",
    width: 50,
    height: 30,
  },
  css: {
    label: "CSS",
    src: "/techstack/css.svg",
    width: 55,
    height: 30,
  },
  reactQuery: {
    label: "React Query",
    src: "/techstack/react-query.svg",
    width: 55,
    height: 30,
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
    width: 55,
    height: 30,
  },
  git: {
    label: "Git",
    src: "/techstack/git.svg",
    width: 55,
    height: 30,
  },
};

export default logos;
