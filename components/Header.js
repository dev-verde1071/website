"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#F7F3ED",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <h1>Access Rack Solutions Inc.</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <div style={{ position: "relative" }}>
          <span>Shop ▼</span>
          <div
            style={{
              position: "absolute",
              background: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "none"
            }}
            className="dropdown"
          >
            <Link href="/shop/van">Van Solutions</Link>
            <Link href="/shop/truck">Truck Solutions</Link>
          </div>
        </div>
        <Link href="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}

