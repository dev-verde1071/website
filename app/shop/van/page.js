"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const vanProducts = [
  { id: "van1", name: "Compact Van Shelving", price: 450 },
  { id: "van2", name: "Van Ladder Rack", price: 320 },
  { id: "van3", name: "Partition – Compact Van", price: 380 },
  { id: "van4", name: "Interior Accessory Kit", price: 160 }
];

export default function VanSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Van Solutions</h1>
      <p style={{ marginBottom: "1rem" }}>
        Explore upfitting products designed for work vans – shelving, partitions, racks, and accessories.
      </p>
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
