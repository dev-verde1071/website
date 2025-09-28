// components/ProductCard.js
"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        background: "#FFFDF8",
        border: "1px solid #E6DCCD",
        borderRadius: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "0.5rem" }}
      />
      <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>{product.name}</h2>
      <p style={{ fontWeight: "bold", color: "#C0392B" }}>
        ${product.price.toFixed(2)}
      </p>
      <button
        className="button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
