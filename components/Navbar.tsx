"use client";

import { Logo } from ".";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { NavLinksProps } from "@/lib";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: NavLinksProps[] = [
    { href: "/", title: "Home" },
    { href: "/", title: "Skills" },
    { href: "/", title: "Projects" },
    { href: "/", title: "About" },
    { href: "/", title: "Contact" },
  ];

  return (
    <>
      <nav
        className={`${poppins.className} sticky top-0 z-10 bg-background-white`}
      >
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
                    className="cursor-pointer transition-colors duration-300 ease-linear hover:text-secondary-red"
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
              <div className="h-screen space-y-2 px-2 pb-3 pl-4 pt-2 text-2xl sm:px-3 ">
                {links.map((link) => (
                  <div key={link.title}>
                    <Link
                      href={link.href}
                      className="block cursor-pointer transition-colors hover:text-secondary-red "
                    >
                      {link.title}
                    </Link>
                    <hr className="mt-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr className={`${isOpen ? "hidden" : ""} shadow-lg`} />
      </nav>
    </>
  );
};

export default Navbar;
