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
    <html lang="en" className="!scroll-smoot">
      <body
        className={`${inter.className} bg-mint-cream scrollbar-thin scrollbar-track-mint-cream scrollbar-thumb-slate-400 `}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
