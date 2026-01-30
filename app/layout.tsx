import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <--- Missing
import { Providers } from "@/components/Providers"; // <--- Missing
import '@rainbow-me/rainbowkit/styles.css'; // <--- Missing! Essential for wallet styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equinox | NFT Membership",
  description: "Unlock the world of creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> {/* <--- Wraps the whole app */}
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}