import Image from "next/image";
import React from "react";
import heroImage from "@/public/hero_image.png";

const HeroImage = () => {
  return (
    <div className="mt-10 hidden lg:mt-0 xl:block">
      <Image
        src={heroImage}
        priority
        alt="hero image"
        loading="eager"
        width={3840}
        height={3840}
        className="animate-bounc w-[80rem] animate-delay-[3000ms] animate-normal animate-duration-[8000ms] animate-infinite"
      />
    </div>
  );
};

export default HeroImage;
