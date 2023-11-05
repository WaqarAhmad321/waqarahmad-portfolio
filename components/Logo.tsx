import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-dark-grey">
      &lt;Waqar.<span className="text-secondary-red">dev</span> /&gt;
    </Link>
  );
};

export default Logo;
