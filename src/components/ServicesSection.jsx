"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Metal Scrap",
    items: ["Iron & Steel", "Copper & Brass", "Aluminium", "Stainless Steel"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "bg-accent/10",
    size: "large",
  },
  {
    title: "Electronic Waste",
    items: ["Old Computers", "Laptops & Mobiles", "Printers", "Circuit Boards"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-white/[0.03]",
    size: "medium",
  },
  {
    title: "Plastic Scrap",
    items: ["HDPE / LDPE", "Plastic Bottles", "Industrial Plastic", "PVC Pipes"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: "bg-white/[0.03]",
    size: "medium",
  },
  {
    title: "Batteries",
    items: ["Lead Acid", "UPS Batteries", "Car Batteries", "Industrial Batteries"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-white/[0.03]",
    size: "small",
  },
  {
    title: "Industrial Scrap",
    items: ["Machinery", "Beams & Columns", "Demolition Waste", "Bulk Materials"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-white/[0.03]",
    size: "medium",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-wrapper bg-primary relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-6">What We Buy</div>
            <h2 className="heading-lg md:heading-xl text-white mb-8">
              We Buy All Kinds of <br />
              <span className="text-gradient italic">Scrap Materials</span>
            </h2>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full p-8 md:p-10 rounded-[2rem] bg-primary-light/40 border border-white/5 transition-all duration-500 hover:border-accent/30 hover:bg-primary-light group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-inner">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-secondary text-sm font-bold group-hover:text-text-primary transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary text-sm mb-8">Don&apos;t see your items? Give us a call anyway.</p>
          <a href="#contact" className="btn-cta !py-5 !px-12">
            Ask for Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
