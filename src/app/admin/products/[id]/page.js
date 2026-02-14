import { supabase } from "../../../../lib/supabase";
import EditProduct from "../EditProduct";

export default async function EditPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) {
    return <div style={{ padding: "4rem" }}>Product not found</div>;
  }

  return <EditProduct product={product} />;
}
