import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Front from "@/components/Front";
import Footer from "@/components/Footer";

import "./globals.css";
import NavBar from "@/components/NavBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <NavBar />
          <Front />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
