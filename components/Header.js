"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#F7F3ED", borderBottom: "1px solid #ddd" }}>
      <a href="/" style={{ fontWeight: "bold" }}>Access Rack Solutions Inc.</a>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <a href="/">Home</a>
        <div style={{ position: "relative" }}>
          <a href="/shop">Shop ▾</a>
          <div style={{ position: "absolute", top: "1.5rem", left: 0, background: "#fff", border: "1px solid #ccc", padding: "0.5rem" }}>
            <a href="/shop/van">Van Solutions</a><br />
            <a href="/shop/truck">Truck Solutions</a>
          </div>
        </div>
        <a href="/cart">Cart ({cartCount})</a>
      </nav>
    </header>
  );
}
