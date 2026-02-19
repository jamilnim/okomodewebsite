"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import styles from "./EditProduct.module.css";

export default function EditProduct({ product }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const slug = form.slug.value;
    const category = form.category.value; // ✅ ADDED
    const summary = form.summary.value;
    const detail = form.detail.value;
    const price = parseFloat(Number(form.price.value).toFixed(2));

    const mainImageFile = form.mainImage.files[0];
    const otherImage1File = form.otherImage1.files[0];
    const otherImage2File = form.otherImage2.files[0];

    const uploadImage = async (file) => {
      if (!file) return null;

      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(fileName, file);

      if (error) {
        console.error("Upload error:", error);
        return null;
      }

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      return data.publicUrl;
    };

    const mainImageUrl = mainImageFile
      ? await uploadImage(mainImageFile)
      : product.main_image;

    const otherImage1Url = otherImage1File
      ? await uploadImage(otherImage1File)
      : product.other_image1;

    const otherImage2Url = otherImage2File
      ? await uploadImage(otherImage2File)
      : product.other_image2;

    const { error } = await supabase
      .from("products")
      .update({
        name,
        slug,
        category, // ✅ SAVED
        summary,
        detail,
        price,
        main_image: mainImageUrl || null,
        other_image1: otherImage1Url || null,
        other_image2: otherImage2Url || null,
      })
      .eq("id", product.id);

    if (error) {
      alert("Update failed");
      console.error(error);
    } else {
      alert("Product updated successfully!");
      router.refresh();
    }

    setLoading(false);
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", product.id);

    if (error) {
      alert("Delete failed");
      console.error(error);
    } else {
      alert("Product deleted successfully!");
      router.push("/admin/products");
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Edit Product</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Product Name</label>
            <input name="name" defaultValue={product.name} required />
          </div>

          <div className={styles.field}>
            <label>Slug</label>
            <input name="slug" defaultValue={product.slug} required />
          </div>

          {/* ✅ CATEGORY DROPDOWN */}
          <div className={styles.field}>
            <label>Category</label>
            <select
              name="category"
              defaultValue={product.category || ""}
              required
            >
              <option value="">Select Category</option>
              <option value="denim">Polo</option>
              <option value="t-shirt">T-shirt</option>
              <option value="bag">Bag</option>
              <option value="espadrille">Espadrille</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Short Summary</label>
            <textarea name="summary" defaultValue={product.summary} required />
          </div>

          <div className={styles.field}>
            <label>Detail Description</label>
            <textarea name="detail" defaultValue={product.detail} required />
          </div>

          <div className={styles.field}>
            <label>Price</label>
            <input
              type="number"
              name="price"
              step="0.01"
              min="0"
              defaultValue={product.price}
              required
            />
          </div>

          <div className={styles.imageBlock}>
            <p>Main Image</p>
            {product.main_image && <img src={product.main_image} alt="" />}
            <input type="file" name="mainImage" accept="image/*" />
          </div>

          <div className={styles.imageBlock}>
            <p>Other Image 1</p>
            {product.other_image1 && <img src={product.other_image1} alt="" />}
            <input type="file" name="otherImage1" accept="image/*" />
          </div>

          <div className={styles.imageBlock}>
            <p>Other Image 2</p>
            {product.other_image2 && <img src={product.other_image2} alt="" />}
            <input type="file" name="otherImage2" accept="image/*" />
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.saveBtn}>
              {loading ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className={styles.deleteBtn}
            >
              Delete Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
