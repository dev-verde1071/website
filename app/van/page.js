"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import ProductCard from "../../components/ProductCard";

const vanProducts = [
  { id: 101, name: "Van Partition", price: 450 },
  { id: 102, name: "Van Roof Rack", price: 600 },
  { id: 103, name: "Van Ladder Holder", price: 220 },
];

export default function VanPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Van Solutions</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {vanProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
