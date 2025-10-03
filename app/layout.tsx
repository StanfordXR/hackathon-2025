import type { Metadata } from "next";
import localFont from "next/font/local";
import { Berkshire_Swash } from "next/font/google";
import {
  Orbitron,
  Aldrich,
  Open_Sans,
  Manrope,
  PT_Sans,
  PT_Sans_Caption,
  Kanit,
} from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aldrich",
});
const pt_sans = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pt_sans",
});
const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-berkshire",
});

export const metadata: Metadata = {
  title: "Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${aldrich.variable} ${pt_sans.variable} ${berkshire.variable} antialiased bg-black`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
