"use client";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "1rem" }}>
                {item.name} – {item.qty} × ${item.price}
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "1rem" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <form action="/api/checkout" method="POST">
            <button type="submit" style={{ background: "#C0392B", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem" }}>
              Checkout Now
            </button>
          </form>
          <button onClick={clearCart} style={{ marginLeft: "1rem" }}>
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}

