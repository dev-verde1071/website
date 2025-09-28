"use client";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #E6DCCD",
        padding: "1rem",
        borderRadius: "0.5rem"
      }}
    >
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          background: "#C0392B",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
