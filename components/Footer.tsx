import Image from "next/image";
import { ContactIcons } from ".";

const Footer = () => {
  return (
    <div className="flex w-screen flex-col bg-wave-color md:flex-row md:justify-around">
      <div className="flex flex-col">
        <h3 className="text-5xl">Connect through</h3>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <ContactIcons displayTitle={true} />
          </div>

          <div className="hidden sm:block">
            <Image
              src="/message-icon.svg"
              alt="A mail box flying through 3 baloons attacked to the top and a lot of small sized mails in the background"
              width={200}
              height={200}
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
  );
};

export default Footer;
