import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div>
            <h2 className={styles.heading}>
              Trusted <span className="text-amber-700">Scrap Dealer &amp; Trader</span> in Saki Naka, Mumbai
            </h2>
            
            <p className={styles.subtext}>
              For over 10 years, Madiha Scrap Trading has been the trusted scrap dealer and trader in Mumbai&apos;s scrap recycling industry. We built our business on two simple principles: honest weighing and fair pricing.
            </p>
            
            <p className={styles.description}>
              As specialists in large-scale commercial and industrial clearance, we have the heavy-duty logistics, licensing, and capital to handle high-volume transactions instantly.
            </p>
          </div>

          <div className={styles.gridStats}>
            
            <div className={styles.statCard}>
              <div className={styles.iconBox}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>Licensed & Certified</h3>
              <p className={styles.statDesc}>Fully compliant with government environmental and trading regulations.</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.iconBox}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>200+ Clients</h3>
              <p className={styles.statDesc}>Trusted by factories and commercial businesses alike.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
