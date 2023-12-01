import { HeroText, HeroContact, HeroImage } from "@/components";

const Hero = () => {
  const path = "/background/blob-scene.svg";

  return (
    <div
      className="bg-blob-image flex h-screen min-h-screen flex-col bg-cover bg-left bg-no-repeat px-4 pt-10 lg:flex-row lg:px-24 lg:pt-20"
      id="home"
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
