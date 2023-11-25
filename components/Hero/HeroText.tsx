import { inter } from "@/lib/utils";
import React from "react";
import Balancer from "react-wrap-balancer";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="font-bold text-gray-900">
        <h1 className="text-4xl md:text-8xl">
          <Balancer>
            <span className="text-special">Hi, </span> I&apos;m Waqar
          </Balancer>
        </h1>

        <h2 className="mt-4 text-3xl md:text-5xl lg:mt-8">
          A Front-End Developer.
        </h2>
      </div>

      <p
        className={`font-e mt-4 w-full text-xl leading-8 lg:mt-8 lg:w-3/4 lg:text-2xl lg:leading-9 xl:w-2/3 ${inter.className}`}
      >
        <Balancer>
          I enjoy solving complex problems. Frequently praised as{" "}
          <span className="font-bold text-gray-700">detail-oriented</span> by my
          peers, I can be relied upon to help your company achieve its goals by
          providing sustainable and scalable solutions.
        </Balancer>
      </p>
    </div>
  );
};

export default HeroText;
