import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Waqar Ahmad - Web devloper",
  description:
    "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
  creator: "Waqar Ahmad",
  verification: {
    google: "r1BffMNTeOAvTrQdTXrrq9fEj1XHUaYQCiI8ltjQ2g8",
  },
  category: "Portfolio",
  keywords: [
    "Waqar Ahmad",
    "Waqar",
    "Ahmad",
    "Waqar Ahmad Portfolio",
    "frontend developer",
    "frontend developer",
    "React developer",
  ],
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
