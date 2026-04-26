"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-32 md:pb-12 relative overflow-hidden">
      {/* Huge Background Typography */}
      <div className="absolute -bottom-10 left-0 right-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap">
        Madiha Scrap Trading
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-primary text-xl transition-transform">
                M
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">
                MADIHA<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="body-text text-lg max-w-sm mb-10">
              Transforming the scrap trading industry with professional service, 
              market-leading prices, and instant doorstep collections across the city.
            </p>
            
            {/* Real Social Icons */}
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01" },
                { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={social.icon} />
                    {social.name === "Instagram" && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-12">
              <div>
                <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">Navigation</h4>
                <ul className="space-y-4">
                  {["Home", "About", "Services", "Process", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="text-text-secondary hover:text-accent transition-colors text-sm font-bold">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">Quick Contact</h4>
                <ul className="space-y-6">
                  <li>
                    <p className="text-white/20 text-[9px] uppercase font-black tracking-widest mb-1">Call Us</p>
                    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-white hover:text-accent font-black text-lg transition-colors block">
                      +91 98765 43210
                    </a>
                  </li>
                  <li>
                    <p className="text-white/20 text-[9px] uppercase font-black tracking-widest mb-1">Email Us</p>
                    <a href="mailto:info@madihascraptrading.com" className="text-white hover:text-accent font-bold text-sm transition-colors break-all block">
                      info@madihascraptrading.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">Location</h4>
                <p className="text-text-secondary text-sm font-bold leading-relaxed mb-6">
                  Serving Mumbai, Navi Mumbai, and surrounding areas.
                </p>
                <div className="pt-6 border-t border-white/5">
                   <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Open Hours</p>
                   <p className="text-white text-xs font-bold mt-1">8:00 AM — 9:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} Madiha Scrap Trading. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/20 hover:text-white transition-colors text-[9px] font-bold uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-white/20 hover:text-white transition-colors text-[9px] font-bold uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
