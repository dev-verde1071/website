"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, offer) {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.offer.vendor === offer.vendor
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.offer.vendor === offer.vendor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, offer, quantity: 1 }];
    });
  }

  function removeFromCart(productId, vendor) {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.offer.vendor === vendor)
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
