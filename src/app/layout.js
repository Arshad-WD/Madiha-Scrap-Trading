import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://madihascraptrading.com"),
  title: {
    default: "Madiha Scrap Trading — Professional Industrial Scrap Solutions",
    template: "%s | Madiha Scrap Trading",
  },
  description:
    "Madiha Scrap Trading is Mumbai's premier industrial and commercial scrap management partner. Institutional precision in valuation, free logistics, and instant digital payments for all metal, e-waste, and corporate assets.",
  keywords: [
    "industrial scrap buyer mumbai",
    "commercial scrap management",
    "best scrap rates mumbai",
    "corporate asset disposal",
    "factory scrap buyer",
    "e-waste recycling mumbai",
    "metal scrap trading india",
    "office scrap clearance",
    "scrap pickup service",
    "madiha scrap trading",
  ],
  authors: [{ name: "Madiha Scrap Trading" }],
  creator: "Madiha Scrap Trading",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Madiha Scrap Trading",
    title: "Madiha Scrap Trading — Institutional Scrap Trading Experts",
    description:
      "Transform your industrial and commercial scrap into liquidity with Mumbai's most trusted trading partner. Precision weighing and instant payments.",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Madiha Scrap Trading Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madiha Scrap Trading — Professional Industrial Scrap Buyer",
    description:
      "Institutional precision in scrap management. Best market rates, free pickup, and instant payments.",
    images: ["/images/hero-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Madiha Scrap Trading",
    description:
      "Best scrap dealer offering top prices for metal, plastic, e-waste and industrial scrap. Free pickup and instant payment.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://madihascraptrading.com",
    telephone: process.env.NEXT_PUBLIC_PHONE || "+919876543210",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@madihascraptrading.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: process.env.NEXT_PUBLIC_ADDRESS || "123 Industrial Area",
      addressLocality: process.env.NEXT_PUBLIC_CITY || "Your City",
      addressCountry: "IN",
    },
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-20:00",
    sameAs: [],
    image: "/images/hero-1.png",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.0,
        longitude: 72.8,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scrap Buying Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Metal Scrap Buying" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Plastic Scrap Buying" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "E-Waste Recycling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Industrial Scrap Buying" },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
