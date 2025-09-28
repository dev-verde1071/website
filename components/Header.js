// components/Header.js
"use client";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  // count items in cart
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
        Access Rack Solutions Inc.
      </h1>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <a href="/">Home</a>
        <a href="/company">Company</a>
        <a href="/mission">Mission</a>
        <a href="/portfolio">Portfolio</a>

        {/* Shop Dropdown */}
        <div style={{ position: "relative" }}>
          <a href="/shop">Shop ▾</a>
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              display: "none",
            }}
            className="dropdown"
          >
            <a href="/shop/van" style={{ display: "block", padding: "0.25rem" }}>
              Van Solutions
            </a>
            <a
              href="/shop/truck"
              style={{ display: "block", padding: "0.25rem" }}
            >
              Truck Solutions
            </a>
          </div>
        </div>

        {/* Cart link with item count */}
        <a href="/cart">
          Cart {itemCount > 0 && `(${itemCount})`}
        </a>
      </nav>
    </header>
  );
}
