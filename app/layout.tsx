import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import FlowBiteNavBar from "./ui/navBar";
import FlowByteFooter from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloth Foundation",
  description: "Because giving is the ultimate form of ..."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <FlowBiteNavBar />
        {children}
        <FlowByteFooter />
      </body>
    </html>
  );
}
