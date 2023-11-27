"use client";

import { FC } from "react";
import { scroller } from "react-scroll";
import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  href: string;
  title: string;
};

type NavItemProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const links: NavLinksProps[] = [
  { href: "home", title: "Home" },
  { href: "techstack", title: "Skills" },
  { href: "projects", title: "Projects" },
  { href: "footer", title: "Contact Me" },
];

const NavItems: FC<NavItemProps> = ({ setIsOpen, isOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <div key={link.title}>
          <button
            onClick={() => {
              setIsOpen(false);
              if (pathname === "/") {
                scroller.scrollTo(link.href, {
                  smooth: "easeInOutQuad",
                  // duration: 800,
                  // spy: true,
                  offset: isOpen === true ? -100 : -1000,
                });
              } else {
                scroller.scrollTo(`/${link.href}`, {
                  delay: 300,
                  smooth: "easeInOutQuad",
                });
              }
            }}
            className="duration-250 cursor-pointer transition-colors ease-linear hover:text-indigo-600"
            type="button"
            aria-current={pathname === `/${link.href}` && "page"}
          >
            {link.title}
          </button>
          <hr className={cn("shadow-lg", isOpen || "hidden")} />
        </div>
      ))}
    </>
  );
};

export default NavItems;
