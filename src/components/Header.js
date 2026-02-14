import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";

export default function Header() {
  return (
    <header className={styles.header}>
      
      {/* Logo Image */}
      <div className={styles.logo}>
        <Link href="/">
          <img 
            src="/pageimage/okoLogo.png
            " 
            alt="Oko Sourcing Logo" 
            className={styles.logoImg}
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/vision">Company Vision</Link>
        <Link href="/products">Product</Link>
        <Link href="/service">Service</Link>
        <Link href="/customers-eye">Customer's Eye</Link>
        <Link href="/contact" className={styles.contactBtn}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
