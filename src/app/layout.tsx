import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/ui/sections/Header";
import { Footer } from "@/ui/sections/Footer";
import METADATA from "@/constants/metadata";

const chakraPetch = localFont({
  src:"./fonts/ChakraPetch-Regular.ttf",
  variable: "--font-chakra-petch",
  weight: "400",
})

const chakraBold = localFont({
  src:"./fonts/ChakraPetch-Bold.ttf",
  variable: "--font-chakra-petch-bold",
  weight: "700",
});

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body
        className={`${chakraPetch.variable} ${chakraBold.variable} antialiased w-full overscroll-none overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
