import Link from "next/link";

export default function CompanyPage() {
  return (
    <main>
      <h2>About Access Rack Solutions Inc.</h2>
      <p>
        Access Rack Solutions Inc. specializes in commercial van upfitting
        solutions. We partner with distributors to provide high-quality
        shelving, ladder racks, partitions, and accessories.
      </p>
      <p>
        Our goal is to deliver exceptional value to customers by combining
        installation expertise with direct shipping convenience.
      </p>
      <Link href="/" className="button">Back to Home</Link>
    </main>
  );
}
