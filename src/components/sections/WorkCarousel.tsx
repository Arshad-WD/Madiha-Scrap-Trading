"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorkCarousel.module.css";

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
    <section id="work" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.headerBadge}>
              <span className={styles.badgeLine} />
              <span className={styles.badgeText}>Our Work</span>
            </div>
            <h2 className={styles.title}>
              Recent <span className="text-amber-500">Clearances</span>
            </h2>
            <p className={styles.desc}>A snapshot of our latest large-scale scrap pickups across Mumbai.</p>
          </div>
          <div className={styles.controls}>
            <span className={styles.counter}>{activeIndex + 1} / {workItems.length}</span>
            <button aria-label="Previous Slide" onClick={prevSlide} className={styles.prevButton}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button aria-label="Next Slide" onClick={nextSlide} className={styles.nextButton}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          
          {/* Feature Card */}
          <div className={styles.featureCard}>
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
                  <Image src={activeItem.src} alt={activeItem.title} fill priority={activeIndex === 0} sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className={styles.gradientOverlay} />

            {/* Category badge */}
            <div className={styles.categoryBadgeWrapper}>
              <span className={`${styles.categoryBadge} ${categoryColors[activeItem.category] ?? 'bg-amber-600'}`}>
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
                className={styles.bottomContent}
              >
                <h3 className={styles.slideTitle}>{activeItem.title}</h3>
                <div className={styles.metaRow}>
                  <div className={styles.weightBadge}>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                    {activeItem.weight}
                  </div>
                  <span className={styles.metaText}>Cleared by Madiha Scrap Trading</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Thumbnails */}
          <div className={styles.thumbnailsList}>
            {workItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group ${styles.thumbnailButton} ${
                    isActive ? styles.activeThumbnail : styles.inactiveThumbnail
                  }`}
                >
                  {/* Thumbnail background */}
                  <div className={`${styles.thumbnailBg} ${isActive ? styles.bgActive : styles.bgInactive}`}>
                    {item.src && (
                      <Image 
                        src={item.src} 
                        alt={item.title} 
                        fill 
                        sizes="30vw" 
                        className={`${styles.thumbnailImage} ${
                          isActive ? styles.imgActive : styles.imgInactive
                        }`} 
                      />
                    )}
                  </div>

                  {/* Overlay content */}
                  <div className={styles.thumbnailContent}>
                    <div className={`${styles.thumbCat} ${
                      isActive ? styles.thumbCatActive : styles.thumbCatInactive
                    }`}>
                      {item.category}
                    </div>
                    <h4 className={`${styles.thumbTitle} ${
                      isActive ? styles.thumbTitleActive : styles.thumbTitleInactive
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`${styles.thumbWeight} ${
                      isActive ? styles.thumbWeightActive : styles.thumbWeightInactive
                    }`}>
                      {item.weight}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && <div className={styles.activeDot} />}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
