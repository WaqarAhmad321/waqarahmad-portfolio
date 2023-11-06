import { SkillIconsProps } from "@/types";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const skillIcons: SkillIconsProps[] = [
  { src: "/typescript.svg", title: "TypeScript" },
  //   { src: "/react.png", title: "React" },
  { src: "/nextjs.svg", title: "Next.js" },
  { src: "/javascript.svg", title: "JavaScript" },
  { src: "/tailwind-css.svg", title: "Tailwind CSS" },
];

const TechStack = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <div>
        <Image
          src="/tech_stack.svg"
          alt="tech stack"
          width={500}
          height={500}
        />
      </div>

      <div
        className={`flex flex-col w-full justify-center text-5xl ${roboto.className}`}
      >
        My Tech Stack
        {skillIcons.map((icon) => (
          <div className="flex flex-row" key={icon.src}>
            <p>{icon.title}</p>
            <Image
              src={icon.src}
              alt={`${icon.title} icon`}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
