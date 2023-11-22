"use client";

import { TechIconProps } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    // frames: [0, 1],
    transition: {
      type: "spring",
      // delay: 0.05 * index,
      // ease: "linear",
    },
  }),
};

const TechIcons = ({ index, label, src, displayLabel }: TechIconProps) => {
  const renderIcons = () => {
    return (
      <div className="group m-2 flex flex-col items-center">
        <p
          className={cn(
            "mb-2 mt-2 whitespace-nowrap text-xs font-light sm:text-sm",
            displayLabel ||
              "invisible transition-transform group-hover:visible",
          )}
        >
          {label}
        </p>

        <motion.div
          className="flex h-16 w-16 items-center justify-center"
          animate={
            label?.toLowerCase() === "react"
              ? {
                  rotate: [0, 360],
                  transition: {
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                    repeatType: "loop",
                  },
                }
              : {}
          }
        >
          <Image
            src={src}
            alt={`${label} icon`}
            width={60}
            height={60}
            className={cn(
              "h-auto w-12 transition-transform group-hover:scale-125 sm:w-20",
              {
                "w-10 sm:w-14": label?.toLowerCase() === "css",
                "w-24 sm:w-32": label?.toLowerCase() === "tailwind",
              },
            )}
          />
        </motion.div>
      </div>
    );
  };

  return displayLabel ? (
    <motion.div
      className="m-2 flex flex-col items-center"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
    >
      {renderIcons()}
    </motion.div>
  ) : (
    renderIcons()
  );
};

export default TechIcons;
