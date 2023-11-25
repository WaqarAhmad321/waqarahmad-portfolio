import Image from "next/image";
import React from "react";
import heroImage from "@/public/hero-image.png";

const HeroImage = () => {
  return (
    <div className="hidden lg:mt-0 xl:block">
      <Image
        src={heroImage}
        priority
        alt="hero image"
        loading="eager"
        width={1920}
        height={1920}
        className="animate-updown w-[90rem]"
      />
    </div>
  );
};

export default HeroImage;
