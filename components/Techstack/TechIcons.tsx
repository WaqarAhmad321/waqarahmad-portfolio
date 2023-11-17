"use client";

import { TechIconsProps } from "@/lib/types";
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
      delay: 0.07 * index,
      ease: "linear",
    },
  }),
};

const TechIcons = ({ index, label, src, width, height }: TechIconsProps) => {
  const renderIcons = () => {
    return (
      <div className="m-2 flex flex-col items-center">
        <p className="mb-2 mt-2 whitespace-nowrap text-sm">{label}</p>

        <Image
          src={src}
          alt={`${label} icon`}
          width={100}
          height={100}
          className={`transition-transform hover:scale-125`}
        />
      </div>
    );
  };

  if (label)
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
