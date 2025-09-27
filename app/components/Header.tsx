"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "py-1 text-base" : "py-4 text-2xl"
      } col-span-12 flex items-center justify-between sticky top-0 bg-[#F7F3ED] z-50 shadow-md transition-all duration-300`}
    >
      <h1 className="font-bold transition-all duration-300">
        Access Rack Solutions Inc.
      </h1>
      <nav
        className={`flex gap-4 transition-all duration-300 ${
          scrolled ? "text-sm" : "text-base"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/shop">Shop</Link>
      </nav>
    </header>
  );
}
