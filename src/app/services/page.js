import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>

        {/* Header Section */}
        <div className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <h1>🌿 Our Services</h1>
            <h2>End-to-End Sourcing Solutions — All in One Place</h2>
          </div>

          {/* Wave */}
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

          <h3>Strategic Sourcing & Win-Win Price Negotiation</h3>
          <p>
            We source from a carefully selected global supplier network across
            Bangladesh, India, Vietnam, Turkey, and China.
          </p>
          <p>
            Our pricing strategy ensures competitive and realistic pricing while
            maintaining ethical production standards and long-term supplier
            relationships.
          </p>

          <h3>Sustainable & Responsible Sourcing</h3>
          <p>
            Sustainability is at the core of our sourcing strategy. We specialize
            in organic cotton, recycled materials, eco-friendly trims, and
            low-impact production processes.
          </p>

          <h3>Full Traceability & Transparency</h3>
          <p>
            We prioritize supply chain transparency and ensure traceability at
            every production stage, including certification validation and
            compliance monitoring.
          </p>

          <h3>Quality Audit & Technical Product Expertise</h3>
          <p>
            Our quality control system includes pre-production checks, inline
            inspections, final inspections, measurement verification, and
            packaging compliance control.
          </p>

          <h3>Product Design & Development</h3>
          <p>
            We support brands from idea to finished product through fabric
            selection, technical documentation, sampling coordination, and cost
            optimization.
          </p>

          <h3>Sampling & Salesman Samples</h3>
          <p>
            We manage prototype samples, fit samples, pre-production samples,
            and salesman samples to ensure product accuracy before bulk
            production.
          </p>

          <h3>Documentation & Import Support</h3>
          <p>
            We provide complete documentation support including invoices,
            certificates, compliance documents, and freight coordination.
          </p>

          <h3>Social Sustainability & Compliance Audits</h3>
          <p>
            We verify ethical labor practices, workplace safety standards, and
            environmental compliance to ensure responsible manufacturing.
          </p>

          <h3>All-in-One Integrated Service</h3>
          <p>
            Oko-Moda delivers a fully integrated sourcing solution, reducing
            risk, improving efficiency, and creating measurable value for our
            partners.
          </p>

        </div>
      </section>
    </div>
  );
}
