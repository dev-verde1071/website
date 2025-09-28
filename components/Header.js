"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [shopOpen, setShopOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "#F7F3ED",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 50,
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        <Link href="/">Access Rack Solutions Inc.</Link>
      </h1>

      <nav style={{ display: "flex", gap: "1rem", position: "relative" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>

        {/* Shop dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <span style={{ cursor: "pointer" }}>Shop ▾</span>
          {shopOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                padding: "0.5rem",
                minWidth: "180px",
              }}
            >
              <div style={{ padding: "0.5rem 0" }}>
                <Link href="/shop">All Products</Link>
              </div>
              <div style={{ padding: "0.5rem 0" }}>
                <Link href="/shop/van">Van Solutions</Link>
              </div>
              <div style={{ padding: "0.5rem 0" }}>
                <Link href="/shop/truck">Truck Solutions</Link>
              </div>
            </div>
          )}
        </div>

        {/* Cart button with count */}
        <Link href="/cart" style={{ position: "relative" }}>
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}
