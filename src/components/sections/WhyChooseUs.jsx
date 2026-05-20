"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Best Market Rates",
    desc: "We track daily market price updates to ensure you get the absolute highest value for your scrap with zero hidden fees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Free Home Pickup",
    desc: "Save your time and fuel. Our professional team comes to your location at your preferred time. We handle the heavy lifting.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Weighing",
    desc: "We use certified digital weighing scales. Everything is weighed in front of you to ensure 100% accuracy and honesty.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Payment",
    desc: "No waiting for checks or bank transfers. We pay the full amount instantly on the spot via Cash, UPI, or Bank Transfer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-wrapper bg-white relative overflow-hidden border-y border-slate-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Sticky Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="section-label mb-6">Why Choose Us</div>
            <h2 className="heading-lg text-primary mb-8">
              The Most Professional <br />
              <span className="text-accent">Scrap Trading</span> Experience
            </h2>
            <p className="body-text mb-10 text-text-secondary">
              We&apos;ve redesigned the scrap selling process to be fast, transparent, and rewarding. 
              Our customers value our punctuality and fair dealing.
            </p>
            <a href="#contact" className="btn-cta">
              Get Your Quote Now
            </a>
          </motion.div>

          {/* Right: Unique Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:border-accent/30 hover:bg-white hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-primary mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
