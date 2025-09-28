export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #E6DCCD",
      borderRadius: "0.75rem",
      padding: "1rem",
      background: "#FFFDF8"
    }}>
      <div style={{
        background: "#F1E9DE",
        aspectRatio: "4/3",
        borderRadius: "0.75rem",
        marginBottom: "0.75rem"
      }}></div>
      <h2 style={{ fontSize: "1.25rem" }}>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
