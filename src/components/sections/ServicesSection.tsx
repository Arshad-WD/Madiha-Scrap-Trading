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
    num: "04",
    title: "Licensed Dealer",
    desc: "Registered scrap dealer with all government approvals. We issue proper GST invoices for every transaction.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "24/7 Inquiry",
    desc: "WhatsApp or call us any time of day or night for price enquiries, pickups, or bulk deal negotiations.",
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
