import React from "react";

const ProjectsTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-7xl font-normal md:font-light capitalize md:text-8xl">
      {title}
    </h2>
  );
};

export default ProjectsTitle;
