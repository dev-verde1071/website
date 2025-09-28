export default function HomePage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <section
        style={{
          background: "#000",
          color: "#F7F3ED",
          padding: "3rem",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Welcome to Access Rack Solutions Inc.
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            opacity: 0.9,
            fontSize: "1.1rem",
          }}
        >
          Van upfitting, shelving, partitions, and ladder racks – compare pricing
          across distributors and ship direct.
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
            }}
          >
            Shop Products
          </a>
        </div>
      </section>
    </main>
  );
}
