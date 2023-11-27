import { cn, poppins } from "@/utils/utils";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold", poppins.className)}>
      &lt;Waqar.<span className="text-special">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
