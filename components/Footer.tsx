import Image from "next/image";
import { ContactIcons } from ".";
import footerWaveImage from "@/public/background/footer-wave-dark.svg";
import mailBallonsImage from "@/public/message-icon.svg";

const Footer = () => {
  return (
    <footer>
      <Image
        src={footerWaveImage}
        alt="Waves Image"
        className="h-96 md:w-full"
      />

      <div className="flex w-screen flex-col md:flex-row md:justify-around">
        <div className="flex flex-col">
          <h3 className="text-5xl">Connect through</h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <ContactIcons displayTitle={true} />
            </div>

            <div className="hidden sm:block">
              <Image
                src={mailBallonsImage}
                alt="A mail box flying through 3 baloons attacked to the top and a lot of small sized mails in the background"
                className="h-[12.5rem] w-[12.5rem]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-5xl">Say Hi!</h3>
          <form className="mt-4 flex flex-col">
            <input type="text" className="max-w-7xl border border-black" />
            <input type="text" className="max-w-7xl border border-black" />
            <input type="text" className="max-w-7xl border border-black" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
