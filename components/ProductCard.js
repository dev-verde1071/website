"use client";

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "1rem",
      borderRadius: "0.5rem",
      background: "#FFFDF8"
    }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "0.5rem",
          background: "#C0392B",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
