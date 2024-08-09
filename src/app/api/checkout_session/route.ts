import { NextApiRequest, NextApiResponse } from 'next';
import stripe from '../../../lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { priceId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 400 });
    }
  }
}