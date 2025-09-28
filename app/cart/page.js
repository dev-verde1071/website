"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{
              borderBottom: "1px solid #ddd",
              padding: "1rem 0",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)} × {item.qty}</p>
                <div>
                  <button className="button" onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: "0 1rem" }}>{item.qty}</span>
                  <button className="button" onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
              <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button className="button" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </main>
  );
}
