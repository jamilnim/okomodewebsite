import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";
import styles from "./ProductsPreview.module.css";

export default async function ProductsPreview() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error("Fetch error:", error.message);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.grid}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </section>
  );
}
