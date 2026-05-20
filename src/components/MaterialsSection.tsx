

import React from "react";

const materials = [
  { category: "Ferrous", name: "Iron Scrap", desc: "MS plates, angles, rods, channels, castings", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { category: "Non-Ferrous", name: "Copper Scrap", desc: "Wires, pipes, motors, transformers", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Aluminium", desc: "Sheets, extrusions, cans, utensils", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Ferrous", name: "Steel Scrap", desc: "Structural steel, TMT bars, beams", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { category: "Non-Ferrous", name: "Brass", desc: "Fittings, valves, castings, turnings", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Stainless Steel", desc: "304, 316 grade, utensils, vessels", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Lead", desc: "Battery plates, cable sheathing, pipes", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Non-Ferrous", name: "Zinc", desc: "Die castings, galvanised sheets, ingots", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { category: "Electronics", name: "E-Waste", desc: "PCBs, CPUs, laptops, phones, servers", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { category: "Paper", name: "Paper & Cardboard", desc: "Newspapers, cartons, office paper", color: "bg-green-100 text-green-700 border-green-200" },
  { category: "Plastic", name: "Plastic", desc: "PET bottles, HDPE, industrial plastic", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { category: "Industrial", name: "Industrial Machinery", desc: "Old equipment, motors, pumps, presses", color: "bg-rose-100 text-rose-700 border-rose-200" },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-gray-900">
            What We <span className="text-amber-700">Buy</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We purchase a wide variety of scrap materials at the best market rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((mat, i) => (
            <div 
              key={i} 
              className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:shadow-md hover:border-amber-300"
            >
              <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border mb-4 ${mat.color}`}>
                {mat.category}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{mat.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{mat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">Don't see your material listed?</h4>
            <p className="text-amber-800">We probably still buy it. Contact us for a quick quote.</p>
          </div>
          <a 
            href="https://wa.me/918291312506?text=Hello!%20I%20have%20some%20materials%20and%20would%20like%20to%20get%20a%20quick%20price%20quote." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="shrink-0 px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-lg shadow-md hover:bg-[#20bd5a] transition-all hover:-translate-y-1 flex items-center gap-2"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get a Quote via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
