export const dynamic = "force-dynamic";

import { createClient } from "@supabase/supabase-js";
import ProductCard from "./ProductCard";
import styles from "./ProductsPreview.module.css";

export default async function ProductsPreview() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error.message);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.grid}>
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
