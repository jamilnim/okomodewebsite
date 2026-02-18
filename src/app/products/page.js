"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ProductCard from "../../components/ProductCard";
import styles from "./Products.module.css";
import { productFilters } from "../constants/productFilters";

export default function ProductsPage() {
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

      const { data, error } = await query;

      if (error) {
        console.error("Fetch error:", error.message);
      }

      setProducts(data || []);
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <>
      <div className={styles.productHead}>
        <h1>Products</h1>
      </div>

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
    </>
  );
}
