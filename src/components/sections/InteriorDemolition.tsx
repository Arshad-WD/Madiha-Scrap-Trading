"use client";

import { useState } from "react";
import Image from "next/image";

const demoItems = [
  { 
    id: 1, 
    title: "Corporate Office Dismantling", 
    desc: "Complete removal of glass partitions, false ceilings, and flooring.", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Retail Shop Clearance", 
    desc: "Swift night-time demolition of shop fixtures and heavy displays.", 
    type: "image", 
    src: "/images/service-metal.png"
  },
  { 
    id: 3, 
    title: "Warehouse Racking", 
    desc: "Dismantling high-bay racking systems and mezzanine floors.", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 4, 
    title: "Restaurant Fit-Out Removal", 
    desc: "Safe extraction of commercial kitchens and HVAC systems.", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 5, 
    title: "Bank Interiors", 
    desc: "Secure dismantling of strong rooms and heavy vault doors.", 
    type: "image", 
    src: "/images/service-metal.png"
  }
];

export default function InteriorDemolition() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="interior" className="py-24 bg-zinc-900 border-y border-zinc-950 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-1 w-10 bg-amber-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Expert Clearance</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white">
              Interior <span className="text-amber-500 font-black">Demolition</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl text-lg">
              We don't just buy scrap. Our specialized teams execute clean, noise-controlled, and systematic interior dismantling for commercial spaces.
            </p>
          </div>
          
          <a href="#contact" className="hidden md:flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider hover:text-white transition-colors group">
            Book Demolition 
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        {/* Unique Expandable Accordion Gallery */}
        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-3 mt-10">
          {demoItems.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                  isActive 
                    ? "md:flex-[4] flex-[3]" 
                    : "md:flex-[1] flex-[0.5]"
                }`}
              >
                {/* Image */}
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110 grayscale-[30%] opacity-60 group-hover:opacity-100'}`}
                />
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-zinc-950/90 via-zinc-900/30 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`} />

                {/* Content */}
                <div className={`absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 whitespace-nowrap ${isActive ? 'opacity-100 delay-200' : 'opacity-0 md:opacity-100'}`}>
                  
                  {/* Vertical title for inactive (desktop only) */}
                  <div className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 origin-bottom -rotate-90 transition-all duration-500 whitespace-nowrap ${isActive ? 'opacity-0 pointer-events-none blur-sm' : 'opacity-100 delay-200'}`}>
                    <h3 className="text-white font-bold tracking-wider uppercase text-lg">{item.title}</h3>
                  </div>

                  {/* Active content */}
                  <div className={`transform transition-all duration-700 ${isActive ? 'translate-y-0' : 'translate-y-10 blur-sm pointer-events-none hidden md:block'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-amber-500 text-zinc-900 flex items-center justify-center font-black text-xs">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold uppercase text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-300 font-medium whitespace-normal max-w-md line-clamp-2 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
