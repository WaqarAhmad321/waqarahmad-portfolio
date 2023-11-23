import React, { FC } from "react";

const ProjectsTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="text-center text-7xl font-bold capitalize text-gray-900 md:text-8xl">
      {title}
    </h2>
  );
};

export default ProjectsTitle;
