export type BookingState = {
  step:
    | "menu"
    | "service"
    | "location"
    | "startDate"
    | "duration"
    | "timing"
    | "name"
    | "requirements"
    | "completed";

  service?: string;
  location?: string;
  startDate?: string;
  duration?: string;
  timing?: string;
  name?: string;
  requirements?: string;
};

const initialState: BookingState = {
  step: "menu",
};

const sessions = new Map<string, BookingState>();

function getSession(phone: string): BookingState {
  return sessions.get(phone) || { ...initialState };
}

function saveSession(phone: string, state: BookingState) {
  sessions.set(phone, state);
}

function welcomeMessage() {
  return `👋 Welcome to JapaCares!

We provide newborn and postpartum caregiver services.

How can we help you today?

1️⃣ Book a Caregiver
2️⃣ Our Services
3️⃣ Pricing
4️⃣ Service Areas
5️⃣ Talk to a Human

Reply with a number.`;
}

export function getBotReply(
  phone: string,
  incomingMessage: string
): string {
  const message = incomingMessage.trim();
  const lowerMessage = message.toLowerCase();

  let state = getSession(phone);

  // Start / reset conversation
  if (
    ["hi", "hello", "hey", "start", "menu"].includes(lowerMessage)
  ) {
    state = { step: "menu" };
    saveSession(phone, state);

    return welcomeMessage();
  }

  // Human handoff
  if (
    lowerMessage === "human" ||
    lowerMessage === "5"
  ) {
    state = { step: "menu" };
    saveSession(phone, state);

    return `👩‍💼 Sure!

Our JapaCares team will assist you personally.

Please stay connected here on WhatsApp. ❤️`;
  }

  // Main menu
  if (state.step === "menu") {
    switch (message) {
      case "1":
        state.step = "service";
        saveSession(phone, state);

        return `Great! ❤️ Let's arrange the right care for you.

What service do you need?

1️⃣ Newborn Care
2️⃣ Mother & Baby Care
3️⃣ Postpartum Care
4️⃣ Other`;

      case "2":
        return `❤️ Our Services

👶 Newborn Care
• Newborn daily care
• Feeding support
• Baby hygiene
• Baby massage

🤱 Mother & Baby Care
• Mother wellness support
• Newborn care
• Postpartum assistance

🌸 Postpartum Care
• Mother recovery support
• Nutrition assistance
• Baby care

Reply 1️⃣ to book a caregiver or type MENU.`;

      case "3":
        return `💰 JapaCares Plans

⭐ Basic
₹9,999 — 7 Days Care

👑 Premium
₹24,999 — 30 Days Care

✨ VIP
₹39,999 — 45 Days Care

For custom requirements, our team can check availability.

Reply 1️⃣ to book or type MENU.`;

      case "4":
        return `📍 JapaCares Service Areas

Please tell us your city/location and our team will check caregiver availability.

Example:
Agra, Uttar Pradesh`;

      default:
        return `Please choose one of the options:

1️⃣ Book a Caregiver
2️⃣ Our Services
3️⃣ Pricing
4️⃣ Service Areas
5️⃣ Talk to a Human`;
    }
  }

  // Service selection
  if (state.step === "service") {
    const services: Record<string, string> = {
      "1": "Newborn Care",
      "2": "Mother & Baby Care",
      "3": "Postpartum Care",
      "4": "Other",
    };

    if (!services[message]) {
      return `Please choose:

1️⃣ Newborn Care
2️⃣ Mother & Baby Care
3️⃣ Postpartum Care
4️⃣ Other`;
    }

    state.service = services[message];
    state.step = "location";

    saveSession(phone, state);

    return `Perfect ❤️

📍 Which city/location do you need the caregiver in?

Example:
Agra, Uttar Pradesh`;
  }

  // Location
  if (state.step === "location") {
    state.location = message;
    state.step = "startDate";

    saveSession(phone, state);

    return `Thank you! 📍

📅 When would you like the caregiver service to start?

Example:
25 September 2026`;
  }

  // Start date
  if (state.step === "startDate") {
    state.startDate = message;
    state.step = "duration";

    saveSession(phone, state);

    return `Got it. 👍

⏳ How long do you need the service?

Example:
7 Days
30 Days
45 Days`;
  }

  // Duration
  if (state.step === "duration") {
    state.duration = message;
    state.step = "timing";

    saveSession(phone, state);

    return `Thanks! 🕐

What timing do you need?

Example:
8 hours/day
12 hours/day
24 hours`;
  }

  // Timing
  if (state.step === "timing") {
    state.timing = message;
    state.step = "name";

    saveSession(phone, state);

    return `Almost done! ❤️

👤 May I have your name?`;
  }

  // Name
  if (state.step === "name") {
    state.name = message;
    state.step = "requirements";

    saveSession(phone, state);

    return `Thank you, ${state.name}! ❤️

📝 Do you have any special requirements?

For example:
• Baby age
• Twins
• Night care
• Mother recovery support
• Any other requirement

If none, simply reply:
No`;
  }

  // Requirements + final summary
  if (state.step === "requirements") {
    state.requirements = message;
    state.step = "completed";

    saveSession(phone, state);

    return `✅ JapaCares Booking Summary

👤 Name: ${state.name}
📍 Location: ${state.location}
👶 Service: ${state.service}
📅 Start Date: ${state.startDate}
⏳ Duration: ${state.duration}
🕐 Timing: ${state.timing}
📝 Requirements: ${state.requirements}

Thank you for choosing JapaCares! ❤️

Our team will check caregiver availability and contact you shortly.

👩‍💼 Need assistance?
Reply HUMAN

🔄 To start a new booking, reply MENU.`;
  }

  // Completed conversation
  if (state.step === "completed") {
    if (lowerMessage === "menu") {
      state = { step: "menu" };
      saveSession(phone, state);

      return welcomeMessage();
    }

    return `Your booking request has been received. ❤️

Our JapaCares team will contact you shortly.

Reply MENU to start again or HUMAN to request personal assistance.`;
  }

  return welcomeMessage();
}