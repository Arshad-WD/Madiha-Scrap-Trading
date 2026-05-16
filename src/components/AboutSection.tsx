

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 text-gray-900">
              Why Choose <span className="text-amber-700">Madiha Scrap</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              For over a decade, Madiha Scrap Trading has been the trusted name in Mumbai&apos;s scrap recycling industry. We built our business on two simple principles: honest weighing and the best market prices.
            </p>
            
            <p className="text-gray-600 mb-8">
              Whether you are an individual clearing out household scrap, or a large industrial plant needing regular clearance, we have the logistics, licensing, and capital to handle transactions of any size instantly.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-amber-50 text-amber-700 font-semibold rounded-full border border-amber-200 text-sm">
                GST Invoices Provided
              </span>
              <span className="px-4 py-2 bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 text-sm">
                Free Pickup
              </span>
              <span className="px-4 py-2 bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 text-sm">
                Cash / UPI Payment
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Licensed & Certified</h3>
              <p className="text-gray-600 text-sm">Fully compliant with government environmental and trading regulations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden deductions. The rate we quote is the rate we pay.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">200+ Clients</h3>
              <p className="text-gray-600 text-sm">Trusted by households, factories, and commercial businesses alike.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Best Market Rates</h3>
              <p className="text-gray-600 text-sm">We constantly monitor market fluctuations to offer top value.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
