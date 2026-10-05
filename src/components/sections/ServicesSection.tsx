import React from "react";
import styles from "./ServicesSection.module.css";

interface Service {
  title: string;
  desc: string;
  Icon: () => React.ReactNode;
}

const services: Service[] = [
  {
    title: "Commercial Scrap Purchasing",
    desc: "Bulk purchasing of iron (HMS 1 & 2), copper wire, aluminium extrusions, brass, stainless steel, and heavy machinery offcuts at highest market rates.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9 text-[#f6b024]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Government Licensed & GST Invoicing",
    desc: "Government-approved scrap trading enterprise providing full compliance and official GST tax invoices for corporate audits and accounting.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9 text-[#f6b024]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "High-Tonnage Industrial Metal Recycling",
    desc: "On-site loading, fleet dispatch, and systematic recycling procedures tailored for manufacturing plants, construction yards, and commercial centers across Mumbai.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9 text-[#f6b024]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className="shrink-0 pt-1">
                <service.Icon />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
