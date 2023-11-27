import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Waqar Ahmad - Web devloper",
  description:
    "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
  metadataBase: new URL("https://waqarcodes.tech/"),
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
