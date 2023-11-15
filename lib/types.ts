import { ReactElement } from "react";

export type TechIconsProps = {
  label?: string;
  src: string;
  width: number;
  height: number;
};

export type IconLinksProps = {
  href: string;
  icon: ReactElement;
  title: string;
};
