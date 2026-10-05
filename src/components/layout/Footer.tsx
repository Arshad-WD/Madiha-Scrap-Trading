import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Useful Links */}
            <div className="lg:col-span-3">
              <h4 className={styles.footerHeading}>Useful Links</h4>
              <ul className={styles.linksList}>
                <li>
                  <span className="text-[#f1a40a] font-bold mr-2">›</span>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="text-[#f1a40a] font-bold mr-2">›</span>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <span className="text-[#f1a40a] font-bold mr-2">›</span>
                  <Link href="#services">Our Services</Link>
                </li>
                <li>
                  <span className="text-[#f1a40a] font-bold mr-2">›</span>
                  <Link href="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-5">
              <h4 className={styles.footerHeading}>Contact Us</h4>
              <div className="text-sm text-white/90 space-y-4 leading-relaxed font-sans">
                <p>
                  <strong className="text-[#f1a40a]">Office / Yard Address:</strong><br />
                  Gala No 50 Pahalwan compund Nehal estate, near Masjid Darul Huda, Saki Naka, Mumbai, Maharashtra 400072
                </p>
                <p>
                  <strong className="text-[#f1a40a]">Phone Support:</strong><br />
                  +91 82913 12506 &nbsp;|&nbsp; +91 96195 90481
                </p>
                <p>
                  <strong className="text-[#f1a40a]">Email Inquiries:</strong><br />
                  madihascraptrading@gmail.com
                </p>
              </div>
            </div>

            {/* About & Mission */}
            <div className="lg:col-span-4">
              <h4 className={styles.footerHeading}>ABOUT COMPANY</h4>
              <p className="text-sm text-white/90 leading-relaxed font-sans mb-4">
                Madiha Scrap Trading Co. is benchmarked for best recycling practices, certified digital weighing accuracy, and immediate payment procedures across Mumbai and Maharashtra.
              </p>
              <p className="text-sm font-bold text-[#f1a40a] italic">
                &ldquo;Be Part of the Solution, Not Pollution&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6">
                <a href="tel:+918291312506" aria-label="Call Us" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="https://wa.me/918291312506" aria-label="WhatsApp" target="_blank" rel="nofollow noopener noreferrer" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a href="mailto:madihascraptrading@gmail.com" aria-label="Email" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={styles.container}>
          <p className="text-center text-xs text-white/80">
            &copy; Copyright <strong>Madiha Scrap Trading Co.</strong> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}


