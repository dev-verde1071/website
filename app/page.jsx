import React from "react";
import Link from "next/link";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${scrolled ? "py-1 text-base" : "py-4 text-2xl"} flex justify-between sticky top-0 bg-[#F7F3ED] shadow-md`}>
      <h1 className="font-bold">Access Rack Solutions Inc.</h1>
      <nav className="flex gap-4">
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
    <footer className="text-center py-6 text-sm text-[#6B5B4D] bg-[#EFE7DD] rounded-2xl">
      <div>© {new Date().getFullYear()} Access Rack Solutions Inc.</div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="space-y-8">
      <section className="rounded-2xl bg-black p-10 text-[#F7F3ED] text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Welcome to Access Rack Solutions Inc.</h1>
        <p className="max-w-2xl mx-auto opacity-90 text-lg">Van upfitting, shelving, partitions, and ladder racks – compare pricing across distributors and ship direct.</p>
        <div className="mt-6">
          <Link href="/shop" className="inline-block bg-[#C0392B] text-white font-semibold rounded-xl px-6 py-3 shadow">Shop Products</Link>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Shelving", "Ladder Racks", "Partitions", "Accessories"].map((c) => (
          <div key={c} className="bg-[#FFFDF8] rounded-2xl shadow-sm border border-[#E6DCCD] p-4">
            <div className="aspect-[4/3] bg-[#F1E9DE] rounded-xl mb-3" />
            <div className="font-medium text-center">{c}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl p-4 grid gap-6">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
