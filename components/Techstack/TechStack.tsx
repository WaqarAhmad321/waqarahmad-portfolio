import Image from "next/image";
import logos from "@/lib/logos";
import { TechIconsProps } from "@/lib/types";
import coderImage from "@/public/coder.svg";
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
    logos.framerMotion,
    logos.css,
  ];

  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className={`w-full text-center text-6xl font-light leading-snug`}>
        <h2 className="text-center">My Tech Stack</h2>
        <div className="mt-5 grid grid-cols-4 lg:ml-36 lg:grid lg:grid-cols-6">
          {iconsArray.map((icon, index) => (
            <TechIcons
              index={index}
              label={icon.label}
              src={icon.src}
              width={icon.width}
              height={icon.height}
              key={icon.label}
            />
          ))}
        </div>
      </div>
      <div className="order-last mb-10 mt-4 md:order-first md:mb-0">
        <Image
          src={coderImage}
          priority
          alt="A coder having headphones placed between his neck coding on computer placed on table with github's developers activity in background"
          className="w-[43.75rem]"
        />
      </div>
    </div>
  );
};

export default TechStack;
