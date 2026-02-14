"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <img 
            src="/pageimage/okoLogo.png"
            alt="Oko Sourcing Logo"
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* Burger Button (Mobile Only) */}
      <div 
        className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Product</Link>
        <Link href="/services">Service</Link>
        <Link href="/customers-eye">Customer's Eye</Link>
        <Link href="/admin/products">Admin</Link>
        <Link href="/contact" className={styles.contactBtn}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
