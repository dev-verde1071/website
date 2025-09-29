export default function HomePage() {
  return (
    <section style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome to Access Rack Solutions Inc.
      </h1>
      <p style={{ margin: "1rem auto", maxWidth: "600px" }}>
        Commercial van & truck upfitting: shelving, ladder racks, partitions,
        and accessories. Compare pricing across distributors and ship direct.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        <a
          href="/shop"
          style={{
            background: "#C0392B",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem"
          }}
        >
          Shop Now
        </a>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808"
          target="_blank"
          style={{
            background: "#000",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem"
          }}
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
