"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const { cart } = useCart();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "py-1 text-base" : "py-4 text-2xl"
      } flex items-center justify-between sticky top-0 bg-[#F7F3ED] z-50 shadow-md transition-all duration-300 px-6`}
    >
      <h1 className="font-bold">Access Rack Solutions Inc.</h1>
      <nav className={`flex gap-4 ${scrolled ? "text-sm" : "text-base"}`}>
        <Link href="/" className="px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Home
        </Link>
        <Link href="/company" className="px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Company
        </Link>
        <Link href="/mission" className="px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Mission
        </Link>
        <Link href="/portfolio" className="px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Portfolio
        </Link>
        <Link href="/shop" className="px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Shop
        </Link>
        <Link href="/cart" className="relative px-3 py-2 bg-[#FFFDF8] border border-[#E6DCCD] rounded hover:bg-[#C0392B] hover:text-white">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C0392B] text-white text-xs rounded-full px-2 py-0.5">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
