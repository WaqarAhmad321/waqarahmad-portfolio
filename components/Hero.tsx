// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//   return (
//     <section className="mx-auto mt-20 flex max-w-[1440px] gap-10">
//       <div className="ml-4 2xl:ml-10">
//         <div className="text-5xl">
//           <h1>
//             <span className="text-secondary-red">Hi,</span> I&apos;m Waqar
//           </h1>
//           <h2 className="mt-8">A Front-End Developer.</h2>
//           <p className="mt-4 w-full text-lg font-light leading-8 text-light-grey md:h-[169px] md:w-[535px]">
//             I enjoy solving complex problems. Frequently praised as
//             detail-oriented by my peers, I can be relied upon to help your
//             company achieve its goals by providing sustainable and scalable
//             solutions.
//           </p>
//         </div>

//         <div className="flex gap-4 mt-6">
//           <Button title="Get in touch" variation="primary" />
//           <Button title="See my work" variation="secondary" />
//         </div>
//       </div>

//       <div className="">
//         <Image
//           src="/hero_image.png"
//           priority
//           quality={100}
//           width={400}
//           height={400}
//           alt="hero image"
//           className="hidden lg:block "
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import Button from "./Button";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import Link from "next/link";
import { IconLinksProps } from "@/types";

const icons: IconLinksProps[] = [
  { href: "https://github.com/WaqarAhmad321", icon: <RxGithubLogo /> },
  {
    href: "https://www.linkedin.com/in/waqar-ahmad321/",
    icon: <RxLinkedinLogo />,
  },
  { href: "/", icon: <RxTwitterLogo /> },
];

const Hero = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-7xl flex-col gap-10 px-4 lg:mt-20 lg:flex-row lg:px-0">
      <div className="lg:ml-10">
        <div className="text-4xl lg:text-5xl">
          <h1>
            <span className="text-secondary-red">Hi,</span> I&apos;m Waqar
          </h1>
          <h2 className="mt-4 text-3xl lg:mt-8 lg:text-5xl">
            A Front-End Developer.
          </h2>
          <p className="mt-4 w-full text-base font-light leading-6 text-light-grey lg:mt-8 lg:w-3/4 lg:text-lg lg:leading-8 xl:w-2/3">
            I enjoy solving complex problems. Frequently praised as
            detail-oriented by my peers, I can be relied upon to help your
            company achieve its goals by providing sustainable and scalable
            solutions.
          </p>
        </div>

        <div className="mt-5 flex flex-row gap-5 text-4xl ">
          {icons.map((icon) => (
            <Link key={icon.href} href={icon.href} target="__blank">
              {icon.icon}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <Button title="Get in touch" variation="primary" />
          <Button title="<> See my work" variation="secondary" />
        </div>
      </div>

      <div className="mt-10 hidden lg:ml-auto lg:mt-0 lg:block">
        <Image
          src="/hero_image.png"
          priority
          quality={100}
          width={800}
          height={800}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
