import React, { FC } from "react";

const ProjectsTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="text-center text-7xl font-bold capitalize text-heading-color md:text-8xl">
      {title}
    </h3>
  );
};

export default ProjectsTitle;
