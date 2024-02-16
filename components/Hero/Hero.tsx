import { HeroText, HeroContact, HeroImage } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="flex flex-col px-4 pt-10 lg:flex-row lg:px-24 lg:pt-5 xl:pt-10 2xl:pt-20">
        <div className="lg:ml-10">
          <HeroText />
          <HeroContact />
        </div>

        <HeroImage />
      </div>
      <Image
        src="https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-images/um7qxuk1z7gn1wfxrivk"
        alt="blob scene"
        fill
        className="absolute -z-10 object-cover"
        priority
        fetchPriority="high"
      />
    </section>
  );
};

export default Hero;
