import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";

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
      <body className="bg-[#F7FAFC] text-gray-700 antialiased">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
