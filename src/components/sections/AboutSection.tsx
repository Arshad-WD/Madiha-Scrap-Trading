import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>About Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/about-img.jpg"
                alt="About Madiha Scrap Trading"
                width={650}
                height={450}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className={styles.contentHeading}>
              Mumbai&apos;s Trusted Scrap Dealer &amp; Commercial Demolition Specialist
            </h3>
            
            <p className={styles.paragraph}>
              Madiha Scrap Trading Co. is one of Mumbai&apos;s premier licensed scrap dealers, scrap traders, and industrial clearance contractors operating out of Saki Naka, Mumbai. For over 10 years, we have specialized in high-volume commercial scrap purchasing, factory dismantling, corporate office interior demolition, and non-ferrous/ferrous metal recycling.
            </p>
            
            <div className={styles.highlightBox}>
              <strong>
                We provide 100% digital scale weighing accuracy, official GST tax invoicing, and immediate payment settlement via NEFT/RTGS, UPI, or Cash for all commercial scrap disposal.
              </strong>
            </div>

            <div className="mt-6">
              <a href="#contact" className={styles.btnLearnMore}>
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

