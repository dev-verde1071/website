"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "1rem" }}>
                {item.name} - ${item.price}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    marginLeft: "1rem",
                    background: "#ccc",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: "0.25rem 0.5rem"
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total}</h2>
          <button
            onClick={clearCart}
            style={{
              marginTop: "1rem",
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
        </div>
      )}
    </main>
  );
}
