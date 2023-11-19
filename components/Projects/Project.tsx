import ReactMarkdown from "react-markdown";

import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/lib/projects";

import { Button, Wave } from "..";
import TechIcons from "../Techstack/TechIcons";
import { RxExternalLink, RxGithubLogo, RxLink1 } from "react-icons/rx";

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

  const renderDescription = () => {
    return (
      <div className="mb-2 mt-5 lg:mt-0">
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
      <div className={`flex flex-col gap-2 ${odd && "bg-wave-color"}`}>
        <div className="w-full">
          <h3 className="text-center text-5xl font-light">{title}</h3>
        </div>

        <div className="m-16 mt-6 flex flex-col lg:grid lg:grid-cols-2 lg:gap-10">
          <div className={`flex flex-col ${odd && "lg:order-first"}`}>
            {renderDescription()}

            <div className="mt-4 flex justify-around gap-3 sm:justify-normal">
              <Link href={links.github}>
                <Button variant="secondary" size="md">
                  Source Code
                  <RxGithubLogo className="text-2xl" />
                </Button>
              </Link>
              <Link href={links.demo}>
                <Button variant="secondary" size="md">
                  Live Demo
                  <RxExternalLink className="text-2xl" />
                </Button>
              </Link>
            </div>

            <div className="mt-4 flex">
              {stack.map((icon, index) => (
                <div key={index} className="w-1/6 md:w-1/6">
                  <TechIcons
                    label={icon.label}
                    src={icon.src}
                    displayLabel={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="order-first md:mt-0">
            <Image
              src={image?.main?.src || "/main.webp"}
              alt="Project Image"
              width={image?.main?.width}
              height={image?.main?.height}
            />
          </div>
        </div>
      </div>
    );
  };

  if (odd) {
    return <Wave>{renderProjects()}</Wave>;
  }

  return renderProjects();
};

export default Project;
