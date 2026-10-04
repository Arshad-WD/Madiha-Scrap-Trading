import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.brandCol}>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Madiha Scrap Trading"
                width={240}
                height={70}
                className="h-12 sm:h-14 w-auto object-contain bg-white px-2 py-1 rounded-lg shadow-sm"
              />
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
              <li><Link href="#about" className={styles.linkItem}>About Us</Link></li>
              <li><Link href="#services" className={styles.linkItem}>Our Services</Link></li>
              <li><Link href="#materials" className={styles.linkItem}>Accepted Materials</Link></li>
              <li><Link href="#interior" className={styles.linkItem}>Interior Demolition</Link></li>
              <li><Link href="#work" className={styles.linkItem}>Recent Work</Link></li>
              <li><Link href="#contact" className={styles.linkItem}>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>SEO &amp; Industry Resources</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="https://www.lme.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  LME Metal Pricing Index ↗
                </a>
              </li>
              <li>
                <a href="https://mpcb.gov.in" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  MPCB Recycling Guidelines ↗
                </a>
              </li>
              <li>
                <a href="https://cpcb.nic.in" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  CPCB E-Waste Rules ↗
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" className={styles.linkItem}>
                  LLM AI Context (llms.txt)
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" target="_blank" className={styles.linkItem}>
                  Full AI Knowledge Base
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className={styles.linkItem}>
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact &amp; Location</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIcon}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <a href="https://maps.google.com/?q=Saki+Naka+Mumbai+Maharashtra+400072" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                  {process.env.NEXT_PUBLIC_ADDRESS || "Gala No 50, Nehal Compound, Pahelwan Estate, near Masjid Darul Huda, Lokmanya Tilak Nagar, Saki Naka, Mumbai, Maharashtra 400072"}
                </a>
              </li>
              <li className={styles.contactItemCenter}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIconCenter}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+918291312506" className="hover:text-amber-700 transition-colors">+91 82913 12506</a> / <a href="tel:+919619590481" className="hover:text-amber-700 transition-colors">+91 96195 90481</a>
              </li>
              <li className={styles.contactItemCenter}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.contactIconCenter}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:madihascraptrading@gmail.com" className="hover:text-amber-700 transition-colors">madihascraptrading@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>


      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>© 2025 Madiha Scrap Trading Co. All rights reserved.</p>
          <div className="flex gap-4">
            <span>GST Invoices Provided</span>
            <span>·</span>
            <span>Government Licensed Scrap Dealer</span>
            <span>·</span>
            <span>Saki Naka, Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

