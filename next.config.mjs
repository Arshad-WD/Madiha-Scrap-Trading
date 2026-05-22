/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://*.unsplash.com https://i.pravatar.cc https://*.googletagmanager.com https://*.google-analytics.com https://www.transparenttextures.com https://*.google.com https://*.google.co.in; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://analytics.google.com https://www.google.com; frame-src 'self' https://www.google.com https://maps.google.com; media-src 'self' https://www.w3schools.com blob: data:; object-src 'none';"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
