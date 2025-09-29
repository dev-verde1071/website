"use client";
export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #E6DCCD", borderRadius: "1rem", padding: "1rem", textAlign: "center" }}>
      <div style={{ background: "#F1E9DE", height: "150px", borderRadius: "0.75rem", marginBottom: "0.75rem" }}>
        <span style={{ lineHeight: "150px" }}>Image</span>
      </div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#C0392B",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
