import type { Metadata } from "next";
import { Outfit, Playfair_Display, Silkscreen } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanshika Sharma - CS Student at UBC",
  description:
    "Portfolio of Vanshika Sharma - BSc Computer Science with AI student at UBC, building full-stack products and software systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-[#3A3E6C] selection:text-[#f0f2fa]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
