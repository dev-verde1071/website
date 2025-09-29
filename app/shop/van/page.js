"use client";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

const vanProducts = [
  { id: 10, name: "Transit Shelving", price: 599 },
  { id: 11, name: "Van Ladder Rack", price: 349 }
];

export default function VanSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Van Solutions</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {vanProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
