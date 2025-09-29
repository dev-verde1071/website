"use client";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart })
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirect to Stripe Checkout
    }
  }

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem"
                }}
              >
                <span>
                  {item.name} (x{item.qty})
                </span>
                <span>${item.price * item.qty}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button
            onClick={handleCheckout}
            style={{
              background: "#C0392B",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              marginRight: "0.5rem"
            }}
          >
            Checkout Now
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </main>
  );
}

