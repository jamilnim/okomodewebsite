import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>

        {/* Header Section with Wave */}
        <div className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <h1>🌿 About Oko-Moda</h1>
            <h2>
              Sustainable Sourcing. Technical Excellence. Trusted Partnerships.
            </h2>
          </div>

          {/* Wave SVG */}
          <svg
            className={styles.wave}
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C250,150 900,0 1440,70 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p>
            Oko-Moda is a professional sourcing company specialized in bags,
            T-shirts, and denim products, with deep expertise in sustainable
            and responsible manufacturing.
          </p>

          <p>
            With strong experience in organic cotton, recycled materials, and
            eco-conscious production, we work closely with certified factories
            to deliver high-quality products that meet international standards
            for sustainability, transparency, and compliance.
          </p>

          <h3>What We Do</h3>
          <p>
            We manage the entire sourcing and development process — from concept
            to final shipment — ensuring efficiency, quality control, and cost
            effectiveness at every stage.
          </p>

          <ul>
            <li>Certified organic and recycled material sourcing</li>
            <li>OEKO-TEX compliant production partners</li>
            <li>Fully traceable and transparent supply chain</li>
            <li>Strong technical development support</li>
            <li>Professional quality control system</li>
            <li>Cost-effective and technically sound solutions</li>
            <li>Design and product development assistance</li>
          </ul>

          <h3>Global Supplier Network</h3>
          <p>
            Oko-Moda collaborates with more than 100 trusted suppliers across:
          </p>

          <ul>
            <li>Bangladesh</li>
            <li>India</li>
            <li>Vietnam</li>
            <li>Turkey</li>
            <li>China</li>
          </ul>

          <h3>🎯 Our Mission</h3>
          <p>
            To source from the best partners worldwide while ensuring effective
            pricing and sustainable production practices.
          </p>

          <h3>🌍 Our Vision</h3>
          <p>
            To make affordable, sustainable fashion accessible to conscious
            customers around the world.
          </p>
        </div>

      </section>
    </div>
  );
}
