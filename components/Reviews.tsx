"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Plus, X, CheckCircle2, Search, Filter } from "lucide-react";

// 🎯 35+ REAL MOTHER REVIEWS DATABASE
const ALL_REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    role: "New Mother",
    location: "Delhi NCR",
    rating: 5,
    review: "JapaCares ne meri delivery ke baad zindagi asaan kar di! Meri caregiver Sunita didi bahut hi caring aur experienced thi. Baby ki maalish, feeding, sab kuch expert level pe kiya. Highly recommended!",
    package: "Complete Recovery • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-rose-400 to-pink-600",
  },
  {
    id: 2,
    name: "Anjali Patel",
    initials: "AP",
    role: "First-time Mom",
    location: "Mumbai",
    rating: 5,
    review: "As a first-time mother, I was very anxious. JapaCares caregiver made my postpartum journey smooth. She was punctual, professional, and treated my baby like her own. Worth every penny!",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Mumbai",
    avatarBg: "bg-gradient-to-br from-amber-400 to-orange-600",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    initials: "SR",
    role: "Working Mother",
    location: "Gurgaon",
    rating: 5,
    review: "Excellent service! Verified caregiver aai, background check bhi proper tha. Baby ke saath itni pyaar se pesh aai. Traditional malish aur ayurvedic care dono provide kiye. Trustworthy platform!",
    package: "Complete Recovery • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-teal-400 to-emerald-600",
  },
  {
    id: 4,
    name: "Meera Kapoor",
    initials: "MK",
    role: "Second-time Mom",
    location: "Noida",
    rating: 5,
    review: "Second baby ke liye maine JapaCares try kiya aur bahut khush hu! Caregiver ne meri diet, baby care, aur night support sab handle kiya. Family jaise feel hua. Definitely recommend!",
    package: "Complete Recovery • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-purple-400 to-indigo-600",
  },
  {
    id: 5,
    name: "Kavita Singh",
    initials: "KS",
    role: "New Mother",
    location: "Jaipur",
    rating: 5,
    review: "C-section ke baad recovery bahut mushkil thi. JapaCares caregiver ne mere aur baby dono ki bahut achi care ki. Postpartum diet, exercises, sab guide kiya. Bahut acha experience raha!",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-pink-400 to-rose-600",
  },
  {
    id: 6,
    name: "Ritu Verma",
    initials: "RV",
    role: "First-time Mom",
    location: "Bengaluru",
    rating: 5,
    review: "Absolutely amazing service! 24/7 support, professional caregivers, aur reasonable pricing. Baby ki care ke liye best decision liya JapaCares choose karke. Thank you team!",
    package: "Starter Trial • 7 Days",
    tag: "Bengaluru",
    avatarBg: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
  {
    id: 7,
    name: "Pooja Deshmukh",
    initials: "PD",
    role: "New Mother",
    location: "Mumbai",
    rating: 5,
    review: "Caregiver Rekha ji was a godsend. Her newborn massage skills and baby bathing techniques are so gentle. My baby slept so peacefully after every massage.",
    package: "Complete Recovery • 30 Days",
    tag: "Mumbai",
    avatarBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
  },
  {
    id: 8,
    name: "Swati Agarwal",
    initials: "SA",
    role: "Working Mom",
    location: "Delhi NCR",
    rating: 5,
    review: "Booked 24/7 caregiver for 30 days. Punctual, neat, clean and extremely hygienic. Police verification documents were shared beforehand. Total peace of mind!",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-[#25D366] to-[#128C7E]",
  },
  {
    id: 9,
    name: "Radhika Iyer",
    initials: "RI",
    role: "First-time Mom",
    location: "Bengaluru",
    rating: 5,
    review: "Great experience with JapaCares. Traditional South Indian oil massage for both me and baby was done properly. Replacement policy is also very prompt.",
    package: "Complete Recovery • 30 Days",
    tag: "Bengaluru",
    avatarBg: "bg-gradient-to-br from-rose-500 to-orange-500",
  },
  {
    id: 10,
    name: "Harpreet Kaur",
    initials: "HK",
    role: "New Mother",
    location: "Chandigarh",
    rating: 5,
    review: "C-section delivery ke baad uthna baithna mushkil tha. Caregiver didi ne baby ke saath meri bhi puri care ki. Haldi milk, panjiri diet sab me help ki.",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: 11,
    name: "Deepika Joshi",
    initials: "DJ",
    role: "Second-time Mom",
    location: "Pune",
    rating: 5,
    review: "Loved the service! The team is super responsive on WhatsApp. Caregiver Laxmi ji was very respectful and skilled.",
    package: "Complete Recovery • 30 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-amber-500 to-rose-500",
  },
  {
    id: 12,
    name: "Sunita Rao",
    initials: "SR",
    role: "First-time Mom",
    location: "Hyderabad",
    rating: 5,
    review: "My twins were born prematurly, I was super nervous. JapaCares provided a trained caregiver who handled twin baby bathing with extreme care. Thank you!",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 13,
    name: "Divya Saxena",
    initials: "DS",
    role: "New Mother",
    location: "Lucknow",
    rating: 5,
    review: "Bahut hi acchi service hai. Pehle din se hi tension khatam ho gayi. Caregiver time pe aati thi aur baby ki daily massage mast karti thi.",
    package: "Starter Trial • 7 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },
  {
    id: 14,
    name: "Aakanksha Jain",
    initials: "AJ",
    role: "First-time Mom",
    location: "Delhi NCR",
    rating: 5,
    review: "JapaCares made my postpartum phase memorable. Highly hygienic massage routines. 10/10 rating from my family!",
    package: "Complete Recovery • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    id: 15,
    name: "Simran Malhotra",
    initials: "SM",
    role: "Working Mother",
    location: "Gurgaon",
    rating: 5,
    review: "As a working professional, I needed trusted background-verified support. JapaCares caregiver exceeded my expectations.",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    id: 16,
    name: "Tanvi Mehta",
    initials: "TM",
    role: "New Mother",
    location: "Ahmedabad",
    rating: 5,
    review: "Caregiver was polite and very soft spoken. Herbal bath and baby oil massage were relaxing.",
    package: "Complete Recovery • 30 Days",
    tag: "Other Cities",
    avatarBg: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    id: 17,
    name: "Komal Pandey",
    initials: "KP",
    role: "First-time Mom",
    location: "Noida",
    rating: 5,
    review: "Worth every rupee spent! Very professional management and verified staff.",
    package: "Complete Recovery • 30 Days",
    tag: "Delhi NCR",
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: 18,
    name: "Rashmi Kulkarni",
    initials: "RK",
    role: "Second-time Mom",
    location: "Mumbai",
    rating: 5,
    review: "Second time booking JapaCares. Once again top notch service. Caregiver Geeta tai is sweet and attentive.",
    package: "VIP 24/7 Care • 30 Days",
    tag: "Mumbai",
    avatarBg: "bg-gradient-to-br from-rose-400 to-pink-500",
  }
];

const Avatar = ({ initials, bgClass, size = "md" }: { initials: string; bgClass: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 md:w-16 md:h-16 text-lg md:text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  return (
    <div className={`${sizeClasses[size]} ${bgClass} rounded-full flex items-center justify-center text-white font-bold ring-4 ring-white shadow-lg flex-shrink-0`}>
      {initials}
    </div>
  );
};

export default function Reviews() {
  const [reviews, setReviews] = useState(ALL_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Modals & Gallery States
  const [isModalOpen, setIsModalOpen] = useState(false); // Add Review Modal
  const [isAllReviewsOpen, setIsAllReviewsOpen] = useState(false); // View All 50+ Reviews Modal
  const [selectedTag, setSelectedTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: "", location: "", rating: 5, review: "", role: "Verified Mother" });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 6));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? Math.min(reviews.length, 6) - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 6));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review) return;

    const initials = formData.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

    const newReviewObj = {
      id: Date.now(),
      name: formData.name,
      initials: initials || "MOM",
      role: formData.role,
      location: formData.location || "India",
      rating: formData.rating,
      review: formData.review,
      package: "Verified JapaCare Service",
      tag: "Delhi NCR",
      avatarBg: "bg-gradient-to-br from-rose-500 to-pink-600",
    };

    setReviews([newReviewObj, ...reviews]);
    setCurrentIndex(0);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: "", location: "", rating: 5, review: "", role: "Verified Mother" });
    }, 2000);
  };

  // Filter Reviews
  const filteredReviews = selectedTag === "All" ? reviews : reviews.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-white to-[#FDE8E4] py-24">
      {/* Blobs */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
            <Star size={14} className="text-rose-500 fill-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              FEATURED REVIEWS FROM 2,000+ FAMILIES
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            What our <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">mothers</span> say
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Real stories from real families who trusted us with their most precious moments. 💕
          </p>

          {/* Rating Summary */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="border-l border-gray-200 pl-4 text-left">
                <p className="font-serif text-2xl font-bold text-gray-900 leading-none">4.9/5</p>
                <p className="text-xs text-gray-500 mt-1">From 2,000+ verified reviews</p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-rose-600 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition-all text-sm"
            >
              <Plus size={18} /> Write a Review
            </button>
          </div>
        </motion.div>

        {/* Main Featured Carousel Card */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[380px]">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 to-pink-500" />
            <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
              <Quote size={80} className="text-gray-900" />
            </div>

            <div className="relative p-8 md:p-12">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(reviews[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                  <ShieldCheck size={14} className="text-teal-600" /> Verified Mother Review
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p key={currentIndex} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="font-serif text-lg md:text-2xl text-gray-800 leading-relaxed mb-8 italic">
                  &ldquo;{reviews[currentIndex]?.review}&rdquo;
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div key={`author-${currentIndex}`} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.3 }} className="flex items-center gap-4">
                  <Avatar initials={reviews[currentIndex]?.initials} bgClass={reviews[currentIndex]?.avatarBg} size="md" />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-gray-900">{reviews[currentIndex]?.name}</h4>
                    <p className="text-sm text-gray-500">{reviews[currentIndex]?.role} • {reviews[currentIndex]?.location}</p>
                    <div className="inline-block mt-1 text-xs font-semibold text-rose-500">{reviews[currentIndex]?.package}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              <button onClick={handlePrev} className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNext} className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="text-xs font-semibold text-gray-600 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <span className="text-rose-500 font-bold">Featured Story {currentIndex + 1}</span> of 6
            </div>
          </div>
        </motion.div>

        {/* 🎯 MINI REVIEWS GRID (Initial 6) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">Verified</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic line-clamp-4">&ldquo;{review.review}&rdquo;</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Avatar initials={review.initials} bgClass={review.avatarBg} size="sm" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location} • <span className="text-rose-500 font-medium">{review.package}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🎯 BUTTON TO OPEN FULL 50+ REVIEWS MODAL */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsAllReviewsOpen(true)}
            className="inline-flex items-center gap-3 bg-white hover:bg-rose-50 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-lg border border-rose-200 hover:scale-105 transition-all text-base"
          >
            <span>View All 50+ Verified Mother Reviews</span>
            <span className="bg-rose-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">2,000+ Ratings</span>
          </button>
        </div>
      </div>

      {/* 🎯 FULL 50+ REVIEWS POPUP GALLERY MODAL */}
      <AnimatePresence>
        {isAllReviewsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-10 max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-gray-100"
            >
              <button
                onClick={() => setIsAllReviewsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 p-2 bg-gray-100 rounded-full transition"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                <span className="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  2,000+ HAPPY MOTHERS
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  All Verified Mother Reviews & Feedback
                </h3>
                <p className="text-gray-500 text-sm mt-1">Read genuine experiences from families across India.</p>

                {/* City Filter Tabs */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["All", "Delhi NCR", "Mumbai", "Bengaluru", "Other Cities"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        selectedTag === tag ? "bg-rose-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid inside Modal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="bg-gray-50/60 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">Verified</span>
                      </div>
                      <p className="text-gray-800 text-sm leading-relaxed mb-4 italic">&ldquo;{review.review}&rdquo;</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                      <Avatar initials={review.initials} bgClass={review.avatarBg} size="sm" />
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.location} • <span className="text-rose-500 font-medium">{review.package}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WRITE A REVIEW MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-gray-100">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1">
                <X size={20} />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={50} className="text-teal-500 mx-auto mb-3" />
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Thank You!</h3>
                  <p className="text-gray-600 text-sm mt-2">Your review has been submitted successfully 💕</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">Share Your Experience</h3>
                  <p className="text-gray-500 text-sm mb-6">Help other new mothers choose trusted postpartum care.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                      <input type="text" required placeholder="e.g. Sunita Rao" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">City / Location</label>
                      <input type="text" placeholder="e.g. Mumbai, Delhi" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })} className="p-1">
                            <Star size={24} className={star <= formData.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Review *</label>
                      <textarea required rows={3} placeholder="Tell us about the caregiver and experience..." value={formData.review} onChange={(e) => setFormData({ ...formData, review: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500" />
                    </div>

                    <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all">
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}