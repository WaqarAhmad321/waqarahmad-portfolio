import logos from "./logos";
import { TechStackProps } from "./types";

type ProjectNames =
  | "theWildOasis"
  | "worldWise"
  | "carHub"
  | "fastReactPizza"
  | "usePopCorn"
  | "travelList"
  | "thisWebsite";

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
  stack: TechStackProps[];
};

type Projects = { [K in ProjectNames]: ProjectType };

const allProjects: Projects = {
  theWildOasis: {
    title: "The Wild Oasis",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 400 } },
    stack: [
      logos.react,
      logos.reactQuery,
      logos.supabase,
      logos.reactRouter,
      logos.styledComponents,
    ],
    links: {
      github: "https://github.com/WaqarAhmad321/the-wild-oasis",
      demo: "https://the-wild-oasis-project.vercel.app",
    },
  },
  worldWise: {
    title: "World Wise",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.react, logos.reactRouter, logos.javascript, logos.cssModules],
    links: {
      github: "https://github.com/WaqarAhmad321/world-wise-ReactJs",
      demo: "https://world-wise-react-js.vercel.app",
    },
  },
  carHub: {
    title: "Car Hub",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.nextjs, logos.react, logos.typescript, logos.tailwind],
    links: {
      github: "https://github.com/WaqarAhmad321/nextcar",
      demo: "https://carhub-orpin.vercel.app",
    },
  },
  fastReactPizza: {
    title: "Fast React Pizza Co.",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.react, logos.redux, logos.reactRouter],
    links: {
      github: "https://github.com/WaqarAhmad321/fast-react-pizza-ReactJs",
      demo: "https://fast-react-pizza-react-js.vercel.app",
    },
  },
  thisWebsite: {
    title: "This Website",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.nextjs, logos.typescript, logos.tailwind, logos.framerMotion],
    links: {
      github: "https://github.com/WaqarAhmad321/waqarahmad-portfolio",
      demo: "https://waqarahmad-portfolio.vercel.app",
    },
  },
  usePopCorn: {
    title: "usePopCorn",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.react, logos.javascript],
    links: {
      github: "https://github.com/WaqarAhmad321/usePopcorn-ReactJs",
      demo: "https://usepopcorn-reactjs.vercel.app",
    },
  },
  travelList: {
    title: "Travel List",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using chartjs, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    image: { main: { src: "/main.webp", width: 800, height: 390 } },
    stack: [logos.react, logos.git],
    links: {
      github: "https://github.com/WaqarAhmad321/travel-list-ReactJs",
      demo: "https://travel-list-react-js.vercel.app",
    },
  },
};
export default allProjects;
