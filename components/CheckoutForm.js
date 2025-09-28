"use client";
import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage(null);

    const res = await fetch("/api/payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }), // amount from cart
    });
    const { clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin + "/order-success",
      },
    });

    if (error) setMessage(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: "#C0392B", color: "#fff", border: "none", borderRadius: "0.5rem" }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <div style={{ marginTop: "1rem", color: "red" }}>{message}</div>}
    </form>
  );
}
