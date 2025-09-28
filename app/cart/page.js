"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <strong>{item.name}</strong> – ${item.price}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: "1rem",
                  background: "#C0392B",
                  color: "white",
                  border: "none",
                  borderRadius: "0.25rem",
                  padding: "0.25rem 0.75rem",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
