import { supabase } from "../../../lib/supabase";
import styles from "./ProductDetail.module.css";

export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
      </div>
    );
  }

  const formattedPriceRange = product.price_range
    ? product.price_range.split("/").map((line, index) => (
        <div key={index}>{line.trim()}</div>
      ))
    : null;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{product.name}</h1>

      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Left - Image */}
        <div className={styles.imageContainer}>
          <img
            src={product.main_image}
            alt={product.name}
            className={styles.mainImage}
          />
        </div>

        {/* Right - Two Equal Cards */}
        <div className={styles.infoContainer}>
          <div className={styles.card}>
            <span className={styles.label}>Detail:</span>
            <p className={styles.detail}>{product.detail}</p>
          </div>

          {product.price_range && (
            <div className={styles.card}>
              <span className={styles.label}>Price Range:</span>
              <div className={styles.priceRange}>
                {formattedPriceRange}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Other Images - Below Everything */}
      <div className={styles.gallery}>
        {product.other_image1 && (
          <img
            src={product.other_image1}
            alt="Other 1"
            className={styles.galleryImage}
          />
        )}

        {product.other_image2 && (
          <img
            src={product.other_image2}
            alt="Other 2"
            className={styles.galleryImage}
          />
        )}
      </div>
    </div>
  );
}
