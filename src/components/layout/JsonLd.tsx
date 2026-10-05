export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madihascraptrading.com";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "RecyclingCenter"],
        "@id": `${siteUrl}/#organization`,
        "name": "Madiha Scrap Trading",
        "alternateName": "Madiha Scrap Dealer Mumbai",
        "description": "Mumbai's leading scrap dealer, scrap trader, and commercial scrap metal buyer. We buy and recycle iron, copper, aluminum, brass, e-waste, and execute interior demolition.",
        "image": `${siteUrl}/logo.jpg`,
        "logo": `${siteUrl}/logo.jpg`,

        "url": siteUrl,
        "telephone": "+918291312506",
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Bank Transfer (NEFT/RTGS), UPI",
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Saki Naka" },
          { "@type": "City", "name": "Andheri" },
          { "@type": "City", "name": "Kurla" },
          { "@type": "City", "name": "Powai" },
          { "@type": "City", "name": "Thane" },
          { "@type": "City", "name": "Navi Mumbai" }
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
          "streetAddress": "Gala No 50 Pahalwan compund Nehal estate, near Masjid Darul Huda",
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
                "description": "Purchase of Iron, Copper, Aluminium, Steel, Brass, Stainless Steel, Lead, Zinc, and Gun Metal scrap at highest market rates."
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "sameAs": [
          "https://wa.me/918291312506",
          "https://maps.google.com/?q=Saki+Naka+Mumbai+Maharashtra+400072"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Madiha Scrap Trading",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How are scrap metal rates calculated in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scrap rates are determined per kilogram or per ton based on current LME (London Metal Exchange) and domestic metal market rates, material grade/purity, and total volume. Instant price estimates can be received by WhatsApping photos to +91 82913 12506."
            }
          },
          {
            "@type": "Question",
            "name": "Does Madiha Scrap Trading provide GST invoices for corporate scrap clearance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Madiha Scrap Trading is a licensed and tax-compliant business providing official GST invoices for corporate asset disposal and auditing."
            }
          },
          {
            "@type": "Question",
            "name": "What services are included in interior demolition?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide complete fit-out removal, partition wall dismantling, false ceiling removal, cabling extraction, warehouse racking dismantling, and complete site clearance with scrap buyback."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas in Mumbai does Madiha Scrap Trading cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover Saki Naka, Andheri, Kurla, Powai, Chandivali, MIDC, Bandra-Kurla Complex (BKC), Thane, Navi Mumbai, Kalyan, and all regions across the Mumbai Metropolitan Region."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": `${siteUrl}/#about`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Services",
            "item": `${siteUrl}/#services`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Materials",
            "item": `${siteUrl}/#materials`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Interior Demolition",
            "item": `${siteUrl}/#interior`
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}

