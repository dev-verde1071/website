"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header style={{
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      background: "#F7F3ED",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      zIndex: 50
    }}>
      <Link href="/"><h1 style={{ fontWeight: "bold" }}>Access Rack Solutions</h1></Link>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/">Home</Link>
        <div style={{ position: "relative" }}>
          <span>Shop ▾</span>
          <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column"
          }}>
            <Link href="/shop/van">Van Solutions</Link>
            <Link href="/shop/truck">Truck Solutions</Link>
          </div>
        </div>
        <Link href="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
