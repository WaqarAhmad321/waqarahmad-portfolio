import React from "react";

const ProjectsTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-7xl capitalize md:text-8xl md:font-bold text-gray-900">
      {title}
    </h2>
  );
};

export default ProjectsTitle;
