"use client";

import { FC, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/utils";
import { barlow } from "@/lib/fonts";
import { Logo, NavItems } from "@/components";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={`${barlow.className} sticky top-0 z-10 text-gray-800`}>
      <nav className="bg-white">
        <div
          className="mx-auto w-full px-4 sm:px-6 lg:px-8
        "
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6 text-2xl">
                <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
              </div>
            </div>

            <div className="flex items-center text-2xl md:hidden">
              <motion.button
                className="inline-flex items-center justify-center p-2 will-change-transform md:will-change-auto"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                animate={{ rotate: isOpen ? 90 : 0 }}
                aria-label="navigation menu"
              >
                {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
              </motion.button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              className="will-change-transform md:hidden md:will-change-auto"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="h-screen space-y-2 px-2 pb-3 pl-4 pt-2 text-2xl sm:px-3">
                <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
              </div>
            </motion.div>
          )}
        </div>
        <hr className={cn("shadow-lg", isOpen && "hidden")} />
      </nav>
    </header>
  );
};

export default Navbar;
