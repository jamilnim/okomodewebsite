import { supabase } from "../../lib/supabase";
import ProductCard from "../../components/ProductCard";
import styles from "./Products.module.css";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error.message);
  }

  return (
    <div className={styles.grid}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
}
