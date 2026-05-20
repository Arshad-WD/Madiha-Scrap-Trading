"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "who",
    label: "Who We Are",
    title: "India's Leading Scrap Management Experts",
    content: "Madiha Scrap Trading is a premier recycling and scrap management company dedicated to providing sustainable solutions for industrial and commercial waste. With years of experience, we have built a reputation for transparency, reliability, and top-tier market rates.",
    points: ["Certified Recycling Process", "Eco-Friendly Waste Disposal", "Large-Scale Industrial Capacity", "Pan-India Logistics Support"],
    image: "https://images.unsplash.com/photo-1591193686104-fddbaaf28b7e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "services",
    label: "Our Services",
    title: "Comprehensive Waste Solutions",
    content: "We provide end-to-end scrap management services tailored to your needs. From corporate office liquidation to heavy industrial dismantling, our team handles everything with precision and professional care.",
    points: ["Industrial Scrap Buying", "E-Waste Management", "Office Furniture & IT Assets", "Construction Site Clearance"],
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "why",
    label: "Why Choose Us",
    title: "The Most Trusted Name in Scrap",
    content: "Choosing the right partner for your scrap management is crucial. We offer more than just competitive pricing; we offer a partnership built on trust, efficiency, and environmental responsibility.",
    points: ["On-The-Spot Digital Payments", "Accurate Electronic Weighing", "Professional On-Site Teams", "24/7 Customer Assistance"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  }
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="section-wrapper bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Tabs Navigation & Content */}
          <div className="lg:col-span-7">
            <div className="section-label">Company Insights</div>
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                    activeTab.id === tab.id
                      ? "bg-primary text-white shadow-xl shadow-primary/20"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-lg mb-8">{activeTab.title}</h2>
                <p className="body-text mb-10">{activeTab.content}</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeTab.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary font-bold text-sm tracking-wide">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                   <a href="#contact" className="btn-cta">Learn More About Us</a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Tab Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-accent/5 rounded-[3rem] rotate-3 blur-2xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl"
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.label}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50"
            >
               <div className="text-4xl font-black text-primary mb-1">100+</div>
               <div className="text-accent text-[10px] font-black uppercase tracking-widest">Tons Recycled</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
