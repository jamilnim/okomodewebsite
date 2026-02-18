"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ProductCard from "./ProductCard";
import styles from "./ProductsPreview.module.css";
import { productFilters } from "../app/constants/productFilters";

export default function ProductsPreview() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      let query = supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (activeCategory !== "all") {
        query = query.eq("category", activeCategory);
      }

      const { data } = await query.limit(8); // home limit
      setProducts(data || []);
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>

      {/* CATEGORY TABS */}
      <div className={styles.tabs}>
        {productFilters.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`${styles.tab} ${
              activeCategory === cat.value ? styles.active : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
