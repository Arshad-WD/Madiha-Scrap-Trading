"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
            ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center font-black text-primary text-xl md:text-2xl transition-all duration-500 group-hover:rotate-6">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none">
                  MADIHA<span className="text-accent">.</span>
                </span>
                <span className="text-text-secondary text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mt-0.5 group-hover:text-accent transition-colors">Scrap Trading</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-accent font-extrabold text-xs uppercase tracking-[0.2em] transition-all"
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
              aria-label="Toggle Menu"
            >
              <span className={`w-7 h-0.5 bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-7 h-0.5 bg-white transition-all duration-500 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-7 h-0.5 bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-2xl" onClick={toggleMenu} />

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
                      className="text-5xl md:text-6xl font-black text-white hover:text-accent transition-all duration-300"
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
                    Call +91 98765 43210
                  </a>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-4">Open: 8:00 AM — 9:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
