import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-extrabold text-oxford-blue">
      &lt;Waqar.<span className="text-red-crayola">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
