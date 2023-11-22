"use client";

import ReactMarkdown from "react-markdown";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/lib/projects";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import { motion } from "framer-motion";
import { Button, Wave } from "..";
import { TechIcons } from "@/components";

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
          <h3 className="text-center text-5xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        <div className="mx-6 flex flex-col lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className={cn("flex flex-col", odd && "lg:order-first")}>
            {renderDescription()}

            <div className="flex gap-3 sm:justify-normal">
              <Link href={links.github} target="__blank">
                <Button variant="secondary" size="sm">
                  Source Code
                  <RxGithubLogo className="text-2xl" />
                </Button>
              </Link>
              <Link href={links.demo} target="__blank">
                <Button variant="secondary" size="sm">
                  Live Demo
                  <RxExternalLink className="text-2xl" />
                </Button>
              </Link>
            </div>

            <div className="mb-24 flex md:mb-0 md:gap-6">
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

          <motion.div className="order-first">
            <Image
              src={image?.main?.src || "/main.webp"}
              alt="Project Image"
              width={1440}
              height={732}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    );
  };

  return odd ? <Wave>{renderProjects()}</Wave> : renderProjects();
};

export default Project;
