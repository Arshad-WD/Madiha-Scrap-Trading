import React from "react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-8 z-[1000] flex flex-col items-center">
      <style>{`
        .industrial-dock {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 10px 6px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        @media (min-width: 768px) {
          .industrial-dock {
            padding: 12px 8px;
            gap: 16px;
          }
        }

        .status-light {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
          animation: status-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (min-width: 768px) {
          .status-light {
            width: 8px;
            height: 8px;
          }
        }

        @keyframes status-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(0.9); }
        }

        .action-orb {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          color: white;
          text-decoration: none;
        }

        @media (min-width: 768px) {
          .action-orb {
            width: 48px;
            height: 48px;
          }
        }

        .action-orb:hover {
          transform: scale(1.1) translateY(-2px);
        }

        .orb-whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
        }

        .orb-call {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
        }

        .orb-label {
          position: absolute;
          right: 100%;
          margin-right: 20px;
          background: #111827;
          color: white;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .action-orb:hover .orb-label {
          opacity: 1;
          transform: translateX(0);
        }

        /* Ambient glow behind dock */
        .dock-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }
      `}</style>

      <div className="industrial-dock">
        <div className="dock-glow" />
        
        {/* Status Indicator */}
        <div className="flex flex-col items-center gap-0.5 mb-0.5">
          <div className="status-light" />
          <span className="text-[7px] md:text-[9px] font-black text-gray-400 uppercase tracking-tighter">Online</span>
        </div>

        {/* WhatsApp Orb */}
        <a 
          href="https://wa.me/918291312506?text=Hello%21%20I%20want%20to%20inquire%20about%20scrap%20rates." 
          target="_blank" 
          rel="noopener noreferrer"
          className="action-orb orb-whatsapp"
          aria-label="WhatsApp Us"
        >
          <span className="orb-label hidden md:block">Chat on WhatsApp</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>

        {/* Divider */}
        <div className="w-4 md:w-6 h-[1px] bg-white/10" />

        {/* Call Orb */}
        <a 
          href="tel:+918291312506" 
          className="action-orb orb-call"
          aria-label="Call Us"
        >
          <span className="orb-label hidden md:block">Call for Prices</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
