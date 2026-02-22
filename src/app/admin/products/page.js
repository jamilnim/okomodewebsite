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
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    // restrict to specific admin email
    if (user.email !== "jamilnimbook2@gmail.com" || "ahmed@oko-mode.com") {
      router.push("/products");
      return;
    }

    fetchProducts();
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setProducts(data);
    }

    setLoading(false);
  };

  if (loading) return <p style={{ padding: "4rem" }}>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Products</h1>

        <Link href="/admin/add-product" className={styles.addBtn}>
          + Add Product
        </Link>
      </div>

      <div className={styles.list}>
        {products?.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.main_image} alt={product.name} />

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
                href={`/admin/products/${product.id}`}
                className={styles.editBtn}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
