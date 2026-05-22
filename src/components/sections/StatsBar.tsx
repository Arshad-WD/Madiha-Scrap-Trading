

"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "YEARS EXPERIENCE", value: 10, suffix: "+" },
  { label: "TONS MONTHLY", value: 700, suffix: "+" },
  { label: "HAPPY CLIENTS", value: 200, suffix: "+" },
  { label: "MATERIALS HANDLED", value: 60, suffix: "+" },
];

export default function StatsBar() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 text-center bg-white hover:bg-gray-50 transition-colors">
              <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                {inView ? <Counter end={stat.value} /> : "0"}
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}
