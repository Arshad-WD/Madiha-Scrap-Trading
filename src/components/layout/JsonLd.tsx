export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madiha-scrap-trading.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "name": "Madiha Scrap Trading",
    "alternateName": "Madiha Scrap Dealer Mumbai",
    "description": "Mumbai's leading scrap dealer, scrap trader, and commercial scrap metal buyer. We buy and recycle iron, copper, aluminum, brass, e-waste, and execute interior demolition.",
    "image": `${siteUrl}/icon.svg`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+918291312506",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer (NEFT/RTGS), UPI",
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Navi Mumbai"
      },
      {
        "@type": "City",
        "name": "Thane"
      }
    ],
    "knowsAbout": [
      "Scrap Metal Recycling",
      "Industrial Dismantling",
      "Scrap Trading",
      "Scrap Collection",
      "E-Waste Recycling",
      "Interior Demolition",
      "Bhangar Dealer"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gala No. 50, Nehal Compound, Pahelwan Estate, Near Masjid Darul Huda, 90 Feet Road",
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+918291312506",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919619590481",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Scrap Purchasing & Demolition Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ferrous & Non-Ferrous Scrap Metal Buying",
            "description": "Purchase of Iron, Copper, Aluminium, Steel, Brass, Stainless Steel, Lead, Zinc, and Gun Metal scrap."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Interior Demolition",
            "description": "Systematic office, retail shop, warehouse racking, restaurant, and bank interior dismantling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial E-Waste & Machinery Disposal",
            "description": "E-waste collection, computer server recycling, and heavy plant machinery clearance."
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
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
