import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-black p-10 text-[#F7F3ED] text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Welcome to Access Rack Solutions Inc.
        </h1>
        <p className="max-w-2xl mx-auto opacity-90 text-lg">
          Van upfitting, shelving, partitions, and ladder racks – compare pricing across
          distributors and ship direct.
        </p>
        <div className="mt-6">
          <Link
            href="/shop"
            className="inline-block bg-[#C0392B] text-white font-semibold rounded-xl px-6 py-3 shadow"
          >
            Shop Products
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Shelving", "Ladder Racks", "Partitions", "Accessories"].map((c) => (
          <div
            key={c}
            className="bg-[#FFFDF8] rounded-2xl shadow-sm border border-[#E6DCCD] p-4"
          >
            <div className="aspect-[4/3] bg-[#F1E9DE] rounded-xl mb-3" />
            <div className="font-medium text-center">{c}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
