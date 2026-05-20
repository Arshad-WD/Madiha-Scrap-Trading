import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";


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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Madiha Scrap Trading",
    "image": "https://madihascraptrading.com/logo.png",
    "@id": "https://madihascraptrading.com",
    "url": "https://madihascraptrading.com",
    "telephone": "+918291312506",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SANAULLAH COMPOUND, next to Yogiraj school, Mayfair Industrial Area, Sathi D Souza Nagar",
      "addressLocality": "Saki Naka",
      "addressRegion": "Maharashtra",
      "postalCode": "400072",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0956,
      "longitude": 72.8839
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/madihascraptrading",
      "https://www.instagram.com/madihascraptrading"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${bebasNeue.variable}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
