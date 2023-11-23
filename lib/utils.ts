import { ClassValue, clsx } from "clsx";
import { Barlow, Inter, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const barlow = Barlow({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
});

export const inter = Inter({ weight: ["300"], subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
