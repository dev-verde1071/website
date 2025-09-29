"use client";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <section style={{ background: "#000", color: "#F7F3ED", padding: "3rem", borderRadius: "1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Welcome to Access Rack Solutions Inc.
        </h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9 }}>
          Van upfitting, shelving, partitions, and ladder racks – compare pricing across distributors and ship direct.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/shop" style={{ background: "#C0392B", color: "#fff", borderRadius: "0.75rem", padding: "0.75rem 1.5rem" }}>
            Shop Now
          </a>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <a href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808"
             target="_blank"
             style={{ background: "#C0392B", color: "#fff", borderRadius: "0.5rem", padding: "0.5rem 1rem" }}>
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}
