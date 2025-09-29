"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const [dropdown, setDropdown] = useState(false);

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
      <Link href="/">Access Rack Solutions Inc.</Link>
      <nav style={{ display: "flex", gap: "1rem", position: "relative" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <div
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          Shop ▼
          {dropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                padding: "0.5rem"
              }}
            >
              <Link href="/shop">All Products</Link><br />
              <Link href="/shop/van">Van Solutions</Link><br />
              <Link href="/shop/truck">Truck Solutions</Link>
            </div>
          )}
        </div>
        <Link href="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
