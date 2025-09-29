import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const items = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100
      },
      quantity: item.qty
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/cart?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart?canceled=true`
  });

  return new Response(JSON.stringify({ id: session.id }), { status: 200 });
}
