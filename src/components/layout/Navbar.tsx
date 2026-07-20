"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-border-custom" 
          : "bg-white py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-11 h-11 bg-gray-900 rounded-xl overflow-hidden shrink-0 shadow-md border-b-2 border-amber-500 transition-all group-hover:shadow-amber-500/20 group-hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                <span className="font-display text-2xl text-white z-10 translate-y-[1px]">M</span>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/20 to-transparent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl text-gray-900 tracking-tight uppercase">
                  Madiha <span className="text-amber-700">Scrap</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">
                  Trading Co.
                </span>
              </div>
            </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group py-4">
                <button
                  className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#d97706] text-text-secondary"
                >
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className="block px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:pl-6 transition-all duration-300"
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
                className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#d97706] py-4 text-text-secondary"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="tel:+918291312506"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-md rounded-md bg-accent text-black"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-primary"
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
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="flex flex-col pt-2 pb-1 border-b border-gray-100">
                <span className="text-base font-bold uppercase tracking-wider text-gray-900 mb-2">
                  {link.name}
                </span>
                <div className="flex flex-col pl-4 border-l-2 border-amber-500 ml-1">
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className="text-sm font-bold uppercase tracking-wider py-2.5 text-gray-500 hover:text-amber-700"
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
                className="text-base font-bold uppercase tracking-wider py-3 border-b border-gray-100 text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="tel:+918291312506"
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-md bg-accent text-black"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
