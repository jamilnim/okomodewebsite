"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAdminOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      {/* Burger */}
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
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/products" onClick={() => setMenuOpen(false)}>Product</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Service</Link>
       

        {/* Admin Dropdown */}
        <div className={styles.dropdown} ref={dropdownRef}>
          <span
            className={styles.dropdownTitle}
            onClick={() => setAdminOpen(!adminOpen)}
          >
            Admin ▾
          </span>

          {adminOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                href="/admin/products"
                onClick={() => {
                  setAdminOpen(false);
                  setMenuOpen(false);
                }}
              >
                Products
              </Link>
              <Link
                href="/admin/messages"
                onClick={() => {
                  setAdminOpen(false);
                  setMenuOpen(false);
                }}
              >
                Messages
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className={styles.contactBtn}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
