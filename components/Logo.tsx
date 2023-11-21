import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Logo = () => {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold", poppins.className)}>
      &lt;Waqar.<span className="text-special">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
