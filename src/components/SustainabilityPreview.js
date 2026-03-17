"use client";
import Link from "next/link";
import styles from "./SustainabilityPreview.module.css";

export default function SustainabilityPreview() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src="/pageimage/sustainabilitypic.png"
          alt="Oki-Mode Sustainable Fashion"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Sustainability at Oko-Mode</h2>

        <p className={styles.text}>
          At Oko-Mode, sustainability is not a marketing trend,it is a long-term
          commitment embedded into sourcing, production, operations, and
          logistics. As a modern fashion brand, Oko-Mode recognizes that the
          fashion industry has significant environmental and social impacts.
          Therefore, every decision from raw materials to final delivery is
          guided by responsibility, transparency, and continuous improvement.
        </p>

        <Link href="/sustainability" className={styles.button}>
          Read More
        </Link>
      </div>
    </section>
  );
}
