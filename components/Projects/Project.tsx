import React from "react";
import { Button, Wave } from "..";
import { ProjectType } from "@/lib/projects";
import Image from "next/image";
import TechIcons from "../Techstack/TechIcons";

interface ProjectProps extends ProjectType {
  index: number;
}

const Project = ({
  index,
  title,
  description,
  image,
  links,
  stack,
}: ProjectProps) => {
  return (
    <Wave>
      <div className="bg-dark-grey text-[#F4FFFD]">
        <h1>{title}</h1>
        <p>{description}</p>

        <Button variant="secondary" size="md">
          Source Code
        </Button>
        <Button variant="secondary" size="md">
          Live Demo
        </Button>
      </div>
    </Wave>
  );
};

export default Project;
