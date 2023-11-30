import { inter } from "@/lib/fonts";
import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="font-bold text-gray-900">
        <h1 className="text-5xl sm:text-6xl md:text-8xl">
          <span className="text-special">Hi, </span> I&apos;m Waqar
        </h1>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:mt-8">
          A Front-End Developer.
        </h2>
      </div>

      <p
        className={`font-e mt-4 w-full text-xl leading-8 lg:mt-8 lg:w-3/4 lg:text-2xl lg:leading-9 xl:w-2/3 ${inter.className}`}
      >
        I enjoy solving complex problems. Frequently praised as detail-oriented
        by my peers, I can be relied upon to help your company achieve its goals
        by providing sustainable and scalable solutions.
      </p>
    </div>
  );
};

export default HeroText;
