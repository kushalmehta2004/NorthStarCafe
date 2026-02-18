import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "NorthStar Cafe | North Beach Bar · San Francisco",
  description: "Neighborhood bar. Sports haven. SF's home for Buffalo Bills and Philadelphia Eagles fans. Free popcorn, cheap drinks, and authentic North Beach vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
