import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";
import { OrderConfirmationEmail } from "@/components/emails/OrderConfirmation";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;

      // Extract details
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || "Valued Customer";
      const amountTotal = session.amount_total;
      const orderNumber = session.id.slice(-8).toUpperCase();
      const productName = session.metadata?.product || "Starter Website Package";

      if (customerEmail) {
        try {
          console.log(`Sending confirmation email to ${customerEmail}...`);
          
          await resend.emails.send({
            from: 'True Venture Digital <hello@trueventuredigital.com>',
            to: customerEmail,
            subject: 'Your Purchase Confirmation - True Venture Digital',
            react: OrderConfirmationEmail({
              customerName,
              orderNumber,
              productName,
              amountTotal,
            }),
          });
          
          console.log(`Email sent successfully to ${customerEmail}`);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We don't return 400/500 here because Stripe will keep retrying 
          // if we return a non-2xx code, and we might not want that if it's 
          // just an email failure.
        }
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

export const dynamic = "force-dynamic";

