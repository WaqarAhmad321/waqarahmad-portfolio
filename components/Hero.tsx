"use client";

import Balancer from "react-wrap-balancer";

import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero-image.svg";
import { Button, ContactIcons, ScrollLink } from "@/components";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ weight: ["300"], subsets: ["latin"] });

const Hero = () => {
  const path = "/background/blob-scene.svg";

  return (
    <motion.div
      className="flex h-screen flex-col px-4 pt-10 lg:flex-row lg:px-24 lg:pt-20"
      style={{
        backgroundImage: `url(${path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        minHeight: "100vh",
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="lg:ml-10">
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
            className={`font-e mt-4 w-full text-xl leading-9 lg:mt-8 lg:w-3/4 lg:text-2xl lg:leading-9 xl:w-2/3 ${inter.className}`}
          >
            <Balancer>
              I enjoy solving complex problems. Frequently praised as{" "}
              <span className="font-bold text-gray-700">detail-oriented</span>{" "}
              by my peers, I can be relied upon to help your company achieve its
              goals by providing sustainable and scalable solutions.
            </Balancer>
          </p>
        </div>

        <div className="mt-5 flex flex-row gap-5 text-4xl">
          <ContactIcons />
        </div>

        <div className="mt-6 flex gap-4">
          <ScrollLink href="#footer">
            <Button variant="primary" size="lg">
              Contact Me
            </Button>
          </ScrollLink>

          <Link href="projects">
            <Button variant="outlined" size="lg">
              See my work
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 hidden lg:mt-0 xl:block">
        <Image
          src={heroImage}
          width={152}
          height={101}
          priority
          alt="hero image"
          className="h-25 w-[75rem]"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
