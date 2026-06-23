"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_path: window.location.pathname,
          });

          // Track WhatsApp clicks
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
              const href = link.getAttribute('href') || '';
              if (href.includes('wa.me')) {
                gtag('event', 'whatsapp_click', {
                  event_category: 'engagement',
                  event_label: link.id || 'whatsapp',
                });
              }
              if (href.startsWith('tel:')) {
                gtag('event', 'call_click', {
                  event_category: 'engagement',
                  event_label: link.id || 'phone',
                });
              }
            }
          });
        `}
      </Script>
    </>
  );
}
