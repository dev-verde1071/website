"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import CheckoutForm from "../../components/CheckoutForm";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} — {item.quantity} × ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <CheckoutForm amount={total * 100} /> {/* Stripe expects cents */}
        </>
      )}
    </main>
  );
}

