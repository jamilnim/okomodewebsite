import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3>JUSTE BAG SOURCING</h3>
        <p>Reliable manufacturing partner for sustainable bag production.</p>
        <p>© {new Date().getFullYear()} Juste Bag. All rights reserved.</p>
      </div>
    </footer>
  );
}
