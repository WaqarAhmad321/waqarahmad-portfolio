import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsEnvelopeFill } from "react-icons/bs";
import { IconLinksProps } from "@/lib/types";
import Link from "next/link";
import { cn } from "@/utils/utils";

const icons: IconLinksProps[] = [
  {
    href: "https://github.com/WaqarAhmad321",
    icon: <RxGithubLogo />,
    title: "github",
  },
  {
    href: "https://www.linkedin.com/in/waqar-ahmad321/",
    icon: <RxLinkedinLogo />,
    title: "linkedIn",
  },
  {
    href: "mailto:codewithwaqarahmad@gmail.com",
    icon: <BsEnvelopeFill />,
    title: "Mail",
  },
];

const ContactIcons = ({ displayTitle }: { displayTitle?: boolean }) => {
  return (
    <>
      {icons.map((icon) => (
        <Link
          key={icon.href}
          href={icon.href}
          target="__blank"
          className={cn(
            "flex flex-row items-center",
            displayTitle ? "gap-5" : "gap-3",
          )}
          aria-label={`${icon.title} logo`}
          rel="noopener noreferrer"
        >
          <span className="text-4xl"> {icon.icon}</span>
          <span className="flex flex-row text-xl capitalize hover:text-blue-800">
            {displayTitle && icon.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default ContactIcons;
