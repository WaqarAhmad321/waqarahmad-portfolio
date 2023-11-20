"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";

import { Poppins } from "next/font/google";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { Logo } from ".";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  const links: NavLinksProps[] = [
    { href: "home", title: "Home" },
    { href: "techstack", title: "Skills" },
    { href: "projects", title: "Projects" },
    { href: "footer", title: "Contact Me" },
  ];

  return (
    <header className="sticky top-0 z-10">
      <nav className={`${poppins.className} bg-mint-cream`}>
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
                  <button
                    key={link.title}
                    onClick={() => {
                      if (pathname === "/") {
                        scroller.scrollTo(link.href, {
                          smooth: "easeInOutQuad",
                          offset: -100,
                          duration: 800,
                          spy: true,
                        });
                      } else {
                        router.push("/");

                        scroller.scrollTo(link.href, {
                          delay: 300,
                          smooth: "easeInOutQuad",
                        });
                      }
                    }}
                    className="duration-250 cursor-pointer transition-colors ease-linear hover:text-red-crayola"
                  >
                    {link.title}
                  </button>
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
                    <ScrollLink
                      to={link.href}
                      key={link.title}
                      smooth={true}
                      spy={true}
                      offset={-720}
                      duration={800}
                      className="duration-250 cursor-pointer transition-colors ease-linear hover:text-red-crayola"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </ScrollLink>
                    <hr className="mt-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        <hr className={`${isOpen && "hidden"} shadow-lg`} />
      </nav>
    </header>
  );
};

export default Navbar;
