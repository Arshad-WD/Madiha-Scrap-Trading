

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-6">
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
            <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
              Mumbai&apos;s leading scrap buyer. We provide transparent weighing, best market rates, and instant payment for all types of commercial and industrial scrap.
            </p>
            
            <div className="flex gap-3">
              <a href="tel:+918291312506" aria-label="Call Us" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:text-amber-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <a href="https://wa.me/918291312506" aria-label="WhatsApp Us" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </a>
              <a href="mailto:madihascraptrading@gmail.com" aria-label="Email Us" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:text-amber-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-gray-900">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li><Link href="/" className="hover:text-amber-700 transition-colors">Home</Link></li>
              <li><Link href="#work" className="hover:text-amber-700 transition-colors">Our Work</Link></li>
              <li><Link href="#services" className="hover:text-amber-700 transition-colors">Services</Link></li>
              <li><Link href="#materials" className="hover:text-amber-700 transition-colors">Materials</Link></li>
              <li><Link href="#about" className="hover:text-amber-700 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-gray-900">Contact</h4>
            <ul className="flex flex-col gap-4 text-gray-600">
              <li className="flex gap-3 items-start">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 shrink-0 mt-0.5 text-amber-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{process.env.NEXT_PUBLIC_ADDRESS || "Sanaullah Compound, Saki Naka, Mumbai, Maharashtra - 400072"}</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 shrink-0 text-amber-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 82913 12506</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 shrink-0 text-amber-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>madihascraptrading@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-semibold uppercase tracking-wider">
          <p>© 2025 Madiha Scrap Trading. All rights reserved.</p>
          <p>GST Invoices · Licensed Dealer · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
