"use client";

import { Poppins } from "next/font/google";
import { Logo } from ".";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400"],
  preload: false,
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`${poppins.className}`}>
        <div
          className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-dark-grey 
      ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 text-2xl text-dark-grey">
                <Link
                  href="/"
                  className="hover:text-secondary-red transition-colors cursor-pointer ">
                  Home
                </Link>
                <Link
                  href="/"
                  className="hover:text-secondary-red transition-colors cursor-pointer">
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:text-secondary-red transition-colors cursor-pointer">
                  Skills
                </Link>
                <Link
                  href="/"
                  className="hover:text-secondary-red transition-colors cursor-pointer">
                  Projects
                </Link>
                <Link
                  href="/"
                  className="hover:text-secondary-red transition-colors cursor-pointer">
                  Contact
                </Link>
              </div>
            </div>

            <div className="md:hidden text-2xl flex items-center">
              <button
                className="inline-flex items-center justify-center p-2"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pb-3 pt-2 pl-4 space-y-1 sm:px-3">
              <Link
                href="/"
                className="hover:text-secondary-red block transition-colors cursor-pointer ">
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-secondary-red block transition-colors cursor-pointer">
                About
              </Link>
              <Link
                href="/"
                className="hover:text-secondary-red block transition-colors cursor-pointer">
                Skills
              </Link>
              <Link
                href="/"
                className="hover:text-secondary-red block transition-colors cursor-pointer">
                Projects
              </Link>
              <Link
                href="/"
                className="hover:text-secondary-red block transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
