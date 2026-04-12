import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const { firstName, lastName, email, phone, message } = data;

    // Basic server-side validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (replace with email/CRM integration later)
    console.log("=== NEW FREE AUDIT REQUEST ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Company: ${data.companyName || "N/A"}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log("==============================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Free audit form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
