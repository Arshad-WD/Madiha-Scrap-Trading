

import React from "react";

interface Service {
  num: string;
  title: string;
  desc: string;
  Icon: () => React.ReactNode;
}

const services: Service[] = [
  {
    num: "01",
    title: "Fair Weighing",
    desc: "Certified digital scales — every gram counted transparently in front of you. Zero hidden deductions, zero disputes.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Instant Payment",
    desc: "Cash, UPI, or bank transfer — paid on the same visit, the moment the weight is confirmed. No waiting, ever.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Free Pickup",
    desc: "Doorstep collection at no charge — homes, factories, warehouses. We bring the labour and the vehicle.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Licensed Dealer",
    desc: "Registered scrap dealer with all government approvals. We issue proper GST invoices for every transaction.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Same Day Service",
    desc: "Call in the morning, get picked up by evening. Fast, reliable, and always on time across Mumbai.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "24/7 Inquiry",
    desc: "WhatsApp or call us any time of day or night for price enquiries, pickups, or bulk deal negotiations.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-1 w-10" style={{ background: "var(--accent)" }} />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-600">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase" style={{ color: "var(--text-primary)" }}>
            Our <span style={{ color: "var(--accent)" }}>Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-amber-50 transition-colors pointer-events-none">
                {service.num}
              </div>

              {/* Icon Box */}
              <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors relative z-10">
                <service.Icon />
              </div>

              <h3 className="text-xl font-bold uppercase mb-3 relative z-10 text-gray-900 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
