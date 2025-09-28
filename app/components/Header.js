// components/Header.js
export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "#F7F3ED",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 50,
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Access Rack Solutions Inc.
      </h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
  <a href="/">Home</a>
  <a href="/company">Company</a>
  <a href="/mission">Mission</a>
  <a href="/portfolio">Portfolio</a>
  <a href="/shop">Shop</a>
  <a href="/cart">Cart</a>
</nav>

    </header>
  );
}
