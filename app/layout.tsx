import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SETI Institute",
  description: "SETI redesign. Created by Paris Osuch (parisosuch.com)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} flex flex-col h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
