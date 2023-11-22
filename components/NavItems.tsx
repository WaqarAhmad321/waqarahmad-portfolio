"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import Router from "next/router";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import NavItem from "./NavItem";

type NavLinksProps = {
  href: string;
  title: string;
};

const NavItems = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: NavLinksProps[] = [
    { href: "home", title: "Home" },
    { href: "techstack", title: "Skills" },
    { href: "projects", title: "Projects" },
    { href: "footer", title: "Contact Me" },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-6 text-2xl">
          {links.map((link) => (
            <NavItem link={link} key={link.title} />
          ))}
        </div>
      </div>

      <div className="flex items-center text-2xl md:hidden">
        <motion.button
          className="inline-flex items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="h-screen space-y-2 px-2 pb-3 pl-4 pt-2 text-2xl sm:px-3">
            {links.map((link) => (
              <div key={link.title}>
                <NavItem link={link} />
                <hr className="mt-2" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <hr className={cn("shadow-lg", isOpen && "hidden")} />
    </>
  );
};

export default NavItems;
