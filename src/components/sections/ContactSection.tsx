import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Ready to <span className="text-amber-700">Sell Scrap?</span>
          </h2>
          <p className={styles.subtitle}>
            Contact us today for a free estimate and rapid pickup service.
          </p>
        </div>

        <div className={styles.card}>
          
          <div className={styles.infoPane}>
            <h3 className={styles.paneTitle}>Contact Information</h3>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className={styles.itemLabel}>Phone</h4>
                  <p className={styles.itemDetail}>+91 82913 12506</p>
                  <p className={styles.itemDetail}>+91 96195 90481</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className={styles.itemLabel}>Email</h4>
                  <p className={styles.itemDetailEmail}>madihascraptrading@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className={styles.itemLabel}>Location</h4>
                  <p className={styles.itemDetail}>
                    GALA NO 50 NEHAL COMPUND PAHLWAN ESTATE 90 FEET RAOD SAKINAKA MUMBAI 400072
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.buttonRow}>
              <a href="tel:+918291312506" className={styles.callButton}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
              <a href="https://wa.me/918291312506?text=Hello%21%20I%27d%20like%20to%20get%20a%20scrap%20price%20quote." target="_blank" rel="nofollow noopener noreferrer" className={styles.whatsappButton}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                WhatsApp
              </a>
            </div>

            <div className={styles.tipBox}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className={styles.tipText}>
                <strong>Pro Tip:</strong> Send photos of your scrap on WhatsApp for a quick price estimate.
              </p>
            </div>
            
          </div>

          <div className={styles.mapPane}>
            <iframe
              title="Madiha Scrap Trading Google Maps Location"
              src={process.env.NEXT_PUBLIC_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1907606299656!2d72.88580507423565!3d19.099285551243003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b72fcb25b9%3A0x47bcb0c9d1b3c483!2sMADIHA%20SCRAP%20TRADING!5e0!3m2!1sen!2sin!4v1780155855893!5m2!1sen!2sin"}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
