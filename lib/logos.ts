type logoNames =
  | "typescript"
  | "react"
  | "nextjs"
  | "javascript"
  | "tailwind"
  | "reactQuery"
  | "framerMotion"
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
  };
};

const logos: Logos = {
  typescript: {
    label: "TypeScript",
    src: "/techstack/typescript.svg",
  },
  react: {
    label: "React",
    src: "/techstack/react.svg",
  },
  nextjs: {
    label: "Next.js",
    src: "/techstack/nextjs.svg",
  },
  javascript: {
    label: "JavaScript",
    src: "/techstack/javascript.svg",
  },
  tailwind: {
    label: "Tailwind",
    src: "/techstack/tailwind-css.svg",
  },
  reactQuery: {
    label: "React Query",
    src: "/techstack/react-query.svg",
  },
  supabase: {
    label: "Supabase",
    src: "/techstack/supabase.svg",
  },
  redux: {
    label: "Redux",
    src: "/techstack/redux.svg",
  },
  reactRouter: {
    label: "React Router",
    src: "/techstack/react-router.svg",
  },
  git: {
    label: "Git",
    src: "/techstack/git.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    src: "/techstack/framer-motion.svg",
  },
  css: {
    label: "CSS",
    src: "/techstack/css.svg",
  },
  styledComponents: {
    label: "Styled Components",
    src: "/techstack/styled-components.svg",
  },
  cssModules: {
    label: "Css Modules",
    src: "/techstack/css-modules.webp",
  },
};

// const logos: Logos = {
//   typescript: {
//     label: "TypeScript",
//     src: "/techstack/typescript.svg",
//   },
//   react: {
//     label: "React",
//     src: "/techstack/react.png",
//   },
//   nextjs: {
//     label: "Next.js",
//     src: "/techstack/nextjs.svg",
//   },
//   javascript: {
//     label: "JavaScript",
//     src: "/techstack/javascript.svg",
//   },
//   tailwind: {
//     label: "Tailwind",
//     src: "/techstack/tailwind-css.svg",
//   },
//   reactQuery: {
//     label: "React Query",
//     src: "/techstack/react-query.svg",
//   },
//   supabase: {
//     label: "Supabase",
//     src: "/techstack/supabase.svg",
//   },
//   redux: {
//     label: "Redux",
//     src: "/techstack/redux.svg",
//   },
//   reactRouter: {
//     label: "React Router",
//     src: "/techstack/react-router.svg",
//   },
//   git: {
//     label: "Git",
//     src: "/techstack/git.svg",
//   },
//   framerMotion: {
//     label: "Framer Motion",
//     src: "/public/techstack/framer-motion.svg",
//   },
//   css: {
//     label: "CSS",
//     src: "/techstack/css.svg",
//   },
//   styledComponents: {
//     label: "Styled Components",
//     src: "/techstack/styled-components.png",
//   },
//   cssModules: {
//     label: "Css Modules",
//     src: "/techstack/css-modules.webp",
//   },
// };

export default logos;
