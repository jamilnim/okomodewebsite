import { supabase } from "../../../lib/supabase";

export default async function ProductDetail({ params }) {
  // 👇 FIX: unwrap params
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <div style={{ padding: "4rem" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "4rem auto" }}>
      <h1>{product.name}</h1>

      <img
        src={product.main_image}
        alt={product.name}
        style={{ width: "100%", marginBottom: "2rem" }}
      />

      <p>{product.detail}</p>

      <h3>Price: ${product.price}</h3>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        {product.other_image1 && (
          <img src={product.other_image1} width="200" alt="Other 1" />
        )}
        {product.other_image2 && (
          <img src={product.other_image2} width="200" alt="Other 2" />
        )}
      </div>
    </div>
  );
}
