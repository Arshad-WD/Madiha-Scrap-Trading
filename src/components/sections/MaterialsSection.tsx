import React from "react";
import styles from "./MaterialsSection.module.css";

const materials = [
  { category: "Ferrous", name: "Iron Scrap (HMS 1 & 2)", desc: "Heavy melting steel, MS plates, angles, channels, machine bodies & castings", color: "bg-purple-100 text-purple-800" },
  { category: "Non-Ferrous", name: "Copper Scrap", desc: "Berry copper wire, heavy copper pipes, armatures, transformer coils & tubes", color: "bg-amber-100 text-amber-800" },
  { category: "Non-Ferrous", name: "Aluminium Scrap", desc: "6063 extrusions, window frames, sheets, wire scrap, AC fins & alloy wheels", color: "bg-amber-100 text-amber-800" },
  { category: "Ferrous", name: "Steel Scrap", desc: "Structural steel, TMT reinforcement bars, I-beams & fabrication offcuts", color: "bg-purple-100 text-purple-800" },
  { category: "Non-Ferrous", name: "Brass Scrap", desc: "Honey brass, sanitary fittings, valves, bushes, turnings & hardware", color: "bg-amber-100 text-amber-800" },
  { category: "Non-Ferrous", name: "Stainless Steel", desc: "SS 304, SS 316 & SS 202 grades, chemical piping, tanks & kitchen fit-outs", color: "bg-amber-100 text-amber-800" },
  { category: "Non-Ferrous", name: "Lead & Batteries", desc: "Lead acid battery plates, industrial battery banks, sheathing & blocks", color: "bg-amber-100 text-amber-800" },
  { category: "Non-Ferrous", name: "Gunmetal & Bronze", desc: "Heavy marine valves, propellers, bearing bushes & friction plates", color: "bg-amber-100 text-amber-800" },
  { category: "Electronics", name: "IT E-Waste", desc: "Blade servers, PCBs, CPUs, computer towers, UPS units & data center gear", color: "bg-blue-100 text-blue-800" },
  { category: "Industrial", name: "Heavy Machinery", desc: "Electric motors, Diesel Generators (DG sets), boilers & turning lathes", color: "bg-rose-100 text-rose-800" },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className={styles.materialsSection}>
      <div className={styles.container}>
        
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>Accepted Materials</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat, i) => (
            <div key={i} className={styles.matCard}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={styles.cardTitle}>{mat.name}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${mat.color}`}>
                  {mat.category}
                </span>
              </div>
              <p className={styles.cardDesc}>{mat.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <div>
            <h4 className={styles.ctaTitle}>Don&apos;t see your material grade listed?</h4>
            <p className={styles.ctaSubtitle}>Send us photos on WhatsApp for an instant price quote within 15 minutes.</p>
          </div>
          <a 
            href="https://wa.me/918291312506?text=Hello!%20I%20have%20some%20materials%20and%20would%20like%20to%20get%20a%20quick%20price%20quote." 
            target="_blank" 
            rel="nofollow noopener noreferrer" 
            className={styles.ctaButton}
          >
            WhatsApp Photo Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

