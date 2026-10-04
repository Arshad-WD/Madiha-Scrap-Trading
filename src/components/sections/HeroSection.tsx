import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.section}>
      
      {/* Background Decor */}
      <div className={`hero-grid ${styles.bgGrid}`} />
      <div className={styles.glowBg} />
      <div className={styles.glowBg2} />

      {/* Hero Content Grid */}
      <div className={styles.contentContainer}>
        <div className={styles.grid}>
          
          {/* Left Column: Headline & Call To Action */}
          <div className={styles.leftCol}>
            
            <div className={styles.badgeWrapper}>
              <span className={styles.badgeLine} />
              <h2 className={styles.badgeText}>{"Mumbai's Leading Scrap Dealer & Trader"}</h2>
            </div>
            
            <h1 className={styles.heading}>
              Scrap Dealer <br />
              <span className={styles.headingAccent}>&amp; Trader</span> <br />
              in Mumbai
            </h1>
            
            <p className={styles.description}>
              Get top market rates with certified on-site digital weighing. We buy bulk commercial scrap, industrial machinery, copper, iron, e-waste, and execute turnkey interior demolition across Mumbai MMR.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10+ Years Industry Experience</span>
              </div>
              <div className={styles.featureItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% On-Site Digital Scale</span>
              </div>
              <div className={styles.featureItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Bank / Cash Transfer</span>
              </div>
              <div className={styles.featureItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Government GST Tax Invoices</span>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <a href="tel:+918291312506" className={styles.primaryButton}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Best Price Quote
              </a>
              <a href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates." target="_blank" rel="nofollow noopener noreferrer" className={styles.secondaryButton}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                WhatsApp Quick Rate
              </a>
            </div>

          </div>

          {/* Right Column: Premium Visual Hero Card */}
          <div className={styles.rightCol}>
            <div className={`group ${styles.heroCard}`}>

              <Image
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
                alt="Madiha Scrap Trading Industrial Clearance"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroCardImage}
              />
              <div className={styles.heroCardOverlay} />

              {/* Floating Top Badge */}
              <div className={styles.heroCardBadgeTop}>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Live Rate Consultation Available</span>
              </div>

              {/* Hero Card Bottom Info */}
              <div className={styles.heroCardBadgeBottom}>
                <h3 className={styles.heroCardTitle}>Commercial Scrap &amp; Demolition</h3>
                <p className={styles.heroCardSub}>High-tonnage factory dismantling, site clearances, and metal trading.</p>

                <div className={styles.heroStatRow}>
                  <span>700+ Tons Monthly</span>
                  <span>·</span>
                  <span>200+ Corporate Clients</span>
                  <span>·</span>
                  <span>Saki Naka, Mumbai</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className={styles.tickerWrapper}>
        <div className={`ticker ${styles.tickerContent}`}>
          <span className="mr-8">IRON SCRAP ◆ COPPER SCRAP ◆ ALUMINIUM SCRAP ◆ BRASS SCRAP ◆ E-WASTE ◆ MACHINERY SCRAP ◆ BATTERY SCRAP ◆ STEEL SCRAP ◆ PLASTIC SCRAP ◆ PAPER SCRAP ◆</span>
          <span>IRON SCRAP ◆ COPPER SCRAP ◆ ALUMINIUM SCRAP ◆ BRASS SCRAP ◆ E-WASTE ◆ MACHINERY SCRAP ◆ BATTERY SCRAP ◆ STEEL SCRAP ◆ PLASTIC SCRAP ◆ PAPER SCRAP ◆</span>
        </div>
      </div>

    </section>
  );
}

