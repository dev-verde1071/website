"use client";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.priceCents || 0), 0);

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout failed.");
    }
  };

  return (
    <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#E6DCCD] shadow-sm">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <div className="font-medium">{item.title || "Product"}</div>
                  <div className="text-sm text-[#7A6A5A]">
                    ${(item.priceCents / 100).toFixed(2)}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-[#C0392B] hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-lg">
              Total: ${(total / 100).toFixed(2)}
            </div>
            <button onClick={clearCart} className="text-sm underline text-[#C0392B]">
              Clear Cart
            </button>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#C0392B] text-white py-3 rounded-xl font-semibold shadow hover:bg-[#a83224]"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
