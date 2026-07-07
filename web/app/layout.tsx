import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Elpha Room",
  description:
    "Elpha Room builds automation systems and intelligent operational tools that help companies organize customer interactions, leads and workflows with clarity and structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-300">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18193336628"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18193336628');
            gtag('config', 'G-D5NDTPYDYE');
          `}
        </Script>

        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
