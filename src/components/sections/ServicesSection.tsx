

import React from "react";

interface Service {
  num: string;
  title: string;
  desc: string;
  Icon: () => React.ReactNode;
}

const services: Service[] = [
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
    num: "06",
    title: "24/7 Inquiry",
    desc: "WhatsApp or call us any time of day or night for price enquiries, pickups, or bulk deal negotiations.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Bulk Pickup & Transport",
    desc: "We arrange free transportation for large-volume scrap from factories, warehouses, and construction sites across Mumbai.",
    Icon: () => (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8m-8 0a2 2 0 104 0m8 0a2 2 0 10-4 0m4 0H16m2-10l-3-4H9L6 9" />
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
