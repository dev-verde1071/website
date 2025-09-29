"use client";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

const truckProducts = [
  { id: 7, name: "Truck Bed Toolbox", price: 450 },
  { id: 8, name: "Truck Pipe Rack", price: 500 }
];

export default function TruckSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Truck Solutions</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {truckProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
