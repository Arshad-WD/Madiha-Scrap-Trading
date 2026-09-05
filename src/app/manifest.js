export default function manifest() {
  return {
    name: "Madiha Scrap Trading",
    short_name: "Madiha Scrap",
    description: "Mumbai's leading scrap dealer, trader, and commercial interior demolition specialist.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    shortcuts: [
      {
        name: "Call for Quote",
        short_name: "Call Now",
        description: "Direct phone line for instant scrap quote",
        url: "tel:+918291312506",
      },
      {
        name: "WhatsApp Inquiry",
        short_name: "WhatsApp",
        description: "Chat on WhatsApp for instant price estimate",
        url: "https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates.",
      },
    ],
  };
}
