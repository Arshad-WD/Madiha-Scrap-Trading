"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const iconBoxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (iconBoxesRef.current) {
      observer.observe(iconBoxesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className="flex flex-col items-center w-full">
            <h2 className="animate-fadeInDown">
              Welcome to <span>Madiha Scrap Trading</span>
            </h2>
            <p className="animate-fadeInUp-delay-1">
              Mumbai's premier licensed scrap dealer, scrap trader, and commercial clearance contractor. Authorized for high-tonnage industrial scrap collection, on-site digital scale weighing, and instant cash/bank payment.
            </p>
            <div className="animate-fadeInUp-delay-2">
              <a href="#contact" className={styles.btnGetStarted}>
                Get Price Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Icon Boxes Section ======= */}
      <section id="icon-boxes" className={styles.iconBoxes} ref={iconBoxesRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Commercial Scrap Buying</a>
              </h4>
              <p className={styles.description}>
                Bulk purchasing of Iron (HMS 1 &amp; 2), Copper wire, Aluminium extrusions, Brass, and Stainless Steel scrap at highest daily market rates.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4m0 4h4m-4-4l-4 4m4-4l4 4" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Turnkey Office &amp; Scrap Clearance</a>
              </h4>
              <p className={styles.description}>
                Systematic office, retail shop, bank, and warehouse racking dismantling with full site clearance and scrap value offset.
              </p>
            </div>

            {/* Box 3 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-9 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Waste Oil &amp; E-Waste Disposal</a>
              </h4>
              <p className={styles.description}>
                Certified disposal of server racks, motherboards, electric motors, generators, boilers, and heavy plant machinery decommissioning.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
