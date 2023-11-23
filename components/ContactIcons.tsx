import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { IconLinksProps } from "@/lib/types";
import Link from "next/link";
import { FC } from "react";

const icons: IconLinksProps[] = [
  {
    href: "https://github.com/WaqarAhmad321",
    icon: <RxGithubLogo />,
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/waqar-ahmad321/",
    icon: <RxLinkedinLogo />,
    title: "LinkedIn",
  },
  { href: "/", icon: <RxTwitterLogo />, title: "Twitter" },
];

const ContactIcons = ({ displayTitle }: { displayTitle?: boolean }) => {
  return (
    <>
      {icons.map((icon) => (
        <Link
          key={icon.href}
          href={icon.href}
          target="__blank"
          className="transition-colors hover:rounded-full"
        >
          {icon.icon}{" "}
          <span className="flex flex-row text-xl hover:text-blue-800">
            {displayTitle && icon.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default ContactIcons;
