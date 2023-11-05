export type LinksProps = {
  href: string;
  title: string;
};

export type ButtonProps = {
  title: string;
  variation: "primary" | "secondary";
  onClick?: () => void;
};
