"use client";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  // Mock products (replace with API later)
  const products = [
    {
      id: "1",
      name: "Ford Transit Shelving System",
      vendorItems: [
        { vendor: "Meyer", priceCents: 124999 },
        { vendor: "Ranger", priceCents: 127500 },
      ],
    },
    {
      id: "2",
      name: "Mercedes Sprinter Ladder Rack",
      vendorItems: [
        { vendor: "Meyer", priceCents: 99999 },
        { vendor: "Ranger", priceCents: 105000 },
      ],
    },
    {
      id: "3",
      name: "RAM ProMaster Partition",
      vendorItems: [
        { vendor: "Ranger", priceCents: 85000 },
        { vendor: "Other Distributor", priceCents: 89000 },
      ],
    },
    {
      id: "4",
      name: "Universal Van Accessories Kit",
      vendorItems: null, // no offers yet
    },
  ];

  return (
    <main>
      <h2>Shop Products</h2>
      <p>
        Browse our product categories below. Each product includes live price
        comparisons (placeholder for now).
      </p>

      <ul className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} v={p} />
        ))}
      </ul>

      <Link href="/" className="button">
        Back to Home
      </Link>
    </main>
  );
}
