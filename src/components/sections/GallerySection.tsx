import React from "react";
import Image from "next/image";
import styles from "./GallerySection.module.css";

const galleryItems = [
  { id: 1, title: "Industrial Iron Scrap Clearance", category: "Heavy Iron & Steel", src: "/images/service-metal.png" },
  { id: 2, title: "Copper Wire & Cable Dismantling", category: "Non-Ferrous Copper", src: "/images/hero-1.png" },
  { id: 3, title: "Factory Machinery Liquidation", category: "Plant Decommissioning", src: "/images/hero-2.png" },
  { id: 4, title: "Aluminium Profile Scrap Lot", category: "Aluminium Metal", src: "/images/hero-3.png" },
  { id: 5, title: "Commercial Interior Demolition", category: "Fit-out Removal", src: "/images/service-plastic.png" },
  { id: 6, title: "E-Waste & IT Server Rack Recycling", category: "Electronic Clearance", src: "/images/service-ewaste.png" },
];

export default function GallerySection() {
  return (
    <section id="work" className={styles.gallerySection}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>Gallery &amp; Project Clearances</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={350}
                  className={styles.portfolioImg}
                />
              </div>
              <div className={styles.portfolioInfo}>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
