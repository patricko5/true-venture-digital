import { verifyStripeSession } from "@/app/actions/verify-session";
import SuccessUI from "./SuccessUI";

export default async function CheckoutSuccessPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = params.session_id;
  
  let session = null;
  let error = null;

  if (!sessionId) {
    error = "Missing session ID";
  } else {
    session = await verifyStripeSession(sessionId);
    if (!session || session.status !== "complete") {
      error = "Invalid or incomplete session";
    }
  }

  return <SuccessUI session={session} error={error} />;
}
