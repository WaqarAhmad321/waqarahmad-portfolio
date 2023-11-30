import React, { FC } from "react";

const ProjectsTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3 id="projects" className="text-center text-7xl font-bold capitalize text-heading-color md:text-8xl mt-8">
      {title}
    </h3>
  );
};  

export default ProjectsTitle;
