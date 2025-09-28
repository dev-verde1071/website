"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: 1, name: "Van Shelving", price: 499 },
  { id: 2, name: "Ladder Rack", price: 299 },
  { id: 3, name: "Partition", price: 399 },
  { id: 4, name: "Accessory Kit", price: 149 }
];

export default function ShopPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Shop Products</h1>
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
