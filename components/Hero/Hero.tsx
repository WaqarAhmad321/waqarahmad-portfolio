import { HeroText, HeroContact, HeroImage } from "@/components";

const Hero = () => {
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
        <HeroText />
        <HeroContact />
      </div>

      <HeroImage />
    </div>
  );
};

export default Hero;
