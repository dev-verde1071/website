"use client";
import { useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "@/components/CartContext";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Checkout</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={total * 100} />
      </Elements>
    </main>
  );
}
