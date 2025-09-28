import Link from "next/link";

export default function ShopPage() {
  return (
    <main>
      <h2>Shop Products</h2>
      <p>
        Browse our product categories below. Each product page will soon
        include price comparisons between distributors.
      </p>
      <ul>
        <li><Link href="#">Shelving Systems</Link></li>
        <li><Link href="#">Ladder Racks</Link></li>
        <li><Link href="#">Partitions</Link></li>
        <li><Link href="#">Accessories</Link></li>
      </ul>
      <Link href="/" className="button">Back to Home</Link>
    </main>
  );
}
