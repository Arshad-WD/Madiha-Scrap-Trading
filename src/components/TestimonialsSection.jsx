"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    text: "Excellent service! They arrived within 2 hours of my call. The weighing was transparent, and I got paid instantly. The most professional scrap dealers I've dealt with.",
    size: "large",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    text: "Selling my old appliances was so easy. They handled the heavy lifting and gave me a very fair price.",
    size: "small",
  },
  {
    name: "Amit Patel",
    role: "Industrial Client",
    text: "We used Madiha Scrap Trading for our factory clearance. They managed 5 tons of metal scrap effortlessly. Reliable and highly efficient.",
    size: "medium",
  },
  {
    name: "Suresh Gupta",
    role: "Shopkeeper",
    text: "Fair prices and digital weighing. No arguments, just honest business. Highly recommended.",
    size: "small",
  },
  {
    name: "Meera Reddy",
    role: "Apartment Resident",
    text: "Very polite staff. They came right to my doorstep and cleared out years of accumulated household scrap in minutes.",
    size: "medium",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-wrapper bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="section-container">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-6">Testimonials</div>
            <h2 className="section-title">
              What Our <span className="text-accent italic">Customers</span> Say
            </h2>
          </motion.div>
        </div>

        {/* Unique Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="glass-card p-6 md:p-10 border-white/10 hover:border-accent/30 transition-all duration-500 group">
                {/* Quote Icon */}
                <div className="text-accent/20 group-hover:text-accent/40 transition-colors mb-6">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H7.0166C6.46432 8 6.0166 8.44772 6.0166 9V12C6.0166 12.5523 5.56888 13 5.0166 13H2.0166V21H5.0166Z" />
                  </svg>
                </div>
                
                <p className={`text-white/80 leading-relaxed mb-8 italic ${item.size === 'large' ? 'text-xl' : 'text-base'}`}>
                  &quot;{item.text}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-white/10 flex items-center justify-center text-accent font-black">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{item.name}</h4>
                    <p className="text-text-muted text-[10px] uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary text-sm mb-8">Join thousands of satisfied customers across the city.</p>
          <a href="#contact" className="btn-cta !py-5 !px-12">
            Experience Our Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
