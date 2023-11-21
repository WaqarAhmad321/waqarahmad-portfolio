import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "transition-colors duration-300 capitalize flex flex-row items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary: "bg-oxford-blue rounded-sm text-[#F4FFFD] hover:bg-[#0B2447]",
        secondary:
          "bg-[#F9DC5C] rounded-full text-black hover:bg-[#ffe77b] w-40 xs:w-52 md:w-40",
        outlined:
          "border border-red-crayola rounded-sm text-red-crayola ease-in-out md:ease-in hover:bg-red-crayola hover:text-white",
      },
      size: {
        sm: "p-1 md:p-2",
        lg: "p-3 md:p-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size, ...props }))}
    >
      {children}
    </button>
  );
}
