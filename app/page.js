export function HomePage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <section style={{ background: "#000", color: "#F7F3ED", padding: "3rem", borderRadius: "1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to Access Rack Solutions Inc.</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9, fontSize: "1.1rem" }}>
          Van upfitting, shelving, partitions, and ladder racks – compare pricing across distributors and ship direct.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/shop" style={{ background: "#C0392B", color: "#fff", fontWeight: 600, borderRadius: "0.75rem", padding: "0.75rem 1.5rem", display: "inline-block" }}>Shop Products</a>
        </div>
        <div style={{ marginTop: "1rem", fontSize: "1rem", color: "#F7F3ED" }}>
          📍 4395 Dardanelle Dr, Orlando, FL 32808 | 📞 (407) 294-7004 | ✉️ accessrackinc@cfl.rr.com
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <a href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808" target="_blank" style={{ background: "#C0392B", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem", textDecoration: "none" }}>Get Directions</a>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        {['Shelving','Ladder Racks','Partitions','Accessories'].map((c) => (
          <div key={c} style={{ background: "#FFFDF8", border: "1px solid #E6DCCD", borderRadius: "1rem", padding: "1rem", textAlign: "center" }}>
            <div style={{ background: "#F1E9DE", aspectRatio: "4/3", borderRadius: "0.75rem", marginBottom: "0.75rem" }}></div>
            <div style={{ fontWeight: 500 }}>{c}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

