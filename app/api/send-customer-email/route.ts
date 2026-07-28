import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, city, experience, availability } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Jaapa Cares <onboarding@resend.dev>",
      to: email,
      subject: "✅ Your Jaapa Caregiver Application is Received",
      html: `
        <div style="font-family: Arial; max-width:600px; margin:auto; padding:20px;">
          <h2 style="color:#db2777;">Application Received 🎉</h2>
          <p>Dear <strong>${name}</strong>,</p>

          <p>Thank you for applying as a JaapaCaregivers.</p>

          <h4>Your Details:</h4>
          <ul>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Experience:</strong> ${experience}</li>
            <li><strong>Availability:</strong> ${availability}</li>
          </ul>

          <p>Our team will contact you within <strong>48 hours</strong>.</p>

          <br/>
          <p>Regards,<br/><strong>Team Jaapa Cares</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Email send failed" },
      { status: 500 }
    );
  }
}