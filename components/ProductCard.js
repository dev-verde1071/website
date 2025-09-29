"use client";
export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "0.75rem", padding: "1rem", textAlign: "center" }}>
      <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{product.name}</div>
      <div style={{ marginBottom: "0.5rem" }}>${product.price}</div>
      <button
        onClick={() => addToCart(product)}
        style={{ background: "#C0392B", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
