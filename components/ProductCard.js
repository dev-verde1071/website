"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "0.5rem",
        padding: "1rem",
        textAlign: "center",
        background: "#fff"
      }}
    >
      <div
        style={{
          background: "#f0f0f0",
          borderRadius: "0.5rem",
          aspectRatio: "4/3",
          marginBottom: "1rem"
        }}
      ></div>
      <h3 style={{ marginBottom: "0.5rem" }}>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#C0392B",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
