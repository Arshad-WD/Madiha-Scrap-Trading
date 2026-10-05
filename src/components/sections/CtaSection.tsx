import React from "react";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section id="cta" className={styles.ctaSection}>
      <div className={styles.container}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-3xl">
            <h3 className={styles.ctaHeading}>
              Let&apos;s discuss how we can help you dispose of your scrap?
            </h3>
            <p className={styles.ctaDesc}>
              Madiha Scrap Trading provides on-site scrap evaluation, certified digital scale weighing, official GST tax invoicing, and immediate payment settlement via NEFT/RTGS or Cash.
            </p>
          </div>

          <div className="shrink-0">
            <a href="tel:+918291312506" className={styles.ctaBtn}>
              Call Us Today
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
