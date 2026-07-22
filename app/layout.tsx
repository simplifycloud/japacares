import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// 🎯 Complete SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://japacares.com"),

  // Basic SEO
  title: {
    default:
      "JapaCares - Verified Jaapa Caregivers for Mothers & Newborns in India",
    template: "%s | JapaCares",
  },
  description:
    "Book verified & trained Jaapa caregivers for postpartum mother care and newborn care. Available in Delhi, Mumbai, Gurgaon, Noida, Jaipur & Agra. 24/7 support, 100% verified caregivers with police background checks.",

  keywords: [
    "japa maid",
    "jaapa caregiver",
    "japa services",
    "postpartum care",
    "newborn care",
    "mother care",
    "baby massage",
    "japa maid Delhi",
    "japa maid Mumbai",
    "japa maid Gurgaon",
    "japa maid Noida",
    "japa maid Jaipur",
    "verified caregiver India",
    "postnatal care",
    "maternity care India",
    "nanny services",
    "night care for baby",
    "lactation support",
    "postpartum recovery",
    "japa care services",
  ],

  authors: [{ name: "JapaCares", url: "https://japacares.com" }],
  creator: "JapaCares",
  publisher: "JapaCares",

  // 🌐 Open Graph (Facebook, WhatsApp, LinkedIn preview)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://japacares.com",
    siteName: "JapaCares",
    title: "JapaCares - Verified Jaapa Caregivers for Mothers & Newborns",
    description:
      "Book verified & trained Jaapa caregivers for postpartum mother care. Available across India with 24/7 support.",
    images: [
      {
        url: "/og-image.jpg", // 👈 Add this image later (1200x630px)
        width: 1200,
        height: 630,
        alt: "JapaCares - Verified Jaapa Caregivers for Mothers & Newborns",
      },
    ],
  },

  // 🐦 Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "JapaCares - Verified Jaapa Caregivers",
    description:
      "Book verified Jaapa caregivers for mother & newborn care across India. 24/7 support, 100% verified.",
    images: ["/og-image.jpg"],
    creator: "@japacares",
  },

  // 🤖 Robots (Google Bot Settings)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔗 Canonical URL
  alternates: {
    canonical: "https://japacares.com",
  },

  // 📱 App Info
  applicationName: "JapaCares",
  category: "Healthcare",

  // 🎨 Icons (add these files to /public folder)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Google Search Console Verification (add later)
  verification: {
    // google: "your-verification-code-here",
  },

  // 📝 Format detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// 🎨 Viewport & Theme Color (separate export in Next.js 15+)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E11D48" },
    { media: "(prefers-color-scheme: dark)", color: "#E11D48" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}