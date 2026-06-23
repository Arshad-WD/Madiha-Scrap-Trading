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
  title: "Madiha Scrap Trading | Buy & Sell Scrap Metal – Mumbai",
  description: "Madiha Scrap Trading is the leading commercial and industrial scrap metal dealer in Mumbai. We buy and sell iron, copper, and aluminum at the best rates.",
  keywords: "scrap trading Mumbai, scrap dealer near me, iron scrap buyer Mumbai, copper scrap price Mumbai, aluminum scrap dealer, battery scrap buyer, industrial scrap trading, Madiha Scrap Trading",
  robots: "index, follow",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Madiha Scrap Trading | Buy & Sell Scrap Metal – Mumbai",
    description: "Leading scrap metal dealer in Mumbai. Best prices for your industrial and commercial scrap.",
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
