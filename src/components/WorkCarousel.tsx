"use client";

import { useState, useCallback } from "react";

import Image from "next/image";

// Update the array when you get more videos/images! 
// Just change the `type` to "video" or "image" and provide the `src`.
const workItems = [
  { 
    id: 1, 
    title: "Industrial Iron Scrap", 
    weight: "12 Tons", 
    location: "Bhiwandi, Maharashtra", 
    type: "video", 
    src: "/videos/industrial-iron-scrap.mp4"
  },
  { 
    id: 2, 
    title: "Copper Wire & Cable Lot", 
    weight: "850 KG", 
    location: "Andheri, Mumbai", 
    type: "video", 
    src: "/videos/copper-wire-scrap.mp4"
  },
  { 
    id: 3, 
    title: "Plant Machinery Clearance", 
    weight: "28 Tons", 
    location: "Navi Mumbai", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop" // Placeholder image
  },
  { 
    id: 4, 
    title: "Aluminium Profile Scrap", 
    weight: "3.2 Tons", 
    location: "Goregaon, Mumbai", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    title: "Battery & Lead Scrap", 
    weight: "600 KG", 
    location: "Kurla, Mumbai", 
    type: "image", 
    src: "" // Leave blank to fallback to a nice gradient
  },
  { 
    id: 6, 
    title: "E-Waste Clearance", 
    weight: "400 KG", 
    location: "Powai, Mumbai", 
    type: "image", 
    src: "" 
  },
];

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
    <section id="work" className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-900">
              Recent <span className="text-amber-700">Clearances</span>
            </h2>
            <p className="mt-2 text-gray-600">Take a look at some of our recent scrap pickups.</p>
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous Slide" onClick={prevSlide} className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-amber-700 transition-colors shadow-sm">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button aria-label="Next Slide" onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-amber-700 transition-colors shadow-sm">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Media Card */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-8 md:p-10 min-h-[400px] relative bg-gray-200 group">
            
            {/* Background Media Render */}
            {activeItem.type === "video" && activeItem.src ? (
              <video 
                key={activeItem.src} // forces re-mount to autoPlay
                src={activeItem.src} 
                autoPlay 
                loop 
                muted 
                playsInline
                controls={false}
                disablePictureInPicture
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            ) : activeItem.type === "image" && activeItem.src ? (
              <Image 
                key={activeItem.src}
                src={activeItem.src} 
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-500" />
            )}

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent mix-blend-multiply" />
            


            {/* Content overlay */}
            <div className="relative z-10 text-white">
              <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4 drop-shadow-md">{activeItem.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <span className="bg-amber-600 px-3 py-1 rounded shadow">{activeItem.weight}</span>
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded shadow border border-white/10">{activeItem.location}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-3 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {workItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-2 shrink-0 ${
                    isActive ? "bg-amber-50 border-amber-400 shadow-sm" : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div>
                    <h4 className={`font-bold line-clamp-1 ${isActive ? "text-amber-700" : "text-gray-900"}`}>{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.weight} • {item.location}</p>
                  </div>
                  {item.type === "video" && (
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-amber-200 text-amber-700' : 'bg-gray-100 text-gray-400'}`}>
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" /></svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}</style>
    </section>
  );
}
