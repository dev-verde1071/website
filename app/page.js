export default function HomePage() {
  return (
    <main style={{ marginTop: "2rem", textAlign: "center" }}>
      <h1>Welcome to Access Rack Solutions Inc.</h1>
      <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
        We specialize in commercial van and truck upfitting — shelving,
        partitions, ladder racks, accessories, and more. Explore our shop for
        the perfect solutions to get your vehicle work-ready.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        <a
          href="/shop"
          style={{
            background: "#C0392B",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "0.75rem",
            padding: "0.75rem 1.5rem",
            display: "inline-block",
            textDecoration: "none"
          }}
        >
          Visit Shop
        </a>
      </div>
    </main>
  );
}
