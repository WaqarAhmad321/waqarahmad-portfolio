import { ReactElement } from "react";

export type NavLinksProps = {
  href: string;
  title: string;
};

export type IconLinksProps = {
  href: string;
  icon: ReactElement;
};

export type TechIconsProps = {
  label: string;
  src: string;
  width: number;
  height: number;
};
