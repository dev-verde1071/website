"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [showDropdown, setShowDropdown] = useState(false);

  // total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
        zIndex: 50
      }}
    >
      {/* Logo / Title */}
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        <Link href="/">Access Rack Solutions Inc.</Link>
      </h1>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>

        {/* Shop dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span style={{ cursor: "pointer" }}>Shop ▾</span>
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: 0,
                background: "#FFF",
                border: "1px solid #ddd",
                borderRadius: "0.25rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                minWidth: "150px",
                zIndex: 100
              }}
            >
              <Link
                href="/shop/van"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                Van Solutions
              </Link>
              <Link
                href="/shop/truck"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                Truck Solutions
              </Link>
              <Link
                href="/shop"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                All Products
              </Link>
            </div>
          )}
        </div>

        {/* Cart link with count */}
        <Link href="/cart">
          🛒 Cart {cartCount > 0 ? `(${cartCount})` : ""}
        </Link>
      </nav>
    </header>
  );
}
