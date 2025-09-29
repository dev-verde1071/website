"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

export default function VanSolutionsPage() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products?category=van");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching van products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Van Solutions</h1>
      <p>Explore van shelving, partitions, and ladder racks.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
