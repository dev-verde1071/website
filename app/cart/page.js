// app/cart/page.js
"use client";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Your Cart
      </h1>

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
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "1rem 0",
                }}
              >
                <div>
                  <h2 style={{ margin: 0 }}>{item.name}</h2>
                  <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                    ${item.price.toFixed(2)} × {item.qty}
                  </p>
                </div>
                <button
                  className="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: "1rem" }}>
            Total: <span style={{ color: "#C0392B" }}>${total.toFixed(2)}</span>
          </h2>

          <div style={{ marginTop: "1.5rem" }}>
            <button className="button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
