import styles from "./ServiceHome.module.css";
import Link from "next/link";

export default function ServiceHome() {
  return (
    <section className={styles.service}>
      <div className={styles.content}>
        <h2>🌿 Our Services</h2>
        <h3>End-to-End Sourcing Solutions — All in One Place</h3>

        <p>
          At Oko-Moda, we provide a complete sourcing and product development
          solution for brands seeking reliability, sustainability, and
          competitive pricing. Our integrated approach ensures efficiency,
          transparency, and long-term partnership value at every stage of the
          supply chain.
        </p>

        <p>
          From concept to final shipment, we manage the entire process with
          technical expertise, structured quality control, and responsible
          sourcing standards.
        </p>

        <h4>Strategic Sourcing & Win-Win Price Negotiation</h4>

        <p>
          We source from a carefully selected global supplier network across
          Bangladesh, India, Vietnam, Turkey, and China.
        </p>

        <Link href="/services" className={styles.button}>
          Know More
        </Link>
      </div>

      <div className={styles.image}></div>
    </section>
  );
}
