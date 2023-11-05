import Image from "next/image";
import Buttons from "./Button";

const Hero = () => {
  return (
    <div className="mx-auto mt-20 flex max-w-[1440px] gap-10">
      <div className="ml-4 2xl:ml-10">
        <div className="text-5xl">
          <h1 className="">
            <span className="text-secondary-red">Hi,</span> I&apos;m Waqar
          </h1>
          <h2 className="mt-6">A Front-End Developer.</h2>
          <p className="mt-4 h-[169px] w-[535px] text-xl leading-8 text-light-grey">
            I enjoy solving complex problems. Frequently praised as
            detail-oriented by my peers, I can be relied upon to help your
            company achieve its goals by providing sustainable and scalable
            solutions.
          </p>
        </div>

        <div className="flex gap-4">
          <Buttons title="Get in touch" variation="primary" />
          <Buttons title="See my work" variation="secondary" />
        </div>
      </div>

      <div>
        <Image
          src="/hero_image.png"
          priority
          quality={100}
          width={400}
          height={400}
          alt="hero image"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
