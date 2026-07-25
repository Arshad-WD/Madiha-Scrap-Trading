import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/layout/GoogleAnalytics';
import JsonLd from "@/components/layout/JsonLd";
import GTMHead from "@/components/layout/GTMHead";
import GTMBody from "@/components/layout/GTMBody";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f9fafb",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madiha-scrap-trading.vercel.app";

export const metadata: Metadata = {
  title: "Madiha Scrap Trading | Best Scrap Dealer & Trader in Mumbai",
  description: "Madiha Scrap Trading is Mumbai's leading scrap dealer, scrap trader, and commercial scrap metal buyer. We buy and recycle iron, copper, aluminum, and e-waste at top rates.",
  keywords: "scrap dealer near me, scrap trader near me, bhangarwala near me, scrap buyer near me, scrap trading Mumbai, best scrap dealer in Mumbai, iron scrap buyer Mumbai, copper scrap price Mumbai, aluminum scrap dealer, battery scrap buyer, industrial scrap trading, Madiha Scrap Trading",
  robots: "index, follow",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Madiha Scrap Trading | Best Scrap Dealer & Trader in Mumbai",
    description: "Leading scrap dealer and trader in Mumbai. Best prices for your industrial, commercial, and electronic scrap.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Madiha Scrap Trading",
  },
  verification: {
    google: "IiGdWGm3FIlBbWBsuI9P3IUm-s9g3SI-LxXZxYhwdsc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={barlow.className}>
        <GTMHead />
        <GTMBody />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
