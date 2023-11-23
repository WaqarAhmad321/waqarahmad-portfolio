import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva(
  "transition-colors duration-300 capitalize flex flex-row items-center justify-center gap-2 font-bold rounded-md",
  {
    variants: {
      variant: {
        primary: "bg-indigo-500 text-[#F4FFFD] hover:bg-indigo-600 text-xl",
        secondary:
          "bg-[#16A394] text-black hover:bg-[#187367] w-40 xs:w-52 md:w-40 text-white shadow-md",
        outlined:
          "border border-indigo-500 text-indigo-500 ease-in-out md:ease-in hover:text-indigo-600 text-xl",
      },
      size: {
        sm: "p-1 md:p-2",
        md: "py-3 px-8",
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

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size, ...props }))}
    >
      {children}
    </button>
  );
};
export default Button;
