import styles from "./CeoPage.module.css";

export default function CeoPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>

        <div className={styles.header}>
          <img src="/pageimage/ceopic.jpeg" alt="CEO Öko-Mode" />
          <h1>Message from the CEO</h1>
        </div>

        <div className={styles.content}>
          <p>
            Welcome to Öko-Mode.
            The fashion industry is at a crossroads. For too long, the quest
            for style has come at a steep cost to our planet.
          </p>

          <p>
            At Öko-Mode, we believe that the clothes we wear and the bags we
            carry should tell a story of rejuvenation, not depletion.
          </p>

          <p>
            We didn't start this company just to be another sourcing agent;
            we started it to prove that high-quality fashion and deep-rooted
            sustainability are not mutually exclusive.
          </p>

          <p>
            Our name, "Öko," reflects our commitment to ecological integrity...
          </p>

          <h3>What Defines Us</h3>
          <ul>
            <li>Eco-Friendly Basics – Organic T-shirts & Polo shirts</li>
            <li>Durable Accessories – Canvas & Jute bags</li>
            <li>Sustainable Footwear – Jute espadrilles</li>
            <li>Technical Apparel – Denim & Woven garments</li>
          </ul>

          <h3>Our Promise</h3>
          <p>
            Sustainability is not a buzzword — it is our operating system.
            We work only with ethical manufacturers who respect fair labor
            and environmental standards.
          </p>

          <p>
            Warm regards,<br /><br />
            <strong>Ahmed Faisal</strong><br />
            Founder & CEO, Öko-Mode
          </p>
        </div>
      </div>
    </section>
  );
}
