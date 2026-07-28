"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Star } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    icon: Star,
    name: "Basic",
    price: "9,999",
    duration: "7 Days Care",
    tag: "Perfect Start",
    color: "from-teal-400 to-emerald-500",
    features: [
      "Daily 8-hour caregiver support",
      "Basic newborn care",
      "Mother wellness check",
      "WhatsApp support",
      "Verified caregiver",
    ],
    popular: false,
    planValue: "7 Days",
  },
  {
    icon: Crown,
    name: "Premium",
    price: "24,999",
    duration: "30 Days Care",
    tag: "Most Popular",
    color: "from-rose-500 to-pink-500",
    features: [
      "Daily 12-hour caregiver support",
      "Complete newborn care",
      "Baby massage sessions",
      "Postpartum meal planning",
      "24/7 emergency support",
      "Backup caregiver",
    ],
    popular: true,
    planValue: "30 Days",
  },
  {
    icon: Sparkles,
    name: "VIP",
    price: "39,999",
    duration: "45 Days Care",
    tag: "Ultimate Care",
    color: "from-amber-500 to-orange-500",
    features: [
      "24/7 dedicated caregiver",
      "Premium newborn care",
      "Daily massage & yoga",
      "Nutritionist consultation",
      "Lactation expert",
      "Weekly pediatrician visit",
      "Wellness therapy sessions",
    ],
    popular: false,
    planValue: "45 Days",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FDE8E4] to-white py-24"
    >
      {/* Blobs */}
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-40" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
            <Crown size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              TRANSPARENT PRICING
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            Choose your{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              care plan
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Honest pricing. No hidden fees. Cancel anytime. Every plan includes
            100% verified caregivers.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gray-900 text-white shadow-2xl shadow-rose-300 scale-105"
                  : "bg-white shadow-lg hover:shadow-2xl border border-gray-100"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg mb-6`}
              >
                <plan.icon size={24} className="text-white" />
              </div>

              {/* Tag */}
              <span
                className={`text-xs font-semibold tracking-wide ${
                  plan.popular ? "text-rose-300" : "text-rose-500"
                }`}
              >
                {plan.tag.toUpperCase()}
              </span>

              {/* Name */}
              <h3
                className={`font-serif text-3xl font-semibold mt-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-2xl font-medium ${
                    plan.popular ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  ₹
                </span>
                <span
                  className={`font-serif text-5xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={`text-sm mt-1 ${
                  plan.popular ? "text-white/60" : "text-gray-500"
                }`}
              >
                {plan.duration}
              </p>

              {/* Features */}
              <div
                className={`h-px my-6 ${
                  plan.popular ? "bg-white/10" : "bg-gray-100"
                }`}
              />
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-rose-500" : "bg-rose-100"
                      }`}
                    >
                      <Check
                        size={12}
                        className={
                          plan.popular ? "text-white" : "text-rose-600"
                        }
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button — Redirects to Book Caregiver */}
              <Link
                href={`/book-caregiver?plan=${encodeURIComponent(
                  plan.planValue
                )}`}
                className={`block text-center w-full mt-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-white text-gray-900 hover:shadow-2xl"
                    : "bg-gray-900 text-white hover:shadow-xl"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}