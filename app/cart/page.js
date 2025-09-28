"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function CheckoutForm({ total }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    const res = await fetch("/api/payment_intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }),
    });
    const { clientSecret, error } = await res.json();
    if (error) {
      setMessage(error);
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setMessage("✅ Payment successful!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#C0392B",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Checkout Now"}
      </button>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </form>
  );
}

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity} — ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h2>Total: ${total}</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm total={total} />
          </Elements>
        </>
      )}
    </main>
  );
}
