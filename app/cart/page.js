"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  // calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            {cart.map((item, idx) => (
              <li
                key={idx}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "1rem"
            }}
          >
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            style={{
              background: "#C0392B",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600"
            }}
            onClick={() => alert("Proceeding to checkout...")}
          >
            Checkout Now
          </button>
        </>
      )}
    </main>
  );
}
