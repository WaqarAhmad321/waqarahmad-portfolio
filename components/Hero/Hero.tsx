import { HeroText, HeroContact, HeroImage } from "@/components";

const Hero = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col px-4 pt-10 lg:flex-row lg:px-24 lg:pt-5 xl:pt-10 2xl:pt-20"
      id="home"
      style={{
        backgroundImage: `url('/background/blob-scene.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        minHeight: "100vh",
      }}
    >
      <div className="lg:ml-10">
        <HeroText />
        <HeroContact />
      </div>

      <HeroImage />
    </div>
  );
};

export default Hero;
