"use client";

import { motion } from "framer-motion";
import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+91 82913 12506";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "918291312506";

  return (
    <section id="contact" className="section-wrapper bg-white relative overflow-hidden">
      {/* Cinematic Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Editorial Content */}
          <div className="lg:col-span-5 pt-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <div className="section-label mb-8">The Alchemist / Contact</div>
                <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter leading-[0.9]">
                  Transform <br/>
                  <span className="text-accent italic">Material</span> <br/>
                  Into Value.
                </h2>
                <p className="text-text-secondary text-xl leading-relaxed max-w-md">
                  We don't just buy scrap; we engineer its return to the global supply chain with institutional precision.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <a
                  href={`tel:${phone}`}
                  className="group flex items-center gap-4 md:gap-6 p-5 sm:p-8 bg-slate-50 border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] hover:bg-white hover:shadow-2xl"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-text-secondary text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Direct Line</p>
                    <p className="text-primary text-lg sm:text-2xl font-black truncate">{phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsapp}`}
                  className="group flex items-center gap-4 md:gap-6 p-5 sm:p-8 bg-accent rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] shadow-2xl"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/70 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Instant Channel</p>
                    <p className="text-white text-lg sm:text-2xl font-black">Trade Operations</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: The High-End Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white border border-slate-100 p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              {/* Internal Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-[5rem]" />
              
              <div className="relative z-10">
                <InquiryForm />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
