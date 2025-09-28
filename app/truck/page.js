"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import ProductCard from "../../components/ProductCard";

const truckProducts = [
  { id: 201, name: "Truck Toolbox", price: 550 },
  { id: 202, name: "Truck Bed Rack", price: 800 },
  { id: 203, name: "Fuel Transfer Tank", price: 1200 },
];

export default function TruckPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Truck Solutions</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {truckProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
