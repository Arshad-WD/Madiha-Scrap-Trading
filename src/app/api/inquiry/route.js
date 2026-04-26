import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, scrapType, message } = body;

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!scrapType) {
      return NextResponse.json(
        { error: "Scrap type is required" },
        { status: 400 }
      );
    }

    // Log the inquiry (replace with email service later)
    console.log("=== NEW INQUIRY RECEIVED ===");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Scrap Type: ${scrapType}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("============================");

    // TODO: Integrate with email service (Resend / Nodemailer)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@madihascraptrading.com',
    //   to: process.env.NEXT_PUBLIC_EMAIL,
    //   subject: `New Inquiry from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Type: ${scrapType}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. We will contact you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
