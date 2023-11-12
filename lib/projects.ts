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
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 400 } },
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
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react, logos.reactRouter, logos.javascript, logos.cssModules],
    links: { github: "/", demo: "/" },
  },
  carHub: {
    title: "Car Hub",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.nextjs, logos.react, logos.typescript, logos.tailwind],
    links: { github: "/", demo: "/" },
  },
  fastReactPizza: {
    title: "Fast React Pizza Co.",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react, logos.redux, logos.reactRouter],
    links: { github: "/", demo: "/" },
  },
  thisWebsite: {
    title: "This Website",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.nextjs, logos.typescript, logos.tailwind],
    links: { github: "/", demo: "/" },
  },
  usePopCorn: {
    title: "usePopCorn",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react, logos.javascript],
    links: { github: "/", demo: "/" },
  },
  travelList: {
    title: "Travel List",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react, logos.git],
    links: { github: "/", demo: "/" },
  },
  reactQuiz: {
    title: "React Quiz",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react],
    links: { github: "/", demo: "/" },
  },
  eatNSplit: {
    title: "Eat 'n Split",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],  
    image: { main: { src: "/main.webp", width: 600, height: 390 } },
    stack: [logos.react],
    links: { github: "/", demo: "/" },
  },
};
export default allProjects;
