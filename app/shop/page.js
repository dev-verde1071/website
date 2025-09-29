"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Shop Products</h1>
      <p>Browse our full selection of van and truck upfit solutions.</p>
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
