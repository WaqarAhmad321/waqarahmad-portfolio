import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { scroller } from "react-scroll";

const NavItem = ({ link }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
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
          router.push(`/${link.href}`);
        }
      }}
      className="duration-250 cursor-pointer transition-colors ease-linear hover:text-indigo-600"
    >
      {link.title}
    </button>
  );
};

export default NavItem;
