import Image from "next/image";
import { Button } from "@/components";

const Projects = () => {
  const path = "/project-background.svg";

  return (
    <>
      <div className="mt-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ED254E"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <h1 className="bg-[#ED254E] pb-10 text-center text-5xl">
          The Wild Oasis
        </h1>
        <div className="flex flex-col bg-[#ED254E] lg:flex-row">
          <span className="order-last break-words lg:order-first w-52 ">
            My portfolio website build with React using Next.js framework. The
            source code is writtin in 100% TypeScript and the project is easy to
            maintain with the type safety provided by Typescript. The source
            code is very moduler allowing easy debugging. Styling is done using
            Material-UI, the website comes with two themes, dark and light.
            Animations are done using two libraries, react-spring for the bouncy
            logo animations, and framer-motion for page transitions. next/image
            which is a new Next.js 10 feature is being used to automatically
            resize images according to display and also prevent html elements
            shifting from slow loading images. This description is typed as
            markdown in source code, the Project component takes in props for
            links, icons, title, images, etc; nothing is hard coded.
          </span>

          <Image src="/main.webp" alt="image" width={500} height={500} />
        </div>
        {/* <Button title="Source Code" variation="primary" />
        <Button title="Live Demo" variation="primary" /> */}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "rotate(0.5turn)" }}
        >
          <path
            fill="#ED254E"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <h1 className=" pb-10 text-center text-5xl">The Wild Oasis</h1>
        <div className="flex flex-col  lg:flex-row">
          <span className="order-last break-words lg:order-first">
            My portfolio website build with React using Next.js framework. The
            source code is writtin in 100% TypeScript and the project is easy to
            maintain with the type safety provided by Typescript. The source
            code is very moduler allowing easy debugging. Styling is done using
            Material-UI, the website comes with two themes, dark and light.
            Animations are done using two libraries, react-spring for the bouncy
            logo animations, and framer-motion for page transitions. next/image
            which is a new Next.js 10 feature is being used to automatically
            resize images according to display and also prevent html elements
            shifting from slow loading images. This description is typed as
            markdown in source code, the Project component takes in props for
            links, icons, title, images, etc; nothing is hard coded.
          </span>
          <Image src="/main.webp" alt="image" width={500} height={500} />
        </div>
        {/* <Button title="Source Code" variation="primary" />
        <Button title="Live Demo" variation="primary" /> */}
      </div>
      <div className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          // style={{ transform: "rotate(0.5turn)" }}
        >
          <path
            fill="#ED254E"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <h1 className=" bg-[#ED254E] pb-10 text-center text-5xl">
          The Wild Oasis
        </h1>
        <div className="flex flex-col  bg-[#ED254E]  lg:flex-row">
          <span className="order-last break-words lg:order-first">
            My portfolio website build with React using Next.js framework. The
            source code is writtin in 100% TypeScript and the project is easy to
            maintain with the type safety provided by Typescript. The source
            code is very moduler allowing easy debugging. Styling is done using
            Material-UI, the website comes with two themes, dark and light.
            Animations are done using two libraries, react-spring for the bouncy
            logo animations, and framer-motion for page transitions. next/image
            which is a new Next.js 10 feature is being used to automatically
            resize images according to display and also prevent html elements
            shifting from slow loading images. This description is typed as
            markdown in source code, the Project component takes in props for
            links, icons, title, images, etc; nothing is hard coded.
          </span>
          <Image src="/main.webp" alt="image" width={500} height={500} />
        </div>
        {/* <Button title="Source Code" variation="primary" />
        <Button title="Live Demo" variation="primary" /> */}
      </div>
    </>
  );
};

export default Projects;
