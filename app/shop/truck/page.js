"use client";
import { useContext, useState } from "react";
import { CartContext } from "../../../components/CartContext";
import ProductCard from "../../../components/ProductCard";

const truckProducts = [
  { id: 1, name: "Ladder Rack", price: 599, brand: "Holman" },
  { id: 2, name: "Fuel Transfer Tank", price: 899, brand: "RDS" },
  { id: 3, name: "Crossover Toolbox", price: 499, brand: "WeatherGuard" },
  { id: 4, name: "Pipe Rack", price: 699, brand: "Ranger Design" },
];

export default function TruckSolutionsPage() {
  const { addToCart } = useContext(CartContext);

  // Sorting + filtering state
  const [sortOrder, setSortOrder] = useState("default");
  const [brandFilter, setBrandFilter] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const brands = [...new Set(truckProducts.map((p) => p.brand))];

  const filteredProducts = truckProducts
    .filter((p) => {
      const matchBrand = brandFilter === "all" || p.brand === brandFilter;
      const matchMin = priceMin === "" || p.price >= parseFloat(priceMin);
      const matchMax = priceMax === "" || p.price <= parseFloat(priceMax);
      return matchBrand && matchMin && matchMax;
    })
    .sort((a, b) => {
      if (sortOrder === "priceLowHigh") return a.price - b.price;
      if (sortOrder === "priceHighLow") return b.price - a.price;
      return 0;
    });

  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Truck Solutions</h1>
      <p style={{ marginBottom: "1rem" }}>
        Explore our truck upfit solutions – racks, tanks, toolboxes, and more.
      </p>

      {/* Sorting + Filters */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* Sort */}
        <div>
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div>
          <label htmlFor="brand">Brand: </label>
          <select
            id="brand"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="all">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label>Price: </label>
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            style={{ width: "80px", marginRight: "0.5rem" }}
          />
          -
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem" }}
          />
        </div>
      </div>

      {/* Products */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
