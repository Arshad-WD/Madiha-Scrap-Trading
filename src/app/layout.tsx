import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
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

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f9fafb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Madiha Scrap Trading | Buy & Sell Scrap Metal – Mumbai",
  description: "Leading scrap metal dealer in Mumbai. We buy and sell iron, copper, aluminum, battery, and industrial scrap at best prices. Professional scrap trading services in Mumbai.",
  keywords: "scrap trading Mumbai, scrap dealer near me, iron scrap buyer Mumbai, copper scrap price Mumbai, aluminum scrap dealer, battery scrap buyer, industrial scrap trading, Madiha Scrap Trading",
  robots: "index, follow",
  openGraph: {
    title: "Madiha Scrap Trading | Buy & Sell Scrap Metal – Mumbai",
    description: "Leading scrap metal dealer in Mumbai. Best prices for your industrial and commercial scrap.",
    type: "website",
    locale: "en_IN",
    url: "https://madihascraptrading.com",
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
        <GTMHead />
        <JsonLd />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${bebasNeue.variable}`}>
        <GTMBody />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
