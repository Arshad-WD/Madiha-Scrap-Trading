

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-gray-900">
            Ready to <span className="text-amber-700">Sell Scrap?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contact us today for a free estimate and rapid pickup service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
            
            <div className="flex flex-col gap-6 mb-10 overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600 break-words">+91 82913 12907</p>
                  <p className="text-gray-600 break-words">+91 96195 90481</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 break-all">madihascraptrading@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600 break-words">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="tel:+918291312907" className="flex-1 w-full bg-amber-600 text-white flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow text-center whitespace-nowrap">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
              <a href="https://wa.me/918291312907?text=Hello%21%20I%27d%20like%20to%20get%20a%20scrap%20price%20quote." target="_blank" rel="noopener noreferrer" className="flex-1 w-full border-2 border-green-500 text-green-600 flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg font-bold hover:bg-green-50 transition-colors text-center whitespace-nowrap">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-8 bg-amber-50 p-4 rounded-lg flex items-start gap-3 border border-amber-100">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-sm text-amber-900">
                <strong>Pro Tip:</strong> Send photos of your scrap on WhatsApp for a quick price estimate.
              </p>
            </div>
            
          </div>

          <div className="h-[400px] lg:h-auto bg-gray-100">
            <iframe
              title="Madiha Scrap Trading Google Maps Location"
              src="https://maps.google.com/maps?q=Mumbai&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
