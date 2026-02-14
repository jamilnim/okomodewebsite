import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import styles from "./AdminProducts.module.css";

export default async function AdminProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
  }

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
