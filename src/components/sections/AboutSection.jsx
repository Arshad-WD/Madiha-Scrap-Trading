"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/[,+]/g, ""));
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Dynamic Stats */}
          <div className="order-2 lg:order-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Stat 1: Years */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl flex flex-col justify-center min-h-[160px] md:aspect-square"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-primary mb-1">
                    <AnimatedCounter value="2+" />
                  </h3>
                  <p className="text-text-secondary text-[10px] uppercase tracking-widest font-bold">Years of Trust</p>
                </div>
              </motion.div>

              {/* Stat 2: Tons */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-accent p-6 md:p-8 rounded-3xl flex flex-col justify-center min-h-[160px] md:aspect-square shadow-xl shadow-accent/20"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-4m3 4v-6m3 6V9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-1">
                    <AnimatedCounter value="100+" />
                  </h3>
                  <p className="text-white/80 text-[10px] uppercase tracking-widest font-black">Tons Recycled</p>
                </div>
              </motion.div>

              {/* Stat 3: Happy Customers */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl flex items-center gap-6"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 border border-slate-200 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-primary mb-1">
                    <AnimatedCounter value="150+" />
                  </h3>
                  <p className="text-text-secondary text-[10px] uppercase tracking-widest font-bold">Satisfied Sellers</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Text & Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="section-label mb-6">About Us</div>
            <h2 className="heading-lg md:heading-xl text-primary mb-8">
              A Trusted Name in <br />
              <span className="text-gradient italic">Scrap Recycling</span>
            </h2>
            
            {/* New Industrial Image Card */}
            <div className="relative mb-12 rounded-[2.5rem] overflow-hidden aspect-video border border-slate-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Recycling Facility" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                width="800"
                height="450"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="body-text text-lg font-bold text-primary">
                Madiha Scrap Trading has been serving businesses and industries for over 10 years.
              </p>
              <p className="body-text text-text-secondary">
                We believe in fair pricing, transparent weighing, and building long-term relationships with our customers. 
                Whether it&apos;s a few kilos of old newspapers or tons of industrial metal — we handle it all with care.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-primary font-bold text-[10px] tracking-wider uppercase">Certified Dealer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-primary font-bold text-[10px] tracking-wider uppercase">Transparent Pricing</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
