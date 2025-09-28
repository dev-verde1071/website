"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} – $
                {item.price * item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button
            onClick={handleCheckout}
            style={{
              background: "#C0392B",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          >
            Checkout Now
          </button>
        </>
      )}
    </main>
  );
}
