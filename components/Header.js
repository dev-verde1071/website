"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

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
      <Link href="/" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Access Rack Solutions
      </Link>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/">Home</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <div style={{ position: "relative" }}>
          <span>Shop ▾</span>
          <div
            style={{
              position: "absolute",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginTop: "0.5rem",
              display: "none"
            }}
            className="dropdown"
          >
            <Link href="/shop">All Products</Link>
            <Link href="/shop/van">Van Solutions</Link>
            <Link href="/shop/truck">Truck Solutions</Link>
          </div>
        </div>
        <Link href="/cart">Cart ({cart.reduce((a, b) => a + b.qty, 0)})</Link>
      </nav>
      <style>{`
        header div:hover .dropdown {
          display: flex;
          flex-direction: column;
        }
        header nav a {
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
