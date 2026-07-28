"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "New Mother",
    location: "Delhi",
    rating: 5,
    review:
      "JapaCares ne meri delivery ke baad zindagi asaan kar di! Meri caregiver Sunita didi bahut hi caring aur experienced thi. Baby ki maalish, feeding, sab kuch expert level pe kiya. Highly recommended!",
    package: "Premium Package • 30 Days",
    color: "from-rose-500 to-pink-500",
    avatarBg: "bg-gradient-to-br from-rose-400 to-pink-600",
  },
  {
    name: "Anjali Patel",
    initials: "AP",
    role: "First-time Mom",
    location: "Mumbai",
    rating: 5,
    review:
      "As a first-time mother, I was very anxious. JapaCares caregiver made my postpartum journey smooth. She was punctual, professional, and treated my baby like her own. Worth every penny!",
    package: "VIP Package • 45 Days",
    color: "from-amber-500 to-orange-500",
    avatarBg: "bg-gradient-to-br from-amber-400 to-orange-600",
  },
  {
    name: "Sneha Reddy",
    initials: "SR",
    role: "Working Mother",
    location: "Gurgaon",
    rating: 5,
    review:
      "Excellent service! Verified caregiver aai, background check bhi proper tha. Baby ke saath itni pyaar se pesh aai. Traditional malish aur ayurvedic care dono provide kiye. Trust worthy platform!",
    package: "Premium Package • 30 Days",
    color: "from-teal-500 to-emerald-500",
    avatarBg: "bg-gradient-to-br from-teal-400 to-emerald-600",
  },
  {
    name: "Meera Kapoor",
    initials: "MK",
    role: "Second-time Mom",
    location: "Noida",
    rating: 5,
    review:
      "Second baby ke liye maine JapaCares try kiya aur bahut khush hu! Caregiver ne meri diet, baby care, aur night support sab handle kiya. Family jaise feel hua. Definitely recommend!",
    package: "Premium Package • 30 Days",
    color: "from-purple-500 to-indigo-500",
    avatarBg: "bg-gradient-to-br from-purple-400 to-indigo-600",
  },
  {
    name: "Kavita Singh",
    initials: "KS",
    role: "New Mother",
    location: "Jaipur",
    rating: 5,
    review:
      "C-section ke baad recovery bahut mushkil thi. JapaCares caregiver ne mere aur baby dono ki bahut achi care ki. Postpartum diet, exercises, sab guide kiya. Bahut acha experience raha!",
    package: "VIP Package • 45 Days",
    color: "from-pink-500 to-rose-500",
    avatarBg: "bg-gradient-to-br from-pink-400 to-rose-600",
  },
  {
    name: "Ritu Verma",
    initials: "RV",
    role: "First-time Mom",
    location: "Agra",
    rating: 5,
    review:
      "Absolutely amazing service! 24/7 support, professional caregivers, aur reasonable pricing. Baby ki care ke liye best decision liya JapaCares choose karke. Thank you team!",
    package: "Basic Package • 7 Days",
    color: "from-cyan-500 to-blue-500",
    avatarBg: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
];

// 🎯 Avatar Component — Uses initials with gradient (Super Fast!)
const Avatar = ({
  initials,
  bgClass,
  size = "md",
}: {
  initials: string;
  bgClass: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${bgClass} rounded-full flex items-center justify-center text-white font-bold ring-4 ring-white shadow-lg`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-white to-[#FDE8E4] py-24"
    >
      {/* Background blobs */}
      <div
        className="absolute top-20 left-0 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

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
            <Star
              size={14}
              className="text-rose-500 fill-rose-500"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              LOVED BY 2,000+ FAMILIES
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            What our{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              mothers
            </span>{" "}
            say
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Real stories from real families who trusted us with their most
            precious moments. 💕
          </p>

          {/* Rating Summary */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="font-serif text-2xl font-bold text-gray-900">
                4.9/5
              </p>
              <p className="text-xs text-gray-500">From 2,000+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Main Featured Review */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Decorative gradient */}
            <div
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${REVIEWS[currentIndex].color}`}
              aria-hidden="true"
            />

            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-gray-900" aria-hidden="true" />
            </div>

            <div className="relative p-8 md:p-12">
              {/* Rating Stars */}
              <div
                className="flex items-center gap-1 mb-6"
                aria-label={`${REVIEWS[currentIndex].rating} out of 5 star rating`}
              >
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic"
              >
                &ldquo;{REVIEWS[currentIndex].review}&rdquo;
              </motion.p>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <Avatar
                  initials={REVIEWS[currentIndex].initials}
                  bgClass={REVIEWS[currentIndex].avatarBg}
                  size="md"
                />

                <div className="flex-1">
                  <h4 className="font-serif text-lg font-semibold text-gray-900">
                    {REVIEWS[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {REVIEWS[currentIndex].role} •{" "}
                    {REVIEWS[currentIndex].location}
                  </p>
                  <div
                    className={`inline-block mt-1 text-xs font-semibold bg-gradient-to-r ${REVIEWS[currentIndex].color} bg-clip-text text-transparent`}
                  >
                    {REVIEWS[currentIndex].package}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "w-8 h-2 bg-rose-500"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-900 font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-1">/</span>
              <span>{String(REVIEWS.length).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>

        {/* Mini Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 transition-all hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar
                    initials={review.initials}
                    bgClass={review.avatarBg}
                    size="sm"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-3xl bg-white/70 backdrop-blur-md border border-rose-100 shadow-lg">
            <div className="flex -space-x-3">
              {REVIEWS.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className={`w-10 h-10 rounded-full ${review.avatarBg} ring-2 ring-white flex items-center justify-center text-white text-xs font-bold`}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                2K+
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Join thousands of happy mothers 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}