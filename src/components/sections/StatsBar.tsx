"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./StatsBar.module.css";

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
    <div ref={ref} className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.value}>
                {inView ? <Counter end={stat.value} /> : stat.value}
                {stat.suffix}
              </div>
              <div className={styles.label}>
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
