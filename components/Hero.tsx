"use client";

import Balancer from "react-wrap-balancer";

import Image from "next/image";
import heroImage from "@/public/hero-image.svg";
import { Button, ContactIcons } from "@/components";
import { RxArrowDown } from "react-icons/rx";
import { motion } from "framer-motion";

const Hero = () => {
  const path = "/background/blob-scene.svg";

  return (
    <motion.header
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div
        className="text-dark-grey flex h-screen flex-col px-4 pt-10 lg:flex-row lg:gap-10 lg:px-36 lg:pt-20"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          minHeight: "100vh",
        }}
      >
        <div className="lg:ml-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl">
              <Balancer>
                <span className="text-red-crayola">Hi,</span> I&apos;m Waqar
              </Balancer>
            </h1>

            <h2 className="mt-4 text-3xl lg:mt-8 lg:text-5xl">
              A Front-End Developer.
            </h2>

            <p className="text-grey mt-4 w-full text-base font-light leading-6 lg:mt-8 lg:w-3/4 lg:text-lg lg:leading-8 xl:w-2/3">
              <Balancer>
                I enjoy solving complex problems. Frequently praised as
                detail-oriented by my peers, I can be relied upon to help your
                company achieve its goals by providing sustainable and scalable
                solutions.
              </Balancer>
            </p>
          </div>

          <div className="mt-5 flex flex-row gap-5 text-4xl">
            <ContactIcons />
          </div>

          <div className="mt-6 flex gap-4">
            <Button variant="primary" size="lg">
              Contact Me
            </Button>
            <Button variant="outlined" size="lg">
              See my work
            </Button>
          </div>
        </div>

        <div className="mt-10 hidden lg:mt-0 xl:block">
          <Image
            src={heroImage}
            priority
            quality={100}
            alt="hero image"
            className="h-25 w-[75rem]"
          />
        </div>
        <div className="flex h-36 items-end justify-end text-2xl">
          <RxArrowDown />
        </div>
      </div>
    </motion.header>
  );
};

export default Hero;
