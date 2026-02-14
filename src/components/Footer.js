import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        <Link href="/" className={styles.logoWrapper}>
          <img
            src="/pageimage/okoLogo.png"
            alt="Oko Sourcing Logo"
            className={styles.logoImg}
          />
        </Link>

        <p className={styles.tagline}>
          Reliable manufacturing partner for sustainable bag production.
        </p>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Oko-mode. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
