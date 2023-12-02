import { inter } from "@/lib/fonts";
import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="font-bold text-gray-900">
        <h1 className="text-5xl sm:text-6xl md:text-8xl">
          <span className="text-special">Hi, </span> I&apos;m Waqar
        </h1>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:mt-5 xl:mt-7 2xl:mt-8">
          A Front-End Developer.
        </h2>
      </div>

      <p
        className={`mt-4 w-full text-xl font-extralight leading-8 lg:mt-6 xl:mt-7 2xl:mt-8  lg:w-4/5 2xl:w-2/3 lg:text-xl lg:leading-7 xl:leading-8 2xl:text-2xl 2xl:leading-9 ${inter.className} text-gray-600`}
      >
        I enjoy solving problems. Being detailed-oriented and proficient in
        modern frontend technologies, I can be relied upon to help your company
        achieve its goals by providing sustainable and scalable solutions.
      </p>
    </div>
  );
};

export default HeroText;
