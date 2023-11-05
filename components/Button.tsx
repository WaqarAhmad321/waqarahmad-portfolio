import { ButtonProps } from "@/types";
import React from "react";

const Buttons = ({ title, variation }: ButtonProps) => {
  const variations = {
    primary: "rounded-sm bg-dark-grey p-5 capitalize text-white",
    secondary:
      "rounded-sm border border-secondary-red p-5 capitalize  text-secondary-red transition-colors duration-300 ease-in hover:bg-secondary-red hover:text-white",
  };

  return (
    <button
      className={
        variation === "primary" ? variations.primary : variations.secondary
      }
    >
      {title}
    </button>
  );
};

export default Buttons;
