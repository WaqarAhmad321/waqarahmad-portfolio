import { Barlow } from "next/font/google";
import { Logo } from ".";
import NavItems from "./NavItems";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <header className={`${barlow.className} sticky top-0 z-10 text-gray-800`}>
      <nav className="bg-white">
        <div
          className="mx-auto w-full px-4 sm:px-6 lg:px-8
        "
        >
          <div className="flex h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>

            <NavItems />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
