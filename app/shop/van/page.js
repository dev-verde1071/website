"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const vanProducts = [
  { id: 101, name: "Van Shelving System", price: 799 },
  { id: 102, name: "Van Ladder Rack", price: 499 },
  { id: 103, name: "Partition Wall", price: 399 },
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
