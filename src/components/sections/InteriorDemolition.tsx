"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./InteriorDemolition.module.css";

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
    <section id="interior" className={styles.section}>
      {/* Background Decor */}
      <div className={styles.carbonBg} />
      <div className={styles.blurBg} />
      
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div>
            <div className={styles.headerBadge}>
              <span className={styles.badgeLine} />
              <span className={styles.badgeText}>Expert Clearance</span>
            </div>
            <h2 className={styles.title}>
              Interior <span className="text-amber-500 font-black">Demolition</span>
            </h2>
            <p className={styles.desc}>
              {"We don't just buy scrap. Our specialized teams execute clean, noise-controlled, and systematic interior dismantling for commercial spaces."}
            </p>
          </div>
          
          <a href="#contact" className={`group ${styles.bookLink}`}>
            Book Demolition 
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        {/* Expandable Accordion Gallery */}
        <div className={styles.accordion}>
          {demoItems.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                className={`group ${styles.accordionItem} ${
                  isActive ? styles.activeItem : styles.inactiveItem
                }`}
              >
                {/* Image */}
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`${styles.accordionImage} ${
                    isActive ? styles.imageActive : styles.imageInactive
                  }`}
                />
                
                {/* Gradient Overlays */}
                <div className={`${styles.gradientOverlay} ${
                  isActive ? styles.gradientActive : styles.gradientInactive
                }`} />

                {/* Content */}
                <div className={`${styles.contentWrapper} ${
                  isActive ? styles.contentActive : styles.contentInactive
                }`}>
                  
                  {/* Vertical title for inactive (desktop only) */}
                  <div className={`${styles.verticalTitle} ${
                    isActive ? styles.vTitleActive : styles.vTitleInactive
                  }`}>
                    <h3 className="text-white font-bold tracking-wider uppercase text-lg">{item.title}</h3>
                  </div>

                  {/* Active content */}
                  <div className={`${styles.activeContentBlock} ${
                    isActive ? styles.acBlockActive : styles.acBlockInactive
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={styles.numCircle}>
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>
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
