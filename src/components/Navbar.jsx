"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <Logo className="w-10 h-10 md:w-12 md:h-12" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-primary/60 hover:text-accent font-extrabold text-xs uppercase tracking-[0.2em] transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <a href="#contact" className="btn-cta !py-3.5 !px-8 !text-[11px] !rounded-xl">
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[70] relative"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              <span className={`w-7 h-0.5 bg-primary transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-7 h-0.5 bg-primary transition-all duration-500 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-7 h-0.5 bg-primary transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" onClick={toggleMenu} />

            {/* Links Content */}
            <div className="relative h-full flex flex-col justify-center items-center p-10">
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-5xl md:text-6xl font-black text-primary hover:text-accent transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-20 text-center"
              >
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">Need Fast Scrap Service?</p>
                <div className="flex flex-col gap-4">
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="btn-cta !py-6 !px-16 !text-sm">
                    Call {process.env.NEXT_PUBLIC_PHONE}
                  </a>
                  <p className="text-primary/30 text-[10px] font-bold uppercase tracking-widest mt-4">Open: 8:00 AM — 9:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
