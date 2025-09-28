"use client";
export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "0.5rem", padding: "1rem", textAlign: "center" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{ background: "#C0392B", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
