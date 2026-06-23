

import React from "react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center bg-gray-50 overflow-hidden pt-20">
      
      {/* Light Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hero-grid" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-12 lg:py-0">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-1 w-12 bg-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Mumbai's Trusted Scrap Dealer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6 text-text-primary">
            WE BUY <br/>
            <span className="text-accent">&amp; SELL</span><br/>
            ALL SCRAP
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600">
            Manage your commercial and industrial scrap on a global scale. We provide professional recycling and high-volume logistics solutions for businesses worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-700 font-semibold">

            <div className="flex items-center gap-2">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              10+ Years Experience
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pb-16">
            <a href="tel:+918291312506" className="flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider rounded-md shadow-lg transition-transform hover:-translate-y-1 bg-accent text-black">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for Best Price
            </a>
            <a href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates." target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider rounded-md transition-all hover:bg-green-50 border-2 border-green-600 text-green-600">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-white border-t border-b border-gray-200 py-3">
        <div className="ticker font-bold tracking-widest text-sm text-gray-800">
          <span className="mr-8">IRON SCRAP ◆ COPPER SCRAP ◆ ALUMINIUM SCRAP ◆ BRASS SCRAP ◆ E-WASTE ◆ MACHINERY SCRAP ◆ BATTERY SCRAP ◆ STEEL SCRAP ◆ PLASTIC SCRAP ◆ PAPER SCRAP ◆</span>
          <span>IRON SCRAP ◆ COPPER SCRAP ◆ ALUMINIUM SCRAP ◆ BRASS SCRAP ◆ E-WASTE ◆ MACHINERY SCRAP ◆ BATTERY SCRAP ◆ STEEL SCRAP ◆ PLASTIC SCRAP ◆ PAPER SCRAP ◆</span>
        </div>
      </div>
    </section>
  );
}
