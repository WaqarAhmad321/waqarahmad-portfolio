import { ReactElement } from "react";

export type ButtonProps = {
  title: string;
  variation: "primary" | "secondary";
  onClick?: () => void;
};

export type NavLinksProps = {
  href: string;
  title: string;
};

export type IconLinksProps = {
  href: string;
  icon: ReactElement;
};

export type SkillIconsProps = {
  src: string;
  title: string;
  width?: number;
  height?: number;
};
