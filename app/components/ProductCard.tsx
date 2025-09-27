export function isValidOffer(o: any) {
  return o && typeof o.priceCents === "number" && isFinite(o.priceCents);
}

export function selectMinOffer(offers: any[] | null | undefined) {
  if (!Array.isArray(offers)) return null;
  const valid = offers.filter(isValidOffer);
  return valid.length
    ? valid.reduce((a, b) => (a.priceCents <= b.priceCents ? a : b))
    : null;
}

export function summarizeOffers(offers: any[] | null | undefined) {
  const valid = Array.isArray(offers) ? offers.filter(isValidOffer) : [];
  const min = selectMinOffer(valid);
  return { count: valid.length, minPriceCents: min?.priceCents ?? null };
}

export default function ProductCard({ v }: { v: any }) {
  if (!v) {
    return (
      <li className="bg-[#FFFDF8] rounded-2xl p-4 shadow-sm border border-[#E6DCCD]">
        <div className="font-semibold mb-1">Invalid product</div>
      </li>
    );
  }
  const vendorItems = Array.isArray(v?.vendorItems) ? v.vendorItems : [];
  const summary = summarizeOffers(vendorItems);
  const hasOffers = summary.count > 0;
  const minPrice =
    summary.minPriceCents != null ? (summary.minPriceCents / 100).toFixed(2) : null;

  return (
    <li className="bg-[#FFFDF8] rounded-2xl p-4 shadow-sm border border-[#E6DCCD]">
      <div className="aspect-video bg-[#F1E9DE] rounded-xl mb-3" />
      <h3 className="font-semibold mb-1">{v?.product?.title || v?.name || "Product"}</h3>
      {hasOffers ? (
        <p className="text-sm text-[#7A6A5A] mb-2">
          From ${minPrice} · {summary.count}{" "}
          {summary.count === 1 ? "offer" : "offers"}
        </p>
      ) : (
        <p className="text-sm text-[#7A6A5A] mb-2">No offers yet</p>
      )}
      <a href={`/product/${v?.id ?? ""}`} className="text-sm underline">
        Compare prices
      </a>
    </li>
  );
}
