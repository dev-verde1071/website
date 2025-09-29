"use client";
export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        padding: "1rem",
        textAlign: "center"
      }}
    >
      <div
        style={{
          background: "#eee",
          height: "150px",
          marginBottom: "1rem",
          borderRadius: "0.5rem"
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#C0392B",
          color: "#fff",
          padding: "0.5rem 1rem",
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
