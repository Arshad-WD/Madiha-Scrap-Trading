"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Engineering Works",
    role: "Local Business Owner",
    colSpan: "md:col-span-2 md:row-span-2",
    size: "text-2xl md:text-4xl",
    bg: "bg-amber-50",
    text: "Excellent service! They arrived within 2 hours of my call. The weighing was transparent, and I got paid instantly. The most professional scrap dealers I've dealt with.",
  },
  {
    name: "Vikram Singh",
    company: "Singh Developers",
    role: "Construction Group",
    colSpan: "md:col-span-1 md:row-span-1",
    size: "text-lg",
    bg: "bg-white",
    text: "Madiha handles all our construction site scrap. Punctual, GST invoices provided, and quotes are always the best in market.",
  },
  {
    name: "Meera Reddy",
    company: "TechPark Corporate",
    role: "Facility Manager",
    colSpan: "md:col-span-2 md:row-span-1",
    size: "text-xl",
    bg: "bg-slate-50",
    text: "They executed a complete interior dismantling for two of our office floors seamlessly across night shifts. Absolutely amazing.",
  },
  {
    name: "Amit Patel",
    company: "Patel Manufacturing Co.",
    role: "Industrial Client",
    colSpan: "md:col-span-1 md:row-span-2",
    size: "text-xl",
    bg: "bg-white",
    text: "We used Madiha for our factory clearance. They managed 5 tons of metal scrap effortlessly.",
  },
  {
    name: "Sunita Verma",
    company: "Local Retailer",
    role: "Store Owner",
    colSpan: "md:col-span-2 md:row-span-1",
    size: "text-lg",
    bg: "bg-amber-50",
    text: "Cleared all my heavy commercial scrap from the 4th floor. Very polite staff and honest scales.",
  }
];

const clients = [
  "Tata Projects", "Reliance Industries", "Larsen & Toubro", 
  "Godrej Properties", "Shapoorji Pallonji", "Mahindra Lifespaces", 
  "Adani Group", "JSW Steel"
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden flex flex-col items-center">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full mb-16 text-center z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="inline-block h-1 w-10 bg-amber-500" />
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Reputation</span>
          <span className="inline-block h-1 w-10 bg-amber-500" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-slate-900 mb-4">
          Client <span className="text-amber-500">Stories</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-lg mb-10">
          We strip away the hassle of scrap trading. Here is what our commercial and local clients have to say.
        </p>
      </div>

      {/* Infinite Marquee of Clients */}
      <div className="relative w-full overflow-hidden py-8 mb-20 bg-slate-50 border-y border-slate-200 shadow-sm -rotate-1 scale-105 z-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap animate-marquee items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <span key={idx} className="text-4xl md:text-6xl font-black text-transparent px-8" style={{ WebkitTextStroke: "1px #94a3b8" }}>
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-20">
        
        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${t.colSpan} ${t.bg} border border-slate-200 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:shadow-2xl hover:border-amber-300 transition-all duration-500`}
            >
              <div className="mb-8 relative">
                <svg className="w-12 h-12 text-amber-200 absolute -top-4 -left-4 -z-10 group-hover:-translate-y-2 transition-transform duration-500 opacity-50 block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H7.0166C6.46432 8 6.0166 8.44772 6.0166 9V12C6.0166 12.5523 5.56888 13 5.0166 13H2.0166V21H5.0166Z" />
                </svg>
                <p className={`${t.size} text-slate-800 font-medium leading-relaxed relative z-10 outfit-font tracking-tight`}>
                  "{t.text}"
                </p>
              </div>

              <div className="mt-auto">
                <div className="w-10 h-1 bg-amber-400 mb-4 rounded-full group-hover:w-16 transition-all duration-300" />
                <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  {t.company}
                </p>
                <p className="text-sm text-slate-400 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] -z-10 pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-100 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/2" />

      <style>{`
        .outfit-font { font-family: var(--font-barlow), sans-serif; }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
