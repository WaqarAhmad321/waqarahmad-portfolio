"use client";

import { Poppins } from "next/font/google";
import { Logo } from ".";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { NavLinksProps } from "@/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: NavLinksProps[] = [
    { href: "/", title: "Home" },
    { href: "/", title: "About" },
    { href: "/", title: "Skills" },
    { href: "/", title: "Projects" },
    { href: "/", title: "Contact" },
  ];

  return (
    <>
      <nav className={`${poppins.className}`}>
        <div
          className="mx-auto w-full px-4 text-dark-grey sm:px-6 lg:px-8
      "
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 text-2xl text-dark-grey">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.title}
                    className="cursor-pointer transition-colors hover:text-secondary-red"
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
            <div className="md:hidden">
              <div className="space-y-2 px-2 pb-3 pl-4 pt-2 sm:px-3 ">
                {links.map((link) => (
                  <>
                    <Link
                      href={link.href}
                      key={link.title}
                      className="block cursor-pointer transition-colors hover:text-secondary-red "
                    >
                      {link.title}
                    </Link>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      <hr className={`${isOpen ? "hidden" : ""}`} />
    </>
  );
};

export default Navbar;
