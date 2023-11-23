import Image from "next/image";
import logos from "@/lib/logos";
import coderImage from "@/public/coder.svg";
import { TechStackProps } from "@/lib/types";

import TechIcons from "./TechIcons";
import { FC } from "react";

const TechStack: FC = () => {
  const iconsArray: TechStackProps[] = [
    logos.typescript,
    logos.react,
    logos.nextjs,
    logos.javascript,
    logos.tailwind,
    logos.reactQuery,
    logos.supabase,
    logos.redux,
    logos.reactRouter,
    logos.git,
    logos.framerMotion,
    logos.css,
  ];

  return (
    <div id="techstack">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full text-center text-6xl font-light leading-snug">
          <h2 className="text-center font-bold text-gray-900">My Tech Stack</h2>
          <div className="lg:ml-26 mt-5 grid grid-cols-4 lg:grid lg:grid-cols-6">
            {iconsArray.map((icon, index) => (
              <TechIcons
                index={index}
                label={icon.label}
                src={icon.src}
                key={icon.label}
                displayLabel={true}
              />
            ))}
          </div>
        </div>
        <div className="order-last mb-10 mt-4 md:order-first md:mb-0">
          <Image
            src={coderImage}
            priority
            width={1144}
            height={617}
            alt="A coder having headphones placed between his neck coding on computer placed on table with github's developers activity in background"
            className="w-[43.75rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
