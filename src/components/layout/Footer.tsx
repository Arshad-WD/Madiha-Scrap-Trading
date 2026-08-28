import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.brandCol}>
            <Link href="/" className={`group ${styles.logo}`}>
              <div className={styles.logoBox}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                <span className="font-display text-2xl text-white z-10 translate-y-[1px]">M</span>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/20 to-transparent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={styles.logoText}>
                  Madiha <span className="text-amber-700">Scrap</span>
                </span>
                <span className={styles.logoSubText}>
                  Trading Co.
                </span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Mumbai&apos;s leading scrap buyer. We provide transparent weighing and instant payment for all types of commercial and industrial scrap.
            </p>
            
            <div className={styles.socialRow}>
              <a href="tel:+918291312506" aria-label="Call Us" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <a href="https://wa.me/918291312506" aria-label="WhatsApp Us" target="_blank" rel="nofollow noopener noreferrer" className={styles.socialLinkWA}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </a>
              <a href="mailto:madihascraptrading@gmail.com" aria-label="Email Us" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/" className={styles.linkItem}>Home</Link></li>
              <li><Link href="#about" className={styles.linkItem}>About us</Link></li>
              <li><Link href="#services" className={styles.linkItem}>Our Services</Link></li>
              <li className="flex flex-col gap-1.5">
                <span className={styles.subTitle}>Gallery &amp; Video</span>
                <Link href="#interior" className={styles.galleryLink}>Interior Demolition</Link>
                <Link href="#work" className={styles.galleryLink}>Recent Clearances</Link>
              </li>
              <li><Link href="#contact" className={styles.linkItem}>Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIcon}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{process.env.NEXT_PUBLIC_ADDRESS || "Nehal compound, Gala No 50, Pahelwan Estate, near Masjid Darul Huda, Lokmanya Tilak Nagar, Saki Naka, Mumbai, Maharashtra 400072"}</span>
              </li>
              <li className={styles.contactItemCenter}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIconCenter}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 82913 12506</span>
              </li>
              <li className={styles.contactItemCenter}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIconCenter}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>madihascraptrading@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>© 2025 Madiha Scrap Trading. All rights reserved.</p>
          <p>GST Invoices · Licensed Dealer · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
