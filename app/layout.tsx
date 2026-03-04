import type { Metadata } from "next";
import { Manrope, Playfair_Display, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Providers from "./providers";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk"
});

export const metadata: Metadata = {
  title: "Qgenetics",
  description: "Qgenetics corporate site"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${manrope.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable}`}>
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
