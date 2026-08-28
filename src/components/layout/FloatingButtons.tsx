import React from "react";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  return (
    <>
      {/* 
        ========================================================================
        MOBILE VIEW: Native App-Like Bottom Bar
        Spans full width, sticks to bottom, split 50/50 for extreme ease of use
        ======================================================================== 
      */}
      <div className={styles.mobileBar}>
        <a
          href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates."
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={styles.mobileWA}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
        <a
          href="tel:+918291312506"
          className={styles.mobileCall}
        >
          <div className={styles.shimmer} />
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest relative z-10">Call Now</span>
        </a>
      </div>

      {/* 
        ========================================================================
        DESKTOP VIEW: Sleek Floating Glass Widget
        ======================================================================== 
      */}
      <div className={styles.desktopWidget}>
        
        {/* Floating Call Widget */}
        <a 
          href="tel:+918291312506"
          className={`group ${styles.desktopCall}`}
        >
          <div className={styles.callIconWrapper}>
            <div className={styles.pingBorder} />
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className={styles.desktopCallText}>
            <span className={styles.desktopCallLabel}>Instant Estimate</span>
            <span className={styles.desktopCallNum}>+91 82913 12506</span>
          </div>
        </a>

        {/* WhatsApp Icon Only */}
        <a 
          href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates."
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={`group ${styles.desktopWA}`}
        >
          <span className={styles.desktopWATooltip}>
            Chat on WhatsApp
          </span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>

      </div>
    </>
  );
}
