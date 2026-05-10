"use client";

export default function Logo({ className = "w-10 h-10", iconOnly = false, light = false }) {
  return (
    <div className={`flex items-center gap-3 group transition-all duration-500 ${className}`}>
      {/* The Graphical Symbol */}
      <div className="relative w-full h-full flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl"
        >
          {/* Outer Industrial Hexagon Frame */}
          <path
            d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z"
            className={`${light ? 'fill-accent' : 'fill-primary'} transition-colors duration-500 group-hover:fill-accent`}
          />
          
          {/* Stylized 'M' with Recycling Motif */}
          <path
            d="M30 65V35L50 55L70 35V65"
            stroke={light ? "#0f172a" : "white"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Red Accent Node (The Precision Point) */}
          <circle cx="50" cy="55" r="6" className={light ? "fill-white" : "fill-accent"} />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col whitespace-nowrap">
          <span className={`font-black text-xl md:text-2xl tracking-tighter leading-none transition-colors ${light ? 'text-white' : 'text-primary'} group-hover:text-accent`}>
            MADIHA<span className="text-accent">.</span>
          </span>
          <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mt-0.5 ${light ? 'text-white/50' : 'text-text-secondary'}`}>
            Scrap Trading
          </span>
        </div>
      )}
    </div>
  );
}
