import Link from "next/link";

function Header() {
  return (
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
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Access Rack Solutions Inc.</p>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="main">
      <section className="hero">
        <h2>Welcome to Access Rack Solutions Inc.</h2>
        <p>
          Van upfitting, shelving, partitions, and ladder racks – compare
          pricing across distributors and ship direct.
        </p>
        <Link href="/shop" className="button">
          Shop Products
        </Link>
      </section>

      <section className="categories">
        {["Shelving", "Ladder Racks", "Partitions", "Accessories"].map((c) => (
          <div key={c} className="category-card">
            <div className="category-image"></div>
            <div className="category-title">{c}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

