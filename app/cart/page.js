"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${cartTotal}</h2>
          <button style={{ background: "#C0392B", color: "#fff", padding: "0.75rem 1.5rem", border: "none", borderRadius: "0.5rem" }}>
            Checkout Now
          </button>
        </div>
      )}
    </main>
  );
}
