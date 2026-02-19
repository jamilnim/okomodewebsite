"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      alert("Error sending message");
    } else {
      alert("Message sent successfully");
      setForm({ name: "", email: "", mobile: "", message: "" });
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      <div className={styles.address}>
        <h3>Address</h3>
        <p>5250 Harmony Avenue, North Hollywood, CA 01601, USA</p>
        <p>✉️ : ahmed@oko-mode.com</p>
      </div>
    </section>
  );
}
