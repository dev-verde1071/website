// =============================
// Project: Access Rack Solutions Inc. – Dropship Store (Next.js)
// =============================

// layout.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Access Rack Solutions Inc.",
  description:
    "Commercial van upfitting: shelving, ladder racks, partitions & accessories. Compare prices across distributors and ship direct."
};

function Header() {
  return (
    <header style={{
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      background: "#F7F3ED",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      zIndex: 50
    }}>
      <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Access Rack Solutions Inc.</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/shop">Shop</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1.5rem", fontSize: "0.9rem", color: "#6B5B4D", background: "#EFE7DD", borderRadius: "1rem", marginTop: "2rem" }}>
      <div style={{ marginBottom: "0.5rem" }}>Hours: Mon–Fri 7:30am–4pm | Sat by appointment | Sun Closed</div>
      <div style={{ marginBottom: "0.5rem" }}>📍 4395 Dardanelle Dr, Orlando, FL 32808</div>
      <div style={{ marginBottom: "0.75rem" }}>
        <a href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808" target="_blank" style={{ background: "#C0392B", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem", textDecoration: "none" }}>Get Directions</a>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>📞 (407) 294-7004 | ✉️ accessrackinc@cfl.rr.com</div>
      <div style={{ marginBottom: "0.5rem" }}>
        <a href="https://www.instagram.com/access_rack_solutions/" target="_blank">Instagram</a> | {" "}
        <a href="https://www.facebook.com/AccessRackInc" target="_blank">Facebook</a>
      </div>
      <div>© {new Date().getFullYear()} Access Rack Solutions Inc.</div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />
        <style>{`
          * { box-sizing: border-box; font-family: 'Playfair Display', serif; }
          html, body { margin: 0; padding: 0; background: #F7F3ED; color: #000; }
          a { color: inherit; text-decoration: none; }
          a:hover { color: #C0392B; }
        `}</style>
      </head>
      <body>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

// page.tsx
export default function HomePage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <section style={{ background: "#000", color: "#F7F3ED", padding: "3rem", borderRadius: "1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to Access Rack Solutions Inc.</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9, fontSize: "1.1rem" }}>
          Van upfitting, shelving, partitions, and ladder racks – compare pricing across distributors and ship direct.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/shop" style={{ background: "#C0392B", color: "#fff", fontWeight: 600, borderRadius: "0.75rem", padding: "0.75rem 1.5rem", display: "inline-block" }}>Shop Products</Link>
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
