"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: 1, name: "General Rack System", price: 799 },
  { id: 2, name: "Cargo Partition", price: 350 },
  { id: 3, name: "Lighting Kit", price: 120 }
];

export default function ShopPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Shop All Solutions</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
