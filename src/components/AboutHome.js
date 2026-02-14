import styles from "./AboutHome.module.css";
import Link from "next/link";

export default function AboutHome() {
  return (
    <section className={styles.about}>
      <div className={styles.image}>


      </div>

      <div className={styles.content}>
        <h2>🌿 About Oko-Mode</h2>
        <h3>Sustainable Sourcing. Technical Excellence. Trusted Partnerships.</h3>

        <p>
          Oko-Moda is a professional sourcing company specialized in bags,
          T-shirts, and denim products, with deep expertise in sustainable and
          responsible manufacturing.
        </p>

        <p>
          With strong experience in organic cotton, recycled materials, and
          eco-conscious production, we work closely with certified factories
          to deliver high-quality products that meet international standards
          for sustainability, transparency, and compliance.
        </p>

        <Link href="/about" className={styles.button}>
          Know More
        </Link>
      </div>
    </section>
  );
}
