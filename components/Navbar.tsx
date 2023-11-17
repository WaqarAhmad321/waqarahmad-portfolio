"use client";

import { useState } from "react";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Logo } from ".";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

type NavLinksProps = {
  href: string;
  title: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: NavLinksProps[] = [
    { href: "/", title: "Home" },
    { href: "/", title: "Skills" },
    { href: "/", title: "Projects" },
    { href: "/", title: "Contact Me" },
  ];

  return (
    <motion.nav
      className={`${poppins.className} sticky top-0 z-10 bg-mint-cream`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div
        className="text-dark-grey mx-auto w-full px-4 sm:px-6 lg:px-8
      "
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-dark-grey ml-4 flex items-center space-x-6 text-2xl">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="cursor-pointer transition-colors ease-linear hover:text-red-crayola"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center text-2xl md:hidden">
            <button
              className="inline-flex items-center justify-center p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
          </div>
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
                  <Link
                    href={link.href}
                    className="block cursor-pointer transition-colors hover:text-red-crayola"
                  >
                    {link.title}
                  </Link>
                  <hr className="mt-2" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <hr className={`${isOpen ? "hidden" : ""} shadow-lg`} />
    </motion.nav>
  );
};

export default Navbar;
