import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  id,
  name,
  summary,
  price,
  main_image,
  slug,
}) {

  return (
    <div className={styles.card}>
      <img src={main_image} alt={name} />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{summary}</p>

        <Link href={`/products/${slug}`} className={styles.button}>
          View More
        </Link>
      </div>
    </div>
  );
}
