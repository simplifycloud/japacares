import { NextRequest, NextResponse } from "next/server";
import { getBotReply } from "@/lib/booking-bot";
import { sendWhatsAppMessage } from "@/lib/whatsapp";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

// Meta webhook verification
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("WhatsApp webhook verified");

    return new NextResponse(challenge, {
      status: 200,
    });
  }

  return NextResponse.json(
    {
      error: "Webhook verification failed",
    },
    {
      status: 403,
    }
  );
}

// Receive WhatsApp messages
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log(
      "WhatsApp webhook received:",
      JSON.stringify(body, null, 2)
    );

    const value = body?.entry?.[0]?.changes?.[0]?.value;

    const message = value?.messages?.[0];

    // Ignore status updates and other webhook events
    if (!message) {
      return NextResponse.json(
        { received: true },
        { status: 200 }
      );
    }

    const from = message.from;

    const messageType = message.type;

    // Currently we process text messages only
    if (messageType !== "text") {
      await sendWhatsAppMessage(
        from,
        "Sorry, I can currently process text messages only. 😊\n\nPlease type HI to start."
      );

      return NextResponse.json(
        { received: true },
        { status: 200 }
      );
    }

    const text = message.text?.body?.trim() || "";

    console.log("Customer:", from);
    console.log("Message:", text);

    // Generate bot response
    const reply = getBotReply(from, text);

    console.log("Bot reply:", reply);

    // Send response back to the same WhatsApp number
    await sendWhatsAppMessage(from, reply);

    return NextResponse.json(
      {
        received: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("WhatsApp webhook error:", error);

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      {
        status: 500,
      }
    );
  }
}