import { Barlow, Inter } from "next/font/google";

export const barlow = Barlow({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
});

export const inter = Inter({ weight: ["300"], subsets: ["latin"] });
