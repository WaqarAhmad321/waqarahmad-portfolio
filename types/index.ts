import { ReactElement } from "react";

export type NavLinksProps = {
  href: string;
  title: string;
};

export type IconLinksProps = {
  href: string;
  icon: ReactElement;
};

export type ButtonProps = {
  title: string;
  variation: "primary" | "secondary";
  onClick?: () => void;
};
