import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-dark-grey text-2xl font-bold">
      &lt;Waqar.<span className="text-secondary-red">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
