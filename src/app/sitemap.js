export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madihascraptrading.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}


