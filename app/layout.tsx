import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en">
      <body
        className={`${inter.className} bg-mint-cream antialiased scrollbar-thin scrollbar-track-mint-cream scrollbar-thumb-slate-400`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
