"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const STATS = [
  { icon: Heart, label: "Happy Mothers", value: "1000+" },
  { icon: Star, label: "Avg. Rating", value: "4.5" },
  { icon: ShieldCheck, label: "Verified", value: "100%" },
];

const HERO_IMAGES = [
  {
    src: "/hero-1.jpg",
    alt: "Traditional Indian baby oil massage by experienced caregiver",
    caption: "Traditional Baby Massage",
  },
  {
    src: "/hero-2.jpg",
    alt: "Loving mother caring for her newborn baby",
    caption: "Loving Mother Care",
  },
  {
    src: "/hero-3.jpg",
    alt: "Experienced Indian caregiver supporting new mother",
    caption: "Expert Postpartum Support",
  },
  {
    src: "/hero-4.jpg",
    alt: "Happy Indian family with newborn baby",
    caption: "Happy Families",
  },
];

const getDailyMothersCount = () => {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const seed = dayOfYear + today.getFullYear();
  const random = Math.abs(Math.sin(seed) * 10000) % 60;
  return Math.floor(120 + random);
};

export default function Hero() {
  const [mothersToday, setMothersToday] = useState(138);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setMothersToday(getDailyMothersCount());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFF3EC] to-[#FDE8E4] min-h-screen flex items-center">

      <div
        className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-200 rounded-full blur-[100px] md:blur-[140px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-amber-200 rounded-full blur-[160px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="hidden md:block absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#d97757 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-4 md:mb-6">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-gray-700 tracking-wide">
              TRUSTED BY 2,000+ FAMILIES
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.05] tracking-tight text-gray-900">
            Loving care <br />
            for{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              mothers
            </span>{" "}
            <br />
            & newborns.
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
            Verified Jaapa caregivers offering compassionate postpartum support
            — right at your doorstep. 💕
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-10">
            <Link
              href="/book-caregiver"
              aria-label="Book a verified Jaapa caregiver"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-5 md:px-7 py-3 md:py-4 rounded-full shadow-lg text-sm md:text-base"
            >
              Book a Caregiver
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <Link
              href="/become-caregiver"
              aria-label="Apply to become a caregiver"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-full font-semibold bg-white/80 backdrop-blur border border-gray-200 text-gray-800 text-sm md:text-base"
            >
              Become a Caregiver
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-14 pt-6 md:pt-8 border-t border-gray-200/70">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2 md:gap-3">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon size={16} className="text-rose-500" />
                </div>
                <div>
                  <p className="font-serif text-lg md:text-xl font-semibold text-gray-900 leading-none">
                    {value}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] md:h-[560px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white">
            {/* 🎯 FIX: all 4 images mounted upfront, switched via opacity — no refetch on rotation */}
            {HERO_IMAGES.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover absolute inset-0 transition-opacity duration-700 ${
                  i === currentImage ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              />
            ))}
            <div
              className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${currentImage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/90 backdrop-blur-md rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg"
                >
                  <p className="text-xs md:text-sm font-semibold text-gray-800">
                    {HERO_IMAGES[currentImage].caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10 flex gap-2">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentImage === index
                      ? "w-6 md:w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating Card — Top Right */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden sm:flex absolute -top-3 md:-top-5 -right-3 md:-right-5 bg-white rounded-2xl px-3 md:px-5 py-2 md:py-4 shadow-xl border border-gray-100 z-20 items-center gap-2 md:gap-3"
          >
            <div
              className="w-8 md:w-11 h-8 md:h-11 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-md"
              aria-hidden="true"
            >
              <Heart size={14} fill="white" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-500">Now serving</p>
              <p className="font-serif text-sm md:text-base font-semibold text-gray-900">
                {mothersToday} mothers today
              </p>
            </div>
          </motion.div>

          {/* Floating Card — Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 max-w-[240px] z-20"
          >
            <div className="flex items-center gap-1 mb-2" aria-label="5 star rating">
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

          {/* Floating Badge — Top Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute top-3 md:top-6 left-3 md:left-6 bg-white/90 backdrop-blur rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg border border-teal-100 flex items-center gap-1.5 md:gap-2 z-20"
          >
            <ShieldCheck size={14} className="text-teal-600" aria-hidden="true" />
            <span className="text-[10px] md:text-xs font-semibold text-gray-800">
              100% Verified
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}