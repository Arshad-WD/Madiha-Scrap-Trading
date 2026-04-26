"use client";

import { motion } from "framer-motion";

export default function HeroCarousel() {
  return (
    <section id="home" className="relative min-h-screen bg-primary flex items-center overflow-hidden pt-10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-lighter/20 rounded-full blur-[120px] -z-0 -translate-x-1/4 translate-y-1/4" />

      {/* Main Content Area */}
      <div className="section-container relative z-10 pt-44 pb-20 md:pt-40 md:pb-40">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-8">#1 Scrap Dealer in the City</div>
              <h1 className="heading-xl text-white mb-8">
                Sell Your Scrap <br />
                <span className="text-accent">For Best Cash Price.</span>
              </h1>
              <p className="body-text max-w-xl mb-12 text-lg md:text-xl font-medium">
                Professional doorstep pickup service. Instant payment. We buy Metal, Plastic, E-Waste, and Industrial scrap with 100% transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
                >
                  Get Free Quote
                </motion.a>
                <motion.a 
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </motion.a>
              </div>

              {/* Stats / Trust Badges */}
              <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-primary-light overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-wider">Trusted by 5,000+ Customers</p>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3 h-3 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <div className="lg:col-span-5 hidden lg:block relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative"
             >
                <div className="aspect-square bg-gradient-to-tr from-accent/20 to-primary-lighter/30 rounded-[4rem] rotate-6 absolute inset-0 blur-2xl" />
                <div className="relative aspect-square glass-card overflow-hidden border-accent/20 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                    alt="Scrap Material"
                   />
                </div>
                
                {/* Floating Tags */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 glass-card p-6 border-accent/50 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                >
                   <span className="text-accent font-black text-xl">Best Rates ✓</span>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
