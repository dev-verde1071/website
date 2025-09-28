import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Access Rack Solutions Inc.</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/company">Company</Link>
          <Link href="/mission">Mission</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to Access Rack Solutions Inc.</h2>
          <p>
            Van upfitting, shelving, partitions, and ladder racks – compare
            pricing across distributors and ship direct.
          </p>
          <Link href="/shop" className="cta-btn">
            Shop Products
          </Link>
        </section>

        <section className="categories">
          {["Shelving", "Ladder Racks", "Partitions", "Accessories"].map(
            (c) => (
              <div key={c} className="card">
                <div className="card-img"></div>
                <div className="card-title">{c}</div>
              </div>
            )
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Access Rack Solutions Inc.</p>
      </footer>
    </div>
  );
}
