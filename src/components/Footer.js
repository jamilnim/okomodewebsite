import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <Link href="/">
            <img
              src="/pageimage/okoLogo.png
            "
              alt="Oko Sourcing Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>
        <p>Reliable manufacturing partner for sustainable bag production.</p>
        <p>© {new Date().getFullYear()} Oko-mode. All rights reserved.</p>
      </div>
    </footer>
  );
}
