import { TechIconsProps } from ".";
import logos from "./logos";

type projectNames =
  | "theWildOasis"
  | "worldWise"
  | "fastReactPizza"
  | "usePopCorn"
  | "travelList"
  | "eatNSplit"
  | "thisWebsite"
  | "reactQuiz";

// type StackType = { label: string; src: string, wid};

export type ProjectType = {
  title: string;
  description: string[];
  image: {
    main?: { src: string; width: number; height: number };
    webm?: string;
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github: string; demo: string };
  stack: TechIconsProps[];
};

type Projects = { [K in projectNames]: ProjectType };

const projects: Projects = {
  theWildOasis: {
    title: "The Wild Oasis",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them.",
      "End-to-End typesafe code",
    ],
    image: { main: { src: "/", width: 800, height: 800 } },
    stack: [ logos.react, logos.reactquery, logos.css, ]
  },
};
export default projects;
