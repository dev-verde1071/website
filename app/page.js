export default function HomePage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <section style={{
        background: "#000",
        color: "#F7F3ED",
        padding: "3rem",
        borderRadius: "1rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Welcome to Access Rack Solutions Inc.
        </h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9, fontSize: "1.1rem" }}>
          Van upfitting, shelving, partitions, and ladder racks – compare pricing across distributors and ship direct.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/shop" className="button">Shop Products</a>
        </div>
        <div style={{ marginTop: "1rem" }}>
          📍 4395 Dardanelle Dr, Orlando, FL 32808 | 📞 (407) 294-7004 | ✉️ accessrackinc@cfl.rr.com
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808"
            target="_blank"
            className="button"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}
