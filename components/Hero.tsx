"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star, Heart } from "lucide-react";
import Link from "next/link";

const STATS = [
  { icon: Heart, label: "Happy Mothers", value: "2000+" },
  { icon: Star, label: "Avg. Rating", value: "4.9" },
  { icon: ShieldCheck, label: "Verified", value: "100%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFF3EC] to-[#FDE8E4] min-h-screen flex items-center">
      {/* Soft blurred blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-200 rounded-full blur-[140px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-amber-200 rounded-full blur-[160px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-teal-200 rounded-full blur-[120px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#d97757 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* ═══════════ LEFT CONTENT ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-6">
            <span
              className="relative flex h-2 w-2"
              aria-hidden="true"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              TRUSTED BY 2,000+ FAMILIES ACROSS INDIA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-gray-900">
            Loving care <br />
            for{" "}
            <span className="relative inline-block">
              <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                mothers
              </span>
            </span>{" "}
            <br />
            & newborns.
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">
            Verified Jaapa caregivers offering compassionate postpartum support
            — right at your doorstep. Because every mother deserves care as she
            cares for her baby. 💕
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/book-caregiver"
              aria-label="Book a verified Jaapa caregiver for your family"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-4 rounded-full shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Book a Caregiver
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/become-caregiver"
              aria-label="Apply to become a JapaCares caregiver"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold bg-white/80 backdrop-blur border border-gray-200 text-gray-800 hover:bg-white hover:border-gray-300 transition-all duration-300"
            >
              Become a Caregiver
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-gray-200/70">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-rose-500" />
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-gray-900 leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════ RIGHT IMAGE ═══════════ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* 🎯 Optimized Hero Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&auto=format&fit=crop"
              alt="Happy mother holding her newborn baby - JapaCares postpartum care services"
              width={1000}
              height={560}
              priority
              className="w-full h-[560px] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating card — top right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-md"
                aria-hidden="true"
              >
                <Heart size={18} fill="white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Now serving</p>
                <p className="font-serif font-semibold text-gray-900">
                  138 mothers today
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating card — bottom left (testimonial) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 max-w-[240px]"
          >
            <div
              className="flex items-center gap-1 mb-2"
              aria-label="5 out of 5 star rating"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="font-serif text-sm text-gray-800 italic leading-snug">
              &ldquo;Felt like family from day one.&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-2">— Priya, Mumbai</p>
          </motion.div>

          {/* Floating verified badge — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute bottom-8 right-4 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg border border-teal-100 flex items-center gap-2"
          >
            <ShieldCheck
              size={16}
              className="text-teal-600"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-gray-800">
              100% Verified
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}