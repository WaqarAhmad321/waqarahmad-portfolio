"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Logo = () => {
  return (
    <Link href="/" className={`text-2xl font-extrabold ${poppins.className}`}>
      &lt;Waqar.<span className="text-[#2C73F8]">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
