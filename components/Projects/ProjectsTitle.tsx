import React from "react";

const ProjectsTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center text-7xl font-light md:text-8xl capitalize">{text}</h2>
  );
};

export default ProjectsTitle;
