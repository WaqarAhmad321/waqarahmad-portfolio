import Image from "next/image";
import { Button, ContactIcons } from ".";
import footerWaveImage from "@/public/background/footer-wave.svg";
import mailBallonsImage from "@/public/message-icon.svg";
import { FC } from "react";
import { LuSendHorizonal } from "react-icons/lu";
const Footer: FC = () => {
  return (
    <footer className="md:w-full">
      <Image
        src={footerWaveImage}
        alt="Waves Image"
        className="h-52 md:h-96 md:w-full"
      />

      <div className="m-4 flex flex-col gap-4 lg:flex-row lg:justify-around lg:gap-0">
        <div className="flex flex-col gap-4 lg:gap-0">
          <h3 className="text-5xl font-bold">Connect through</h3>
          <div className="flex flex-row gap-4">
            <div className="flex flex-grow flex-col justify-center gap-6 lg:gap-4">
              <ContactIcons displayTitle={true} />
            </div>

            <div className="hidden sm:block lg:flex lg:items-center lg:justify-center">
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
          <form className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Name"
              className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
            />
            <input
              type="email"
              placeholder="Email, So I can get back to you"
              required
              className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
            />
            <textarea
              required
              placeholder="Message"
              className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem]"
              rows={5}
            />

            <Button
              variant="outlined"
              size="sm"
              className="flex w-28 items-center justify-center"
            >
              Send <LuSendHorizonal />
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
