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
      background: "#F7F3ED",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ fontWeight: "bold" }}>Access Rack Solutions Inc.</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
