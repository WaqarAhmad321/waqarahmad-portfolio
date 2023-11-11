import React from "react";
import { Button, TechStack, Wave } from "..";
import { ProjectType } from "@/lib/projects";
import Image from "next/image";
import TechIcons from "../Techstack/TechIcons";
import Link from "next/link";

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
  const odd = index % 2 === 1 ? true : false;

  const renderProjects = () => {
    return (
      <div className={odd ? "bg-[#16324D]" : ""}>
        <h1>{title}</h1>
        <p>{description}</p>

        <Link href={links.github}>
          <Button variant="secondary" size="md">
            Source Code
          </Button>
        </Link>
        <Link href={links.demo}>
          <Button variant="secondary" size="md" onClick={}>
            Live Demo
          </Button>
        </Link>

        <Image
          src={image.main?.src || ""}
          alt="image"
          width={image?.main?.width}
          height={image?.main?.height}
        />

        {stack.map((icon, index) => (
          <TechIcons
            key={index}
            src={icon.src}
            label={icon.label}
            width={icon.width}
            height={icon.height}
          />
        ))}
      </div>
    );
  };

  if (odd) {
    return <Wave>{renderProjects()}</Wave>;
  }
  return renderProjects();
};

export default Project;
