import { SkillIconsProps } from "@/types";
import Image from "next/image";
import React from "react";

const skillIcons: SkillIconsProps[] = [
  { src: "/typescript.svg", title: "TypeScript", width: 50, height: 50 },
  { src: "/react.png", title: "React", width: 58, height: 50 },
  { src: "/nextjs.svg", title: "Next.js", width: 80, height: 50 },
  { src: "/javascript.svg", title: "JavaScript", width: 50, height: 50 },
  { src: "/tailwind-css.svg", title: "Tailwind CSS", width: 78, height: 100 },
  { src: "/react-query.svg", title: "React Query", width: 50, height: 30 },
  { src: "/html.svg", title: "HTML", width: 55, height: 30 },
  { src: "/css.svg", title: "CSS", width: 55, height: 30 },
    // { src: "/css.svg", title: "CSS", width: 55, height: 30 },
    // { src: "/css.svg", title: "CSS", width: 55, height: 30 },
    // { src: "/css.svg", title: "CSS", width: 55, height: 30 },
    // { src: "/css.svg", title: "CSS", width: 55, height: 30 },
];

const TechStack = () => {
  return (
    <div className="flex flex-col items-center md:flex-row  md:gap-0">
      <div className="order-last mb-10 mt-4 md:order-first md:mb-0 ">
        <Image
          src="/coder.svg"
          alt="tech stack"
          width={700}
          height={700}
          className="block"
        />
      </div>

      <div className={`w-full text-center text-5xl font-light leading-snug`}>
        My Tech Stack
        <div className="mt-5 grid grid-cols-4">
          {skillIcons.map((icon) => (
            <div className="m-2 flex flex-col items-center" key={icon.src}>
              <p className="font-extrathin mb-2 mt-2 whitespace-nowrap text-sm text-light-grey">
                {icon.title}
              </p>
              <Image
                src={icon.src}
                alt={`${icon.title} icon`}
                width={icon.width}
                height={icon.height}
                className="duration-100 ease-out hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
