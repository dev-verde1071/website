"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

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
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Access Rack Solutions Inc.</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <div style={{ position: "relative" }}>
          <Link href="/shop">Shop</Link>
          <div style={{ marginLeft: "1rem" }}>
            <Link href="/shop/van">Van Solutions</Link>{" | "}
            <Link href="/shop/truck">Truck Solutions</Link>
          </div>
        </div>
        <Link href="/cart">
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
}
