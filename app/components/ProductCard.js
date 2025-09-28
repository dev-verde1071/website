export default function ProductCard({ v }) {
  if (!v) {
    return (
      <li className="product-card">
        <div className="font-semibold mb-1">Invalid product</div>
      </li>
    );
  }

  const vendorItems = Array.isArray(v?.vendorItems) ? v.vendorItems : [];
  const validOffers = vendorItems.filter(
    (o) => o && typeof o.priceCents === "number"
  );

  const minOffer =
    validOffers.length > 0
      ? validOffers.reduce((a, b) =>
          a.priceCents <= b.priceCents ? a : b
        )
      : null;

  return (
    <li className="product-card">
      <div className="product-image"></div>
      <h3 className="font-semibold mb-1">{v?.name || "Product"}</h3>
      {minOffer ? (
        <p className="text-sm">
          From ${(minOffer.priceCents / 100).toFixed(2)} ·{" "}
          {validOffers.length}{" "}
          {validOffers.length === 1 ? "offer" : "offers"}
        </p>
      ) : (
        <p className="text-sm">No offers yet</p>
      )}
      <a href={`/product/${v?.id ?? ""}`} className="underline text-sm">
        Compare prices
      </a>
    </li>
  );
}
