"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const mockProducts = [
  {
    id: "1",
    name: "Ford Transit Shelving System",
    vendorItems: [
      { vendor: "Meyer", priceCents: 124999, stock: "In Stock" },
      { vendor: "Ranger", priceCents: 127500, stock: "Backorder" },
    ],
  },
  {
    id: "2",
    name: "Mercedes Sprinter Ladder Rack",
    vendorItems: [
      { vendor: "Meyer", priceCents: 99999, stock: "In Stock" },
      { vendor: "Ranger", priceCents: 105000, stock: "In Stock" },
    ],
  },
  {
    id: "3",
    name: "RAM ProMaster Partition",
    vendorItems: [
      { vendor: "Ranger", priceCents: 85000, stock: "Low Stock" },
      { vendor: "Other Distributor", priceCents: 89000, stock: "In Stock" },
    ],
  },
  {
    id: "4",
    name: "Universal Van Accessories Kit",
    vendorItems: [],
  },
];

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main>
        <h2>Product not found</h2>
        <Link href="/shop" className="button">
          Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h2>{product.name}</h2>
      <p>Compare distributor prices, stock availability, and options below:</p>

      {product.vendorItems.length > 0 ? (
        <table className="vendor-table">
          <thead>
            <tr>
              <th>Distributor</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product.vendorItems.map((item, idx) => (
              <tr key={idx}>
                <td>{item.vendor}</td>
                <td>${(item.priceCents / 100).toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => addToCart(product, item)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No distributor offers available yet.</p>
      )}

      <Link href="/shop" className="button">
        Back to Shop
      </Link>
    </main>
  );
}
