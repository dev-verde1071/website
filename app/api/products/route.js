import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category"); // optional filter

    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });

    // Optionally filter by metadata
    const filtered = category
      ? products.data.filter((p) => p.metadata.category === category)
      : products.data;

    // Normalize data
    const formatted = filtered.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.default_price?.unit_amount / 100 || 0,
      currency: p.default_price?.currency || "usd",
      image: p.images[0] || null,
      metadata: p.metadata,
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
