"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  User,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "918239548307";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    city: "Delhi NCR",
    shift: "24/7 Live-in Caregiver (Full Stay)",
    deliveryStatus: "Expecting within 1 Month",
  });

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    const summaryMessage = `🌸 *NEW JAPACARES BOOKING INQUIRY* 🌸
------------------------------------
👤 *Customer Name:* ${formData.name || "Not provided"}
📍 *City/Location:* ${formData.city}
⏰ *Care Requirement:* ${formData.shift}
📅 *Delivery Status:* ${formData.deliveryStatus}

💬 *Request:* Please share verified caregiver profiles and exact pricing details.`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      summaryMessage
    )}`;
    window.open(waUrl, "_blank");
    onClose();
    setStep(1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-rose-100 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-2">
              <Sparkles size={12} /> Instant Caregiver Match
            </span>
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Book a Verified Caregiver
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Select your requirements below to get instant caregiver profiles.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-rose-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* STEP 1: CITY & SHIFT (SEEDHA YAHAN SE SHURU HOGA) */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-rose-500" /> Select Your City
                </label>
                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500 bg-gray-50 font-medium"
                >
                  <option value="Delhi NCR">Delhi NCR (Delhi, Gurgaon, Noida)</option>
                  <option value="Mumbai">Mumbai / Thane / Navi Mumbai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Agra">Agra / Mathura</option>
                  <option value="Other City">Other City in India</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-rose-500" /> Select Shift Duration
                </label>
                <div className="space-y-2">
                  {[
                    "24/7 Live-in Caregiver (Full Stay)",
                    "08 Hours / Day Shift",
                    "12 Hours / Day Shift",
                    "7 Days Trial Pack",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, shift: option })
                      }
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                        formData.shift === option
                          ? "border-rose-500 bg-rose-50/50 text-rose-700 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <span>{option}</span>
                      {formData.shift === option && (
                        <CheckCircle2 size={16} className="text-rose-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-4 bg-gray-900 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Next: Delivery Timing</span>
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {/* STEP 2: DELIVERY TIMING */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-rose-500" /> When do you need the caregiver?
                </label>
                <div className="space-y-2">
                  {[
                    "Urgent / Already Delivered",
                    "Expecting within 15 Days",
                    "Expecting within 1 Month",
                    "Expecting in 2-3 Months",
                    "Post C-Section Special Care",
                  ].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, deliveryStatus: status })
                      }
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                        formData.deliveryStatus === status
                          ? "border-rose-500 bg-rose-50/50 text-rose-700 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <span>{status}</span>
                      {formData.deliveryStatus === status && (
                        <CheckCircle2 size={16} className="text-rose-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-gray-900 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Next: Name & Summary</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: NAME & WHATSAPP SUMMARY */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <User size={14} className="text-rose-500" /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500 bg-gray-50 font-medium"
                />
              </div>

              <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-100 text-xs space-y-1.5 text-gray-700">
                <p className="font-bold text-gray-900 border-b border-rose-200/60 pb-1 flex items-center justify-between">
                  <span>Care Booking Summary</span>
                  <ShieldCheck size={14} className="text-teal-600" />
                </p>
                <p>
                  📍 <strong>City:</strong> {formData.city}
                </p>
                <p>
                  ⏰ <strong>Shift:</strong> {formData.shift}
                </p>
                <p>
                  📅 <strong>Requirement:</strong> {formData.deliveryStatus}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Get Summary on WhatsApp</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <p className="text-[10px] text-gray-400 text-center">
                100% Free Consultation · Instant Response Guaranteed
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}