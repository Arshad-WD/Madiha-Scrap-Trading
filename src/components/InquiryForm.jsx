"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    scrapType: "",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", scrapType: "", details: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <h3 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tighter leading-none">Contact Our <br/><span className="text-accent">Trading Experts</span></h3>
        <p className="text-text-secondary text-lg max-w-md">Transform your industrial scrap into liquidity with our precise valuation and logistics.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label htmlFor="full-name" className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-2 block transition-colors group-focus-within:text-accent">The Result / Full Name</label>
          <div className="relative">
            <input
              id="full-name"
              type="text"
              required
              placeholder="e.g. Michael Chen"
              className="w-full bg-slate-50 border border-slate-100 p-4 sm:p-6 rounded-2xl text-primary text-base sm:text-lg outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-slate-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="phone-number" className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-2 block transition-colors group-focus-within:text-accent">Communication / Phone</label>
          <div className="relative">
            <input
              id="phone-number"
              type="tel"
              required
              placeholder="e.g. +91 82913 12907"
              className="w-full bg-slate-50 border border-slate-100 p-4 sm:p-6 rounded-2xl text-primary text-base sm:text-lg outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-slate-300"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="scrap-category" className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-2 block transition-colors group-focus-within:text-accent">Material Classification / Category</label>
          <div className="relative">
            <select
              id="scrap-category"
              required
              className="w-full bg-slate-50 border border-slate-100 p-4 sm:p-6 rounded-2xl text-primary text-base sm:text-lg outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
              value={formData.scrapType}
              onChange={(e) => setFormData({ ...formData, scrapType: e.target.value })}
            >
              <option value="" disabled>Select Material</option>
              <option value="Metal">Industrial Metal</option>
              <option value="Plastic">Commercial Plastic</option>
              <option value="E-Waste">High-Precision E-Waste</option>
              <option value="Industrial">Large-Scale Industrial</option>
              <option value="Other">Custom Batch</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group">
          <label htmlFor="batch-details" className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4 mb-2 block transition-colors group-focus-within:text-accent">Batch Specifics / Details</label>
          <div className="relative">
            <textarea
              id="batch-details"
              rows="3"
              placeholder="Define weight, purity, or logistics requirements..."
              className="w-full bg-slate-50 border border-slate-100 p-4 sm:p-6 rounded-2xl text-primary text-base sm:text-lg outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none placeholder:text-slate-300"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent text-white font-black py-6 rounded-2xl text-lg uppercase tracking-[0.2em] shadow-2xl shadow-accent/20 transition-all active:scale-[0.98] disabled:opacity-50 mt-6 hover:bg-primary"
        >
          {status === "loading" ? "Processing Analysis..." : "Initialize Valuation"}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/10 border border-accent/20 p-4 rounded-xl mt-4"
            >
              <p className="text-accent text-sm font-bold text-center">
                ✓ Message sent! We will call you within 15 mins.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
