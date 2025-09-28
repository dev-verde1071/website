"use client";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

export default function VanSolutionsPage() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products?category=van");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Van Solutions</h1>
      <p>Upfitting products designed for commercial vans.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No van products available.</p>
        )}
      </div>
    </main>
  );
}

