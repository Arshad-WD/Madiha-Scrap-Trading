import React from "react";
import styles from "./MaterialsSection.module.css";

const materials = [
  { category: "Ferrous", name: "Iron Scrap", desc: "MS plates, angles, rods, channels, castings", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { category: "Non-Ferrous", name: "Copper Scrap", desc: "Wires, pipes, motors, transformers", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Aluminium", desc: "Sheets, extrusions, cans, utensils", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Ferrous", name: "Steel Scrap", desc: "Structural steel, TMT bars, beams", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { category: "Non-Ferrous", name: "Brass", desc: "Fittings, valves, castings, turnings", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Stainless Steel", desc: "304, 316 grade, utensils, vessels", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Lead", desc: "Battery plates, cable sheathing, pipes", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Zinc", desc: "Die castings, galvanised sheets, ingots", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Gun Metal", desc: "Valves, gears, bushes, bronze bearings", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Electronics", name: "E-Waste", desc: "PCBs, CPUs, laptops, phones, servers", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { category: "Paper", name: "Paper & Cardboard", desc: "Newspapers, cartons, office paper", color: "bg-green-100 text-green-700 border-green-200" },
  { category: "Plastic", name: "Plastic", desc: "PET bottles, HDPE, industrial plastic", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { category: "Industrial", name: "Industrial Machinery", desc: "Old equipment, motors, pumps, presses", color: "bg-rose-100 text-rose-700 border-rose-200" },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What We <span className="text-amber-700">Buy</span>
          </h2>
          <p className={styles.subtitle}>
            We purchase a wide variety of scrap materials.
          </p>
        </div>

        <div className={styles.grid}>
          {materials.map((mat, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.badge} ${mat.color}`}>
                {mat.category}
              </div>
              <h3 className={styles.cardTitle}>{mat.name}</h3>
              <p className={styles.cardDesc}>{mat.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <div>
            <h4 className={styles.ctaTitle}>{"Don't see your material listed?"}</h4>
            <p className={styles.ctaSubtitle}>We probably still buy it. Contact us for a quick quote.</p>
          </div>
          <a 
            href="https://wa.me/918291312506?text=Hello!%20I%20have%20some%20materials%20and%20would%20like%20to%20get%20a%20quick%20price%20quote." 
            target="_blank" 
            rel="nofollow noopener noreferrer" 
            className={styles.ctaButton}
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get a Quote via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
