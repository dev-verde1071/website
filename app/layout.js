import React from "react";

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
        <a href="/">Home</a>
        <a href="/company">Company</a>
        <a href="/mission">Mission</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/shop">Shop</a>
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

export default function RootLayout({ children }) {
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
