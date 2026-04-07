import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Providers from "./providers";

import Script from 'next/script';
export const metadata: Metadata = {
  title: "Qgenetics",
  description: "Qgenetics corporate site",
  verification: {
    other: {
      "naver-site-verification": "b27afea2cc84b1c3dea9c8d0499b9cb35c230020"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8WKG8CZ0NM" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WKG8CZ0NM');
          `}
        </Script>
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
