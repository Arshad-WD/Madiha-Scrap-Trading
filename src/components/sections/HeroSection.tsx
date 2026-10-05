"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

interface Slide {
  id: number;
  title: React.ReactNode;
  description: string;
  btnText: string;
  btnLink: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: (
      <>
        Welcome to <span>Madiha Scrap Trading</span>
      </>
    ),
    description:
      "Mumbai's premier licensed scrap dealer, scrap trader, and commercial clearance contractor. Authorized for high-tonnage industrial scrap collection, on-site digital scale weighing, and instant cash/bank payment.",
    btnText: "Get Price Quote",
    btnLink: "#contact",
    bgImage: "/images/hero-bg.jpg",
  },
  {
    id: 2,
    title: "Be Part of the Solution, Not Pollution",
    description:
      "Benchmarked practices for eco-friendly metal recycling, corporate interior dismantling, and certified heavy scrap disposal tailored across Mumbai and Maharashtra.",
    btnText: "Our Scrap Services",
    btnLink: "#services",
    bgImage: "/images/hero-2.png",
  },
  {
    id: 3,
    title: "Trusted by Leading Commercial & Industrial Entities",
    description:
      "Over 10 years of trusted scrap purchasing and clearance services for factories, corporate offices, construction yards, and commercial businesses with 100% digital scale accuracy and immediate payment.",
    btnText: "Contact Us Today",
    btnLink: "#contact",
    bgImage: "/images/hero-3.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const iconBoxesRef = useRef<HTMLDivElement>(null);

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (iconBoxesRef.current) {
      observer.observe(iconBoxesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* ======= Hero Section Carousel ======= */}
      <section
        id="hero"
        className={styles.hero}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slideBg} ${
              index === currentSlide ? styles.slideBgActive : ""
            }`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />
        ))}

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            if (!isActive) return null;
            return (
              <div
                key={slide.id}
                className="flex flex-col items-center w-full transition-opacity duration-700 ease-in-out"
              >
                <h2 className="animate-fadeInDown">{slide.title}</h2>
                <p className="animate-fadeInUp-delay-1">{slide.description}</p>
                <div className="animate-fadeInUp-delay-2">
                  <a href={slide.btnLink} className={styles.btnGetStarted}>
                    {slide.btnText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Prev/Next Navigation Controls */}
        <button
          onClick={handlePrev}
          className={styles.carouselControlPrev}
          aria-label="Previous Slide"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className={styles.carouselControlNext}
          aria-label="Next Slide"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators / Dots */}
        <div className={styles.carouselIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ======= Icon Boxes Section ======= */}
      <section id="icon-boxes" className={styles.iconBoxes} ref={iconBoxesRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Commercial Scrap Buying</a>
              </h4>
              <p className={styles.description}>
                Bulk purchasing of Iron (HMS 1 &amp; 2), Copper wire, Aluminium extrusions, Brass, and Stainless Steel scrap at highest daily market rates.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4m0 4h4m-4-4l-4 4m4-4l4 4" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Turnkey Office &amp; Scrap Clearance</a>
              </h4>
              <p className={styles.description}>
                Systematic office, retail shop, bank, and warehouse racking dismantling with full site clearance and scrap value offset.
              </p>
            </div>

            {/* Box 3 */}
            <div
              className={`${styles.iconBox} ${
                cardsVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-9 text-[#f6b024] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className={styles.title}>
                <a href="#services">Waste Oil &amp; E-Waste Disposal</a>
              </h4>
              <p className={styles.description}>
                Certified disposal of server racks, motherboards, electric motors, generators, boilers, and heavy plant machinery decommissioning.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
