"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const workItems = [
  { id: 1, title: "Industrial Iron Scrap", weight: "12 Tons", category: "Iron", type: "image", src: "/images/service-metal.png" },
  { id: 2, title: "Copper Wire & Cable Lot", weight: "850 KG", category: "Copper", type: "image", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Plant Machinery Clearance", weight: "28 Tons", category: "Machinery", type: "image", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Aluminium Profile Scrap", weight: "3.2 Tons", category: "Aluminium", type: "image", src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Battery & Lead Scrap", weight: "600 KG", category: "Battery", type: "image", src: "" },
  { id: 6, title: "E-Waste Clearance", weight: "400 KG", category: "E-Waste", type: "image", src: "" },
];

const categoryColors: Record<string, string> = {
  Iron: "bg-slate-700",
  Copper: "bg-orange-700",
  Machinery: "bg-blue-700",
  Aluminium: "bg-sky-600",
  Battery: "bg-red-700",
  "E-Waste": "bg-green-700",
};

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % workItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + workItems.length) % workItems.length);
  }, []);

  const activeItem = workItems[activeIndex];

  return (
    <section id="work" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-1 w-10 bg-amber-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-slate-900">
              Recent <span className="text-amber-500">Clearances</span>
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg">A snapshot of our latest large-scale scrap pickups across Mumbai.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-400 mr-2">{activeIndex + 1} / {workItems.length}</span>
            <button aria-label="Previous Slide" onClick={prevSlide} className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 rounded-full transition-all duration-300">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button aria-label="Next Slide" onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all duration-300 shadow-lg shadow-amber-200">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Feature Card */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[480px] bg-slate-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {activeItem.src ? (
                  <Image src={activeItem.src} alt={activeItem.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className={`text-xs font-black uppercase tracking-widest text-white px-4 py-1.5 rounded-full ${categoryColors[activeItem.category] ?? 'bg-amber-600'}`}>
                {activeItem.category}
              </span>
            </div>

            {/* Bottom Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute bottom-0 left-0 w-full p-8"
              >
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-white mb-3">{activeItem.title}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-amber-500 text-black font-black px-4 py-2 rounded-full text-sm">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                    {activeItem.weight}
                  </div>
                  <span className="text-white/60 text-sm font-semibold">Cleared by Madiha Scrap Trading</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Thumbnails */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:h-[480px] pb-2 lg:pb-0">
            {workItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 w-52 lg:w-full rounded-2xl overflow-hidden relative h-24 lg:min-h-[60px] lg:flex-1 transition-all duration-300 group border-2 ${isActive ? 'border-amber-500 scale-[0.98]' : 'border-transparent hover:border-slate-200'}`}
                >
                  {/* Thumbnail background */}
                  <div className={`absolute inset-0 transition-all ${isActive ? 'bg-amber-50' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                    {item.src && (
                      <Image src={item.src} alt={item.title} fill sizes="30vw" className={`object-cover transition-all duration-500 ${isActive ? 'opacity-40' : 'opacity-60 group-hover:opacity-80'}`} />
                    )}
                  </div>

                  {/* Overlay content */}
                  <div className="relative z-10 p-4 text-left flex flex-col justify-end h-full">
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`}>{item.category}</div>
                    <h4 className={`text-sm font-bold leading-tight line-clamp-1 ${isActive ? 'text-amber-700' : 'text-slate-700'}`}>{item.title}</h4>
                    <p className={`text-xs font-semibold mt-0.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`}>{item.weight}</p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
