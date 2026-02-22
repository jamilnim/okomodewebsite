"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import styles from "./AddProduct.module.css";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const slug = form.slug.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const detail = form.detail.value;

    // ✅ NEW price_range
    const price_range = form.price_range.value;

    const mainImage = form.mainImage.files[0];
    const otherImage1 = form.otherImage1.files[0];
    const otherImage2 = form.otherImage2.files[0];

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

    const mainImageUrl = await uploadImage(mainImage);
    const otherImage1Url = await uploadImage(otherImage1);
    const otherImage2Url = await uploadImage(otherImage2);

    const { error } = await supabase.from("products").insert([
      {
        name,
        slug,
        category,
        summary,
        detail,
        price_range, // ✅ SAVED IN DATABASE
        main_image: mainImageUrl || null,
        other_image1: otherImage1Url || null,
        other_image2: otherImage2Url || null,
      },
    ]);

    if (error) {
      console.error("Insert error:", error);
      alert("Error adding product");
    } else {
      alert("Product added successfully!");
      form.reset();
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Add Product</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Product Name</label>
            <input type="text" name="name" required />
          </div>

          <div className={styles.field}>
            <label>Slug</label>
            <input type="text" name="slug" required />
          </div>

          <div className={styles.field}>
            <label>Category</label>
            <select name="category" required>
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
            <textarea name="summary" required />
          </div>

          <div className={styles.field}>
            <label>Detail Description</label>
            <textarea name="detail" required />
          </div>

          {/* ✅ REPLACED PRICE WITH PRICE RANGE */}
          <div className={styles.field}>
            <label>Price Range</label>
            <input
              type="text"
              name="price_range"
              placeholder="e.g. €80–€120 / Premium / On Request"
              required
            />
          </div>

          <div className={styles.field}>
            <label>Main Image (Optional)</label>
            <input type="file" name="mainImage" accept="image/*" />
          </div>

          <div className={styles.field}>
            <label>Other Image 1 (Optional)</label>
            <input type="file" name="otherImage1" accept="image/*" />
          </div>

          <div className={styles.field}>
            <label>Other Image 2 (Optional)</label>
            <input type="file" name="otherImage2" accept="image/*" />
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
