"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export async function createCheckoutSession() {
  // 1. Validate environment variables
  let priceId = process.env.STRIPE_PRICE_ID;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  if (!priceId || priceId.includes("price_XXXXX") || priceId.includes("prod_XXXXX")) {
    console.error("STRIPE_PRICE_ID is not configured in .env.local");
    throw new Error("Checkout is temporarily unavailable. Please contact support.");
  }

  try {
    // 2. Resolve Product ID to Price ID if necessary
    if (priceId.startsWith("prod_")) {
      console.log(`Resolving Product ID ${priceId} to default price...`);
      const product = await stripe.products.retrieve(priceId);
      
      if (!product.default_price) {
        throw new Error(
          "This product has no default price configured in Stripe. Please add a price to the product."
        );
      }
      
      priceId = typeof product.default_price === 'string' 
        ? product.default_price 
        : product.default_price.id;
        
      console.log(`Resolved to Price ID: ${priceId}`);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/checkout`,
      metadata: {
        product: "Starter Website Package",
      },
    });

    if (!session.url) {
      throw new Error("No session URL returned from Stripe");
    }

    // Assign to variable so we can redirect outside the try/catch
    var redirectUrl = session.url;
    
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    throw new Error(
      error.message || "Failed to initiate checkout. Please try again later."
    );
  }

  // 4. Redirect (must be outside try/catch in Server Actions)
  if (redirectUrl) {
    redirect(redirectUrl);
  }
}
