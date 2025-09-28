"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const truckProducts = [
  { id: "truck1", name: "Truck Crossover Toolbox", price: 550 },
  { id: "truck2", name: "Heavy Duty Ladder Rack", price: 420 },
  { id: "truck3", name: "Fuel Transfer Tank", price: 899 },
  { id: "truck4", name: "Bed Organizer Kit", price: 250 }
];

export default function TruckSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Truck Solutions</h1>
      <p style={{ marginBottom: "1rem" }}>
        Find upfitting solutions tailored for trucks – toolboxes, tanks, racks, and bed storage systems.
      </p>
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
