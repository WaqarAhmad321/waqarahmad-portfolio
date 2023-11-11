import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waqar Ahmad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!smooth-scroll">
      <body
        className={`${inter.className} bg-mint-cream scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-mint-cream `}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
