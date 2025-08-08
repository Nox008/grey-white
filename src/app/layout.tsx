// /app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playwrite_AU_NSW } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Font configuration
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const playwrite = Playwrite_AU_NSW({ 
  subsets: ["latin"],
  variable: "--font-playwrite",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Grey White Space Designs | Architecture Firm",
  description: "Designing tomorrow's spaces with clarity, purpose, and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", inter.variable, playwrite.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}