"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#F7F3ED",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Access Rack Solutions Inc.
      </h1>
      <nav style={{ display: "flex", gap: "1rem", position: "relative" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>

        {/* Shop with Dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link href="/shop">Shop ▾</Link>
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 20,
              }}
            >
              <Link
                href="/van"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Van Solutions
              </Link>
              <Link
                href="/truck"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Truck Solutions
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
