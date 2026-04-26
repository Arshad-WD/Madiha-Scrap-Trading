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
    default: "Madiha Scrap Trading — Best Scrap Dealer & Buyer Near You",
    template: "%s | Madiha Scrap Trading",
  },
  description:
    "Madiha Scrap Trading offers the best prices for metal scrap, plastic scrap, e-waste, and industrial scrap. Free doorstep pickup and instant payment. Call now for a free quote!",
  keywords: [
    "scrap dealer near me",
    "scrap buyer",
    "metal scrap trading",
    "sell scrap online",
    "scrap pickup service",
    "e-waste recycling",
    "industrial scrap buyer",
    "best scrap price",
    "plastic scrap buyer",
    "scrap dealer",
  ],
  authors: [{ name: "Madiha Scrap Trading" }],
  creator: "Madiha Scrap Trading",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Madiha Scrap Trading",
    title: "Madiha Scrap Trading — Best Scrap Dealer & Buyer Near You",
    description:
      "Get the best price for your scrap. We buy metal, plastic, e-waste & industrial scrap with free pickup and instant payment.",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Madiha Scrap Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madiha Scrap Trading — Best Scrap Dealer & Buyer",
    description:
      "Sell your scrap at the best price. Free pickup, instant payment. Call now!",
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
    icon: "/favicon.ico",
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
        <meta name="theme-color" content="#3d2624" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
