export default function JsonLd() {
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
