"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const truckProducts = [
  { id: 201, name: "Truck Toolbox", price: 899 },
  { id: 202, name: "Fuel Transfer Tank", price: 1299 },
  { id: 203, name: "Pipe Rack", price: 699 },
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
