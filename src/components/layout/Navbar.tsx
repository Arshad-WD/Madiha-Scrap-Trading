"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { 
    name: "Gallery & Video", 
    href: "#", 
    dropdown: [
      { name: "Interior Demolition", href: "#interior" },
      { name: "Recent Clearances", href: "#work" }
    ]
  },
  { name: "Contact us", href: "#contact" },
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
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : styles.notScrolled
      }`}
    >
      <div className={styles.container}>
        
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group py-4">
                <button className={styles.navLinkButton}>
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={styles.dropdownContainer}>
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className={styles.dropdownLink}
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={styles.navLink}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="tel:+918291312506" className={styles.ctaButton}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="flex flex-col pt-2 pb-1 border-b border-gray-100">
                <span className={styles.mobileDropdownTitle}>
                  {link.name}
                </span>
                <div className={styles.mobileDropdownList}>
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={styles.mobileMenuLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="tel:+918291312506" className={styles.mobileCta}>
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
