import Link from "next/link";

export default function MissionPage() {
  return (
    <main>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide reliable, durable, and affordable van
        upfitting solutions that help businesses operate more efficiently.
      </p>
      <p>
        We believe in customer-first service, quality craftsmanship, and
        building long-term relationships with our clients.
      </p>
      <Link href="/" className="button">Back to Home</Link>
    </main>
  );
}
