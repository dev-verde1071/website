"use client";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount })
    });
    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (result.error) setMessage(result.error.message);
    else if (result.paymentIntent.status === "succeeded") setMessage("✅ Payment successful!");

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      <button disabled={!stripe || loading} style={{ marginTop: "1rem", background: "#C0392B", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}>
        {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </form>
  );
}
