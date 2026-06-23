import React from "react";

export default function FloatingButtons() {
  return (
    <>
      {/* 
        ========================================================================
        MOBILE VIEW: Native App-Like Bottom Bar
        Spans full width, sticks to bottom, split 50/50 for extreme ease of use
        ======================================================================== 
      */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[1000] flex bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a
          href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates."
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-emerald-50 text-emerald-700 active:bg-emerald-100 transition-colors border-r border-emerald-100"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
        <a
          href="tel:+918291312506"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-amber-500 text-white active:bg-amber-600 transition-colors relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest relative z-10">Call Now</span>
        </a>
      </div>

      {/* 
        ========================================================================
        DESKTOP VIEW: Sleek Floating Glass Widget
        ======================================================================== 
      */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-[1000] flex-col items-end gap-4">
        
        {/* Floating Call Widget */}
        <a 
          href="tel:+918291312506"
          className="group flex items-center gap-4 bg-white/90 backdrop-blur-xl p-2 pr-6 rounded-full shadow-2xl border border-gray-100 hover:scale-105 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg relative">
            <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Instant Estimate</span>
            <span className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors">+91 82913 12506</span>
          </div>
        </a>

        {/* WhatsApp Icon Only */}
        <a 
          href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates."
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group"
        >
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 pointer-events-none transition-all whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>

      </div>
    </>
  );
}
