import styles from "./HeroSport.module.css";
import Link from "next/link";

export default function HeroSport() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Premium Global Bag Sourcing Partner</h1>

        <p className={styles.slogan}>
          Sustainable Materials. Certified Factories. Reliable Delivery.
        </p>

        <ul className={styles.trustPoints}>
          <li>✔ 20+ Years Supply Chain Experience</li>
          <li>✔ ISO & BSCI Certified Factories</li>
          <li>✔ Custom OEM / ODM Solutions</li>
        </ul>

        <div className={styles.buttons}>
          <Link href="/products" className={styles.portfolioBtn}>
            View Portfolio
          </Link>
          <Link href="/contact" className={styles.contactBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
