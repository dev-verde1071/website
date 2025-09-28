// app/cart/page.js
"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "0.5rem",
                }}
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <button
              style={{
                background: "#C0392B",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

