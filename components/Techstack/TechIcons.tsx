"use client";

import { TechIconProps } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    scale: 0,
  },
  animate: (index: number) => ({
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.05 * index,
      ease: "linear",
    },
  }),
};

const TechIcons = ({ index, label, src, displayLabel }: TechIconProps) => {
  const renderIcons = () => {
    return (
      <div className="group m-2 flex flex-col items-center">
        <p
          className={`mb-2 mt-2 whitespace-nowrap text-xs sm:text-sm ${
            displayLabel
              ? ""
              : "invisible transition-transform group-hover:visible"
          }`}
        >
          {label}
        </p>

        <div className="flex h-16 w-16 items-center justify-center">
          <Image
            src={src}
            alt={`${label} icon`}
            width={60}
            height={60}
            className={`h-auto ${
              label?.toLowerCase() === "css" ? "w-11 sm:w-14" : "w-12 sm:w-20"
            } ${
              label?.toLowerCase() === "tailwind"
                ? "w-24 sm:w-32"
                : "w-12 sm:w-20"
            } transition-transform group-hover:scale-125`}
          />
        </div>
      </div>
    );
  };

  if (displayLabel)
    return (
      <motion.div
        className="m-2 flex flex-col items-center"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
      >
        {renderIcons()}
      </motion.div>
    );

  return renderIcons();
};

export default TechIcons;
