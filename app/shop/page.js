// app/shop/page.js
import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Van Shelving System",
    price: 899.99,
    image: "/images/shelving.jpg",
  },
  {
    id: 2,
    name: "Ladder Rack",
    price: 499.99,
    image: "/images/ladder.jpg",
  },
  {
    id: 3,
    name: "Partition Divider",
    price: 299.99,
    image: "/images/partition.jpg",
  },
  {
    id: 4,
    name: "Accessory Kit",
    price: 199.99,
    image: "/images/accessories.jpg",
  },
];

export default function ShopPage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Shop Products
      </h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
