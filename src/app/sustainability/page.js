import styles from "./Sustainability.module.css";

export const metadata = {
  title: "Sustainability | Oko-Mode",
  description:
    "Oko-Mode’s commitment to sustainable materials, ethical production, and responsible logistics.",
};

export default function SustainabilityPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.bigCard}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <h1>Sustainability at Oko-Mode</h1>
            <p>Responsible. Transparent. Future-Focused.</p>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <p>
            At Oko-Mode, sustainability is not a marketing trend — it is a
            long-term commitment embedded into sourcing, production, operations,
            and logistics. As a modern fashion brand, Oko-Mode recognizes that
            the fashion industry has significant environmental and social
            impacts. Therefore, every decision — from raw materials to final
            delivery — is guided by responsibility, transparency, and continuous
            improvement.
          </p>
        </section>

        {/* MATERIALS SECTION */}
        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Responsible & Sustainable Material Sourcing</h2>
            <p>
              Oko-Mode prioritizes environmentally responsible materials that
              reduce harm to ecosystems while maintaining durability and premium
              quality. We use organic cotton, recycled fabrics, TENCEL™ Lyocell,
              low-impact dyes, and continuously explore innovative sustainable
              fibers.
            </p>
          </div>

          <div className={styles.image}>
            <img
              src="/pageimage/sustanibility1.png
            "
              alt="Sustainable fabrics"
            />
          </div>
        </section>

        {/* FACTORY SECTION */}
        <section className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.text}>
            <h2>Ethical & Sustainable Factory Partnerships</h2>
            <p>
              We collaborate with factories that uphold fair labor standards,
              ensure safe working conditions, provide fair wages, and implement
              environmentally responsible production systems such as
              water-saving technologies, renewable energy integration, and
              proper waste treatment.
            </p>
          </div>

          <div className={styles.image}>
            <img
              src="/pageimage/sustainibility2.png
            "
              alt="Sustainable fabrics"
            />
          </div>
        </section>

        {/* LOGISTICS SECTION */}
        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Responsible Logistics & Operations</h2>
            <p>
              Sustainability extends beyond sourcing and manufacturing. Oko-Mode
              integrates responsible practices into its internal operations,
              packaging systems, and distribution strategies by optimizing
              shipments, reducing waste, using recyclable materials, and
              collaborating with carbon-conscious logistics partners.
            </p>
          </div>

          <div className={styles.image}>
            <img src="/pageimage/sustainiblity 3.png" alt="Green logistics" />
          </div>
        </section>

        {/* COMMITMENT */}
        <section className={styles.commitment}>
          <h2>Transparency & Continuous Improvement</h2>
          <p>
            Sustainability is an ongoing journey. Oko-Mode is committed to
            measurable goals, increasing certified sustainable materials,
            improving supply chain transparency, and designing durable, timeless
            products that encourage conscious consumption.
          </p>
        </section>
      </div>
    </main>
  );
}
