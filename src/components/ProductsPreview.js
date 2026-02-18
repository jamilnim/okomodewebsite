"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ProductCard from "./ProductCard";
import styles from "./ProductsPreview.module.css";
import Link from "next/link";

export default function ProductsPreview() {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      const { data } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.firstChild;
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // 16px gap
    const scrollAmount = cardWidth * 4; // move 4 cards

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.grid} ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={() => scroll("left")} className={styles.arrowBtn}>
          &lt;
        </button>

        <Link href="/products" className={styles.viewAllBtn}>
          View All Products
        </Link>

        <button onClick={() => scroll("right")} className={styles.arrowBtn}>
          &gt;
        </button>
      </div>
    </section>
  );
}
