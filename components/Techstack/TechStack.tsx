import Image from "next/image";
import logos from "@/lib/logos";
import { TechIconsProps } from "@/lib/types";

import TechIcons from "./TechIcons";

const TechStack = () => {
  const iconsArray: TechIconsProps[] = [
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
    logos.html,
    logos.css,
  ];

  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="order-last mb-10 mt-4 md:order-first md:mb-0">
        <Image
          src="/coder.svg"
          priority
          alt="A coder having headphones placed between his neck coding on computer placed on table with github's developers activity in background"
          width={700}
          height={700}
          className=""
        />
      </div>

      <div className={`w-full text-center text-6xl font-light leading-snug`}>
        <h1 className="text-center">My Tech Stack</h1>
        <div className="mt-5 lg:ml-36 grid grid-cols-4 lg:grid lg:grid-cols-6">
          {iconsArray.map((icon) => (
            <TechIcons
              label={icon.label}
              src={icon.src}
              width={icon.width}
              height={icon.height}
              key={icon.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
