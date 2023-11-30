import { FC } from "react";

import ReactMarkdown from "react-markdown";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { ProjectType } from "@/lib/projects";
import { Button, TechIcons, Wave } from "@/components";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import ProjectVideo from "./ProjectVideo";

interface ProjectProps extends ProjectType {
  index: number;
}

const Project: FC<ProjectProps> = ({
  index,
  title,
  description,
  image,
  links,
  stack,
}) => {
  const odd = index % 2 === 1 ? true : false;

  const renderDescription = () => {
    return (
      <div className={`mb-2 mt-5 text-lg lg:mt-0`}>
        {description.map((desc, index) => (
          <ReactMarkdown key={index} className="mb-3">
            {desc}
          </ReactMarkdown>
        ))}
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className={cn("flex flex-col gap-6", odd && "bg-[#D8E6FC]")}>
        <div className="w-full">
          <h4 className="text-center text-5xl font-medium text-gray-900 md:font-semibold">
            {title}
          </h4>
        </div>

        <div className="mx-6 flex flex-col lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className={cn("flex flex-col", odd && "lg:order-first")}>
            {renderDescription()}

            <div className="flex justify-between gap-3 xss:justify-around xs:justify-normal">
              <Link href={links.github} target="__blank">
                <Button variant="secondary" size="sm" aria-label="Source Code">
                  Source Code
                  <RxGithubLogo className="text-2xl" />
                </Button>
              </Link>
              <Link href={links.demo} target="__blank">
                <Button variant="secondary" size="sm" aria-label="Live Demo">
                  Live Demo
                  <RxExternalLink className="text-2xl" />
                </Button>
              </Link>
            </div>

            <div className="mb-24 flex justify-between xs:justify-normal xs:gap-6 sm:gap-8 md:mb-0 md:gap-10">
              {stack.map((icon, index) => (
                <TechIcons
                  key={index}
                  label={icon.label}
                  src={icon.src}
                  displayLabel={false}
                />
              ))}
            </div>
          </div>

          <ProjectVideo title={title} image={image} />
        </div>
      </div>
    );
  };

  return odd ? <Wave>{renderProjects()}</Wave> : renderProjects();
};

export default Project;
