"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const truckProducts = [
  { id: 201, name: "Truck Toolbox – Crossover", price: 499 },
  { id: 202, name: "Fuel Transfer Tank – L Shape", price: 1199 },
  { id: 203, name: "Pipe Rack – Full Length", price: 799 }
];

export default function TruckSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Truck Solutions</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }}
      >
        {truckProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
