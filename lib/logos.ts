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
  | "reactRouter";

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
    src: "/stack icons/typescript.svg",
    width: 50,
    height: 50,
  },
  react: {
    label: "React",
    src: "/stack icons/react.png",
    width: 58,
    height: 50,
  },
  nextjs: {
    label: "Next.js",
    src: "/stack icons/nextjs.svg",
    width: 80,
    height: 50,
  },
  javascript: {
    label: "TypeScript",
    src: "/stack icons/javascript.svg",
    width: 50,
    height: 50,
  },
  tailwind: {
    label: "Tailwind",
    src: "/stack icons/tailwind-css.svg",
    width: 78,
    height: 100,
  },
  html: {
    label: "HTML",
    src: "/stack icons/html.svg",
    width: 50,
    height: 30,
  },
  css: {
    label: "CSS",
    src: "/stack icons/css.svg",
    width: 55,
    height: 30,
  },
  reactQuery: {
    label: "React Query",
    src: "/stack icons/react-query.svg",
    width: 55,
    height: 30,
  },
  supabase: {
    label: "Supabase",
    src: "/stack icons/supabase.svg",
    width: 55,
    height: 30,
  },
  redux: {
    label: "Redux",
    src: "/stack icons/redux.svg",
    width: 55,
    height: 30,
  },
  reactRouter: {
    label: "React Router",
    src: "/stack icons/react-router.svg",
    width: 55,
    height: 30,
  },
};

export default logos;
