import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero_image.png";
import { Button, ContactIcons, ScrollLink } from "@/components";
import { inter } from "@/lib/utils";

export const Hero = () => {
  const path = "/background/blob-scene.svg";

  return (
    <div
      className="flex h-screen flex-col px-4 pt-10 lg:flex-row lg:px-24 lg:pt-20"
      id="home"
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
            <Button variant="primary" size="lg" aria-label="Contact Me button">
              Contact Me
            </Button>
          </ScrollLink>

          <Link href="projects">
            <Button
              variant="outlined"
              size="lg"
              className="focus:outline-4  focus:ring focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="See my work button"
            >
              See my work
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 hidden lg:mt-0 xl:block">
        {/* <div className="h-[50rem] w-[75rem]"> */}
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
      {/* </div> */}
    </div>
  );
};
