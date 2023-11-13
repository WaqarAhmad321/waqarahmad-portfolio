import Balancer from "react-wrap-balancer";

import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/lib/projects";

import { Button, Wave } from "..";
import TechIcons from "../Techstack/TechIcons";
import ReactMarkdown from "react-markdown";

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
          <ReactMarkdown key={index} className="mt-3">
            {desc}
          </ReactMarkdown>
        ))}
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className="w-screen">
        <div className={`flex flex-col gap-2 ${odd ? "bg-[#CEE0DF]" : ""}`}>
          <div className="w-full">
            <h1 className="text-center text-5xl">{title}</h1>
          </div>

          <div className="m-16 mt-6 flex flex-col lg:grid lg:grid-cols-2">
            <div className="flex flex-col lg:order-first">
              {renderDescription()}

              <div className="mt-4 flex justify-around gap-3 sm:justify-normal">
                <Link href={links.github}>
                  <Button variant="secondary" size="md">
                    Source Code
                  </Button>
                </Link>
                <Link href={links.demo}>
                  <Button variant="secondary" size="md">
                    Live Demo
                  </Button>
                </Link>
              </div>

              <div className="flex gap-2">
                {stack.map((icon, index) => (
                  <TechIcons
                    key={index}
                    label={icon.label}
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                  />
                ))}
              </div>
            </div>

            <div className="order-first md:mt-0">
              <Image
                src={image?.main?.src}
                alt="image"
                width={image?.main?.width}
                height={image?.main?.height}
                layout="responsive"
              />
            </div>
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
