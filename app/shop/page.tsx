import ProductCard from "../components/ProductCard";

const mockProducts = [
  { id: 1, name: "Steel Shelving", vendorItems: [{ priceCents: 24999 }] },
  { id: 2, name: "Aluminum Ladder Rack", vendorItems: [{ priceCents: 39999 }] },
  { id: 3, name: "Van Partition", vendorItems: [{ priceCents: 29999 }] }
];

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Shop Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} v={p} />
        ))}
      </ul>
    </div>
  );
}
