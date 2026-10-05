"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex items-center justify-between h-full">
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Madiha Scrap Trading"
            width={260}
            height={75}
            priority
            className={`h-14 sm:h-16 w-auto object-contain py-1 ${styles.logoImg}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navbar}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:+918291312506" className={styles.downloadBtn}>
                GET PRICE QUOTE
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileNavToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className={styles.mobileNavOverlay}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a href="tel:+918291312506" className={styles.mobileDownloadBtn}>
                GET PRICE QUOTE: +91 82913 12506
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
