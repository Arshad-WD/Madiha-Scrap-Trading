"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./InteriorDemolition.module.css";

const demoItems = [
  { 
    id: 1, 
    title: "Corporate Office Dismantling", 
    desc: "Complete removal of glass partitions, acoustic false ceilings, cabling, and modular flooring.", 
    type: "image", 
    src: "/images/hero-1.png"
  },
  { 
    id: 2, 
    title: "Retail Shop Clearance", 
    desc: "Swift night-time demolition of retail shop displays, counters, and steel fixtures.", 
    type: "image", 
    src: "/images/service-metal.png"
  },
  { 
    id: 3, 
    title: "Warehouse Racking", 
    desc: "Dismantling high-bay pallet racking systems, steel mezzanines, and industrial shelving.", 
    type: "image", 
    src: "/images/hero-2.png"
  },
  { 
    id: 4, 
    title: "Restaurant Fit-Out Removal", 
    desc: "Safe extraction of commercial stainless steel kitchens, exhaust hoods, and HVAC ductwork.", 
    type: "image", 
    src: "/images/hero-3.png"
  },
  { 
    id: 5, 
    title: "Bank Interiors", 
    desc: "Secure dismantling of strong rooms, teller counters, and heavy steel vault structures.", 
    type: "image", 
    src: "/images/service-plastic.png"
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
        
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>Interior Demolition</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mt-2">
            Clean, noise-controlled, and systematic interior dismantling for corporate offices, retail shops, and warehouses across Mumbai.
          </p>
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
