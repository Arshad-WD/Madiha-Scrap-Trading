"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Request a Pickup",
    desc: "Contact us via Phone or WhatsApp. Tell us what you have and your location. We'll give you a quick estimate.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Get Valuation",
    desc: "Our expert team evaluates your items based on the latest market prices to ensure you get the maximum value.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Scheduled Collection",
    desc: "We arrive at your doorstep for a fast, hassle-free pickup. Our team handles all the loading and logistics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Payment",
    desc: "Receive your payment on the spot via Cash, UPI, or Bank Transfer. Quick, secure, and satisfying.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-wrapper bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-6">Our Process</div>
            <h2 className="heading-lg md:heading-xl text-primary mb-8">
              How It <span className="text-accent italic">Works</span>
            </h2>
          </motion.div>
        </div>

        {/* Unique Vertical Zig-Zag Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div key={i} className={`relative lg:flex items-center gap-12 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                
                {/* Content */}
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`bg-slate-50 border border-slate-100 p-6 md:p-10 lg:p-12 relative rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 ${i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}
                  >
                    <div className="absolute top-0 right-0 p-4 text-primary/5 font-black text-6xl leading-none italic select-none">
                      0{i + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 italic tracking-tight">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Central Point */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-accent shadow-xl z-10" />
                </div>

                {/* Empty Half for Balance */}
                <div className="lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Connector Line */}
        <div className="absolute left-8 top-[20%] bottom-[10%] w-px bg-slate-200 lg:hidden" />
      </div>
    </section>
  );
}
