export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madiha-scrap-trading.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "name": "Madiha Scrap Trading",
    "alternateName": "Madiha Scrap Dealer",
    "description": "Mumbai's leading scrap dealer, scrap trader, and commercial scrap metal buyer. We buy and recycle all types of metals, batteries, and electronic waste.",
    "image": `${siteUrl}/icon.svg`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+918291312506",
    "priceRange": "$$",
    "knowsAbout": [
      "Scrap Metal Recycling",
      "Industrial Dismantling",
      "Scrap Trading",
      "Scrap Collection",
      "E-Waste Recycling",
      "Bhangar Dealer"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nehal compound, Gala No 50, Pahelwan Estate, near Masjid Darul Huda, Lokmanya Tilak Nagar",
      "addressLocality": "Saki Naka, Mumbai",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
