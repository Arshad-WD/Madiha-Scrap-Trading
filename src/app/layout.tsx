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
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madiha-scrap-trading.vercel.app";

export const metadata: Metadata = {
  title: "Madiha Scrap Trading | Best Scrap Dealer & Trader in Mumbai",
  description: "Madiha Scrap Trading is Mumbai's leading scrap dealer, scrap trader, and commercial scrap metal buyer. We buy and recycle iron, copper, aluminum, e-waste, and execute interior demolition at top rates.",
  keywords: "scrap dealer near me, scrap trader near me, bhangarwala near me, scrap buyer near me, scrap trading Mumbai, best scrap dealer in Mumbai, iron scrap buyer Mumbai, copper scrap price Mumbai, aluminum scrap dealer, battery scrap buyer, industrial scrap trading, interior demolition Mumbai, Madiha Scrap Trading",
  category: "Business & Industrial > Recycling & Waste Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Madiha Scrap Trading | Best Scrap Dealer & Trader in Mumbai",
    description: "Leading scrap dealer and trader in Mumbai. Top prices & instant payment for industrial, commercial, and electronic scrap.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Madiha Scrap Trading",
    images: [
      {
        url: `${siteUrl}/icon.svg`,
        width: 1200,
        height: 630,
        alt: "Madiha Scrap Trading Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madiha Scrap Trading | Scrap Dealer & Trader Mumbai",
    description: "Leading scrap dealer in Mumbai. High-volume pickup, digital scale accuracy, and instant payment.",
    images: [`${siteUrl}/icon.svg`],
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
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="author" type="text/plain" href="/llms.txt" />
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
