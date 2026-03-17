"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./AdminProducts.module.css";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // ❌ Not logged in
      if (!user) {
        router.push("/admin/login");
        return;
      }

      // ✅ Allowed admins
      const allowedAdmins = ["jamilnimbook2@gmail.com", "ahmed@oko-mode.com"];

      // ❌ Not admin → redirect
      if (!allowedAdmins.includes(user.email)) {
        router.push("/products");
        return;
      }

      // ✅ Fetch products if admin
      fetchProducts();
    } catch (error) {
      console.error("Auth error:", error);
      router.push("/admin/login");
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data || []);
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p style={{ padding: "4rem" }}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>All Products</h1>

        <Link href="/admin/add-product" className={styles.addBtn}>
          + Add Product
        </Link>
      </div>

      {/* Product List */}
      <div className={styles.list}>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.main_image}
                alt={product.name}
                className={styles.image}
              />

              <div className={styles.info}>
                <h3>{product.name}</h3>

                <p>
                  <strong>Slug:</strong> {product.slug}
                </p>

                <p>
                  <strong>Price:</strong> ${product.price}
                </p>

                <p>
                  <strong>Summary:</strong> {product.summary}
                </p>

                <Link
                  href={`/admin/editProducts/${product.id}`}
                  className={styles.editBtn}
                >
                  Edit
                </Link>
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
