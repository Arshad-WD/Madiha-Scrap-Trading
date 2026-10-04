import React from "react";
import styles from "./ServicesSection.module.css";

interface Service {
  num: string;
  title: string;
  desc: string;
  Icon: () => React.ReactNode;
}

const services: Service[] = [
  {
    num: "01",
    title: "Commercial Scrap Buying",
    desc: "Bulk purchasing of iron, copper, aluminium, brass, stainless steel, and industrial offcuts at top market rates.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Factory & Plant Liquidation",
    desc: "Complete decommissioning of industrial plants, heavy machinery dismantling, structural steel removal, and asset recovery.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital Weighing & Instant Pay",
    desc: "100% transparent on-site weighing using certified digital scales. Immediate settlement via NEFT/RTGS, UPI, or Cash.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Licensed Dealer & GST Invoicing",
    desc: "Government-approved scrap trader with full compliance. We issue official GST tax invoices for corporate auditing.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "E-Waste & Machinery Clearance",
    desc: "Safe collection and certified recycling of computer servers, PCBs, telecom gear, generators, boilers, and electric motors.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "24/7 Inquiries & Rapid Logistics",
    desc: "WhatsApp or call us any time of day or night for price estimates, logistics dispatch, or high-volume scrap deal negotiations.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeLine} />
            <span className={styles.badgeText}>What We Offer</span>
          </div>
          <h2 className={styles.title}>
            Our <span className="text-accent">Services</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={i} className={`group ${styles.card}`}>
              {/* Background Number */}
              <div className={styles.bgNumber}>
                {service.num}
              </div>

              {/* Icon Box */}
              <div className={styles.iconBox}>
                <service.Icon />
              </div>

              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>
              
              <p className={styles.cardDesc}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

