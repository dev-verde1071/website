"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalCents = cart.reduce(
    (sum, item) => sum + item.offer.priceCents * item.quantity,
    0
  );

  return (
    <main>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="vendor-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Distributor</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.product.name}</td>
                  <td>{item.offer.vendor}</td>
                  <td>{item.quantity}</td>
                  <td>
                    ${(item.offer.priceCents * item.quantity / 100).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="button"
                      onClick={() =>
                        removeFromCart(item.product.id, item.offer.vendor)
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${(totalCents / 100).toFixed(2)}</h3>
          <button className="button" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
      <div style={{ marginTop: "1.5rem" }}>
        <Link href="/shop" className="button">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
