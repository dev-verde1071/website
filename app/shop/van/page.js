"use client";
import { useContext, useState } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

// Dummy product data with brand field
const vanProducts = [
  {
    id: 101,
    name: "Holman Van Shelving Unit",
    brand: "Holman",
    price: 599,
    description: "Steel shelving system designed for cargo vans. Adjustable shelves and dividers.",
    images: ["/images/van-shelving-main.jpg", "/images/van-shelving-1.jpg", "/images/van-shelving-2.jpg"]
  },
  {
    id: 102,
    name: "WeatherGuard Ladder Rack",
    brand: "WeatherGuard",
    price: 429,
    description: "Drop-down style ladder rack for commercial vans. Easy loading/unloading.",
    images: ["/images/ladder-rack-main.jpg", "/images/ladder-rack-1.jpg"]
  },
  {
    id: 103,
    name: "Bulkhead Partition",
    brand: "Ranger Design",
    price: 379,
    description: "Solid steel bulkhead partition for improved safety and cab separation.",
    images: ["/images/partition-main.jpg", "/images/partition-1.jpg"]
  },
  {
    id: 104,
    name: "Van Accessory Kit",
    brand: "Holman",
    price: 199,
    description: "Set of hooks, bins, and tie-downs for organizing tools and equipment.",
    images: ["/images/accessory-main.jpg", "/images/accessory-1.jpg"]
  }
];

function Gallery({ images }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      {/* Main image */}
      <img
        src={images[0]}
        alt="Main"
        style={{
          width: "100%",
          borderRadius: "0.75rem",
          marginBottom: "0.5rem",
          cursor: "pointer"
        }}
        onClick={() => setActive(images[0])}
      />
      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {images.slice(1).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Extra ${i}`}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
            onClick={() => setActive(img)}
          />
        ))}
      </div>
      {/* Lightbox modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <img
            src={active}
            alt="Large view"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "1rem" }}
          />
        </div>
      )}
    </div>
  );
}

export default function VanSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  const [sortOption, setSortOption] = useState("default");
  const [brandFilter, setBrandFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Sorting
  const sortedProducts = [...vanProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
    if (sortOption === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

  // Filtering
  const filteredProducts = sortedProducts.filter((p) => {
    const matchBrand = brandFilter === "all" || p.brand === brandFilter;
    const matchMin = minPrice === "" || p.price >= parseFloat(minPrice);
    const matchMax = maxPrice === "" || p.price <= parseFloat(maxPrice);
    return matchBrand && matchMin && matchMax;
  });

  // Unique brand list
  const brands = [...new Set(vanProducts.map((p) => p.brand))];

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Van Solutions</h1>
      <p style={{ maxWidth: "700px", marginBottom: "1rem" }}>
        Browse our selection of shelving, ladder racks, partitions, and accessories designed specifically
        for commercial vans. Built tough and ready for daily use.
      </p>

      {/* Sorting & Filtering */}
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {/* Sort */}
        <div>
          <label htmlFor="sort" style={{ marginRight: "0.5rem", fontWeight: "500" }}>Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A to Z</option>
            <option value="nameZA">Name: Z to A</option>
          </select>
        </div>

        {/* Brand */}
        <div>
          <label htmlFor="brand" style={{ marginRight: "0.5rem", fontWeight: "500" }}>Brand:</label>
          <select
            id="brand"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          >
            <option value="all">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Price Min/Max */}
        <div>
          <label style={{ marginRight: "0.5rem", fontWeight: "500" }}>Price:</label>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ width: "80px", marginRight: "0.5rem", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ width: "80px", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#FFFDF8",
              border: "1px solid #E6DCCD",
              borderRadius: "1rem",
              padding: "1rem"
            }}
          >
            <Gallery images={p.images} />
            <h2 style={{ fontSize: "1.25rem", marginTop: "1rem" }}>{p.name}</h2>
            <p style={{ fontSize: "0.95rem", margin: "0.5rem 0" }}>{p.description}</p>
            <div style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>${p.price}</div>
            <button
              onClick={() => addToCart(p)}
              style={{
                background: "#C0392B",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
