"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "1rem" }}>
                {item.name} – ${item.price} × {item.qty}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: "1rem", color: "red" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link href="/checkout">
            <button
              style={{
                background: "#C0392B",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer"
              }}
            >
              Checkout Now
            </button>
          </Link>
        </>
      )}
    </main>
  );
}

