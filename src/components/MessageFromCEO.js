import styles from "./MessageFromCEO.module.css";
import Link from "next/link";

export default function MessageFromCEO() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side Image */}
        <div className={styles.imageWrapper}>
          <img
            src="/pageimage/ceopic.png"   /* put CEO image in public/pageimage */
            alt="CEO Öko-Mode"
          />
        </div>

        {/* Right Side Text */}
        <div className={styles.content}>
          <h2>Message from the CEO</h2>

          <p>
            Welcome to Öko-Mode.
            The fashion industry is at a crossroads. For too long, the quest
            for style has come at a steep cost to our planet.
          </p>

          <p>
            At Öko-Mode, we believe that the clothes we wear and the bags we
            carry should tell a story of rejuvenation, not depletion.
          </p>

          <Link href="/ceo-message" className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
