import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Waqar Ahmad - Web devloper",
  description:
    "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
  metadataBase: new URL("https://waqarcodes.tech/"),
  openGraph: {
    type: "website",
    url: "https://waqarcodes.tech/",
    title: "Waqar Ahmad - Web devloper",
    description:
      "Portfolio of Waqar Ahmad, a professional web developer specializing in Next.js, React, and TypeScript",
    images: [
      {
        url: "https://waqarcodes.tech/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  // twitter: {
  //   site: "@waqar_ahmad16",
  // },
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
