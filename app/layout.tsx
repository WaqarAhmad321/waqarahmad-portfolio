import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";
import { barlow } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "WaqarCodes",
  description:
    "Hi, I'm Waqar. A Front-End Developer. I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.",
  creator: "Waqar Ahmad",
  verification: {
    google: "r1BffMNTeOAvTrQdTXrrq9fEj1XHUaYQCiI8ltjQ2g8",
  },
  category: "Portfolio",
  keywords: ["Waqar codes", "waqarcodes", "Waqar Ahmad"],
  openGraph: {
    type: "website",
    title: "Waqar Ahmad - Web devloper",
    description:
      "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
    locale: "en_IE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7FAFC] antialiased">
        <Navbar />

        {children}
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
