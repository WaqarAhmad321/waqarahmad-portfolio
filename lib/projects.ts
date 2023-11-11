import logos from "./logos";
import { TechIconsProps } from "./types";

type ProjectNames =
  | "theWildOasis"
  | "worldWise"
  | "carHub"
  | "fastReactPizza"
  | "usePopCorn"
  | "travelList"
  | "eatNSplit"
  | "thisWebsite"
  | "reactQuiz";

export type ProjectType = {
  title: string;
  description: string[];
  image?: {
    main?: { src: string; width: number; height: number };
    mp4?: string;
    webm?: string;
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github: string; demo: string };
  stack: TechIconsProps[];
};

type Projects = { [K in ProjectNames]: ProjectType };

const allProjects: Projects = {
  theWildOasis: {
    title: "The Wild Oasis",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [
      logos.react,
      logos.reactQuery,
      logos.supabase,
      logos.reactRouter,
      logos.styledComponents,
    ],
    links: { github: "/", demo: "/" },
  },
  worldWise: {
    title: "World Wise",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react, logos.reactRouter, logos.javascript, logos.cssModules],
    links: { github: "/", demo: "/" },
  },
  carHub: {
    title: "Car Hub",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.nextjs, logos.react, logos.typescript, logos.tailwind],
    links: { github: "/", demo: "/" },
  },
  fastReactPizza: {
    title: "Fast React Pizza Co.",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react, logos.redux, logos.reactRouter],
    links: { github: "/", demo: "/" },
  },
  thisWebsite: {
    title: "This Website",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.nextjs, logos.typescript, logos.tailwind],
    links: { github: "/", demo: "/" },
  },
  usePopCorn: {
    title: "usePopCorn",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react, logos.javascript],
    links: { github: "/", demo: "/" },
  },
  travelList: {
    title: "Travel List",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react, logos.git],
    links: { github: "/", demo: "/" },
  },
  reactQuiz: {
    title: "React Quiz",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react],
    links: { github: "/", demo: "/" },
  },
  eatNSplit: {
    title: "Eat 'n Split",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/main.webp", width: 640, height: 390 } },
    stack: [logos.react],
    links: { github: "/", demo: "/" },
  },
};
export default allProjects;
