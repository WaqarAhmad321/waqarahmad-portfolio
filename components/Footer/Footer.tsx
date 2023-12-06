import Image from "next/image";
import { ContactForm, ContactIcons } from "@/components";
import footerWaveImage from "@/public/background/footer-wave.svg";
import mailBallonsImage from "@/public/message-icon.svg";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="text-heading-color md:w-full">
      <Image
        src={footerWaveImage}
        priority={true}
        alt="Waves Image"
        className="h-52 md:h-96 md:w-full"
      />

      <div
        id="footer"
        className="m-4 flex flex-col gap-4 lg:flex-row lg:justify-around lg:gap-0"
      >
        <div className="flex flex-col gap-4 lg:gap-0">
          <h3 className="text-5xl font-bold text-heading-color">
            Connect through
          </h3>
          <div className="flex flex-row gap-4">
            <div className="flex flex-grow flex-col justify-center gap-6 lg:mt-8 lg:justify-normal lg:gap-4">
              <ContactIcons displayTitle={true} />
            </div>

            <div className="hidden xs:block lg:flex lg:items-center lg:justify-center">
              <Image
                src={mailBallonsImage}
                alt="A mail box flying through 3 baloons attacked to the top and a lot of small sized mails in the background"
                className="w-[20rem]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-5xl font-bold">Say Hi!</h3>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
