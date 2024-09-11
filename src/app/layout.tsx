import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Endcorp",
  description: "Endcorp is a DePin adventure on solana that enables decentrailised verification of global sea surface temperatures driving the world's first decentralised climate insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh] bg-end-bg-black">{children}</body>
    </html>
  );
}
