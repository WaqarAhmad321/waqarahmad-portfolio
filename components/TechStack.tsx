import Image from "next/image";
import { TechIconsProps } from "@/lib";
import TechIcons from "./TechIcons";
import logos from "@/lib/logos";

const TechStack = () => {
  const iconsArray: TechIconsProps[] = [
    logos.typescript,
    logos.react,
    logos.nextjs,
    logos.javascript,
    logos.tailwind,
    logos.reactQuery,
    logos.html,
    logos.css,
    logos.supabase,
    logos.redux,
    logos.reactRouter,
    logos.git,
  ];

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
        <div className="mt-5 grid grid-cols-6">
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
