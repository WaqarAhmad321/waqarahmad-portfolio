import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Waqar Ahmad - Web Developer",
  description:
    "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
  metadataBase: new URL("https://waqarahmad-portfolio.vercel.app"),
  openGraph: {
    
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7FAFC] text-gray-700 antialiased">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
