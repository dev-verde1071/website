import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.title },
          unit_amount: item.priceCents,
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Stripe session failed" }, { status: 500 });
  }
}
