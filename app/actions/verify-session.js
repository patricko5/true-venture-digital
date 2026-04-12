import { stripe } from "@/lib/stripe";

export async function verifyStripeSession(sessionId) {
  if (!sessionId) return null;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // Convert to plain object to avoid Next.js serialization errors
    return JSON.parse(JSON.stringify(session));
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    return null;
  }
}
