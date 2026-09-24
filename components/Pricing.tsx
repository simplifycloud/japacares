"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Star, ShieldCheck, RefreshCw, Zap, Moon, Sun } from "lucide-react";

// 🎯 APNA REAL WHATSAPP NUMBER
const WHATSAPP_NUMBER = "918239548307";

const PLANS = [
  {
    icon: Star,
    name: "Starter Trial",
    perDayPrice: "1,400",
    totalPrice: "9,800",
    days: "7 Days Care",
    shiftBadge: "☀️ 8 Hours / Day",
    shiftType: "day",
    tag: "Try Before Full Booking",
    color: "from-teal-400 to-emerald-500",
    features: [
      "Daily 8-hour caregiver support",
      "Traditional baby oil massage & bath",
      "Mother wellness check & guidance",
      "Police verified caregiver",
      "Free caregiver replacement",
    ],
    popular: false,
    savingsBadge: null,
  },
  {
    icon: Crown,
    name: "Complete Recovery",
    perDayPrice: "1,000",
    totalPrice: "30,000",
    days: "30 Days Care",
    shiftBadge: "☀️ 8 Hours / Day",
    shiftType: "day",
    tag: "Most Loved By Mothers",
    color: "from-rose-500 to-pink-500",
    features: [
      "Daily 08-hour dedicated caregiver",
      "Complete newborn massage & bath",
      "Mother postpartum massage & recovery",
      "Postpartum diet guidance",
      "24/7 Emergency support",
      "Free instant backup caregiver",
    ],
    popular: true,
    savingsBadge: "SAVE 29% PER DAY",
  },
  {
    icon: Sparkles,
    name: "VIP 24/7 Care",
    perDayPrice: "1,300",
    totalPrice: "39,000",
    days: "30 Days Full Care",
    shiftBadge: "🌙 24/7 LIVE-IN CAREGIVER",
    shiftType: "livein", // Highlighted shift
    tag: "Full Stress-Free Package",
    color: "from-amber-500 to-orange-500",
    features: [
      "24/7 Dedicated live-in caregiver (Full Stay)",
      "Complete newborn & mother care",
      "Night feeding & sleep support for mom",
      "C-section special recovery care",
      "Dedicated senior manager support",
    ],
    popular: false,
    savingsBadge: "BEST VALUE FOR 24/7",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FDE8E4] to-white py-24">

      {/* Background Blobs */}
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
            <Crown size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              AFFORDABLE & TRANSPARENT PRICING
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            Professional care starting at{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              ₹1,000 / day
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            No hidden agency commission. 100% verified & background checked caregivers for your peace of mind.
          </p>

          {/* Trust Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <ShieldCheck size={14} /> 100% Police Verified
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-full">
              <RefreshCw size={14} /> Free Replacement Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
              <Zap size={14} /> Zero Hidden Charges
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => {
            // Custom WhatsApp Message
            const waMessage = `Hi JapaCares! 👋 I want to book the *${plan.name}* package (${plan.days} - ${plan.shiftBadge} at ₹${plan.totalPrice}). Please share caregiver details.`;
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                  plan.popular
                    ? "bg-gray-900 text-white shadow-2xl shadow-rose-300 md:-translate-y-2 border-2 border-rose-500"
                    : "bg-white shadow-lg hover:shadow-2xl border border-gray-100"
                }`}
              >
                <div>
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        ⭐ MOST POPULAR VALUE
                      </span>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savingsBadge && !plan.popular && (
                    <span className="absolute top-6 right-6 text-[10px] font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200">
                      {plan.savingsBadge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg mb-6`}>
                    <plan.icon size={24} className="text-white" />
                  </div>

                  {/* Tag */}
                  <span className={`text-xs font-semibold tracking-wide ${plan.popular ? "text-rose-300" : "text-rose-500"}`}>
                    {plan.tag.toUpperCase()}
                  </span>

                  {/* Name */}
                  <h3 className={`font-serif text-3xl font-semibold mt-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-sm font-semibold uppercase ${plan.popular ? "text-rose-300" : "text-gray-500"}`}>Just</span>
                      <span className={`text-xl font-bold ${plan.popular ? "text-white/80" : "text-gray-700"}`}>₹</span>
                      <span className={`font-serif text-4xl md:text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                        {plan.perDayPrice}
                      </span>
                      <span className={`text-sm font-medium ${plan.popular ? "text-white/70" : "text-gray-500"}`}>/ day</span>
                    </div>

                    <p className={`text-xs font-medium mt-1.5 ${plan.popular ? "text-rose-200" : "text-gray-500"}`}>
                      Total: ₹{plan.totalPrice} for {plan.days}
                    </p>

                    {/* 🎯 ATTRACTIVE BOLD SHIFT BADGE */}
                    <div className="mt-3">
                      {plan.shiftType === "livein" ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-3.5 py-1.5 rounded-full shadow-md tracking-wider border border-amber-300 animate-pulse">
                          <Moon size={13} className="fill-white" /> {plan.shiftBadge}
                        </span>
                      ) : (
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${
                          plan.popular 
                            ? "bg-white/10 text-rose-200 border-white/20" 
                            : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}>
                          <Sun size={13} className={plan.popular ? "text-amber-300" : "text-amber-500"} /> {plan.shiftBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Divider */}
                  <div className={`h-px my-6 ${plan.popular ? "bg-white/10" : "bg-gray-100"}`} />

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-rose-500 text-white" : "bg-rose-100 text-rose-600"
                        }`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DIRECT WHATSAPP REDIRECT BUTTON */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mt-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 text-center block ${
                    plan.popular
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl hover:shadow-2xl"
                      : "bg-gray-900 text-white hover:bg-rose-600 shadow-lg"
                  }`}
                >
                  Book Caregiver Now
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Why JapaCares vs Local Maid Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-rose-100 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-6">
            Why families choose JapaCares over Local Maids / Unverified Daais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-100">
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-500">❌</span> Local Unverified Maids:
              </p>
              <ul className="space-y-2 text-gray-600 text-xs md:text-sm">
                <li>• No background or criminal check</li>
                <li>• Unreliable attendance & sudden leaves</li>
                <li>• Traditional methods without hygiene training</li>
                <li>• No backup if she falls sick</li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100">
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-emerald-600">✅</span> JapaCares Certified Caregivers:
              </p>
              <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-medium">
                <li>• 100% Police verified & background checked</li>
                <li>• Trained in newborn CPR & hygiene protocols</li>
                <li>• Punctual with daily attendance tracking</li>
                <li>• Instant FREE replacement guarantee</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}