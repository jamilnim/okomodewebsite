import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left - Navigation */}
        <div className={styles.navSection}>
          <h4>Quick Links</h4>
          <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Middle - Logo + Tagline */}
        <div className={styles.middleSection}>
          <Link href="/" className={styles.logoWrapper}>
            <img
              src="/pageimage/okoLogo.png"
              alt="Oko Mode Logo"
              className={styles.logoImg}
            />
          </Link>

          <p className={styles.tagline}>
            Reliable manufacturing partner for sustainable bag production.
          </p>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Öko-Mode. All rights reserved.
          </p>
        </div>

        {/* Right - Address */}
        <div className={styles.addressSection}>
          <h4>Contact</h4>
          <p>5250 Harmony Avenue</p>
          <p>North Hollywood, CA 01601, USA</p>
          <p>+1 818 821 7841</p>
        </div>

      </div>
    </footer>
  );
}
