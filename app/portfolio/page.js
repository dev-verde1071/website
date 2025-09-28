import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <h2>Our Work Portfolio</h2>
      <p>
        Here you’ll find examples of the work we’ve completed, from shelving
        installations to full commercial van customizations.
      </p>
      <ul>
        <li>Ford Transit shelving systems</li>
        <li>Mercedes Sprinter ladder rack installs</li>
        <li>RAM ProMaster partition and storage solutions</li>
      </ul>
      <Link href="/" className="button">Back to Home</Link>
    </main>
  );
}
