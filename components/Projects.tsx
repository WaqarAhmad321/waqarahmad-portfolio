import Image from "next/image";
import Button from "./Button";

const Projects = () => {
  return (
    <div className="mt-40 ">
      <h1 className="mb-10 text-center text-5xl">The Wild Oasis</h1>
      <div className="flex flex-col lg:flex-row">
        <p className="order-last lg:order-first">
          My portfolio website build with React using Next.js framework. The
          source code is writtin in 100% TypeScript and the project is easy to
          maintain with the type safety provided by Typescript. The source code
          is very moduler allowing easy debugging. Styling is done using
          Material-UI, the website comes with two themes, dark and light.
          Animations are done using two libraries, react-spring for the bouncy
          logo animations, and framer-motion for page transitions. next/image
          which is a new Next.js 10 feature is being used to automatically
          resize images according to display and also prevent html elements
          shifting from slow loading images. This description is typed as
          markdown in source code, the Project component takes in props for
          links, icons, title, images, etc; nothing is hard coded.
        </p>
        <Image src="/main.webp" alt="image" width={500} height={500} />
      </div>
        <Button title="Source Code" variation="primary" />
        <Button title="Live Demo" variation="primary" />
    </div>
  );
};

export default Projects;
