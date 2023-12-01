import { HeroText, HeroContact, HeroImage } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen min-h-screen flex-col px-4 pt-10 lg:flex-row lg:px-24 lg:pt-20"
      id="home"
    >
      <Image
        src="/background/blob-scene.svg"
        fill={true}
        objectFit="cover"
        alt="blob-scene"
        priority={true}
      />
      <div className="z-10 lg:ml-10">
        <HeroText />
        <HeroContact />
      </div>

      <HeroImage />
    </div>
  );
};

export default Hero;
