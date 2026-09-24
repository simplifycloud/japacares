"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronRight, Sparkles, MapPin, Calendar, Clock, User, Briefcase, HeartHandshake } from "lucide-react";

const WHATSAPP_NUMBER = "918239548307";

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [userType, setUserType] = useState<"client" | "caregiver">("client");
  const [step, setStep] = useState(1);

  // Client Data
  const [clientData, setClientData] = useState({
    name: "",
    city: "Delhi NCR",
    shift: "24/7 Live-in Caregiver",
    deliveryStatus: "Expecting within 1 month",
  });

  // Caregiver Data
  const [caregiverData, setCaregiverData] = useState({
    name: "",
    city: "Delhi NCR",
    experience: "2 to 5 Years Experience",
    workType: "24/7 Live-in Work",
  });

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    let summaryMessage = "";

    if (userType === "client") {
      summaryMessage = 
`🌸 *NEW JAPACARES BOOKING INQUIRY* 🌸
------------------------------------
👤 *Customer Name:* ${clientData.name || 'Not provided'}
📍 *City/Location:* ${clientData.city}
⏰ *Care Requirement:* ${clientData.shift}
📅 *Delivery Status:* ${clientData.deliveryStatus}

💬 *Request:* Please share verified caregiver profiles and exact pricing details.`;
    } else {
      summaryMessage = 
`💼 *NEW CAREGIVER JOB APPLICATION* 💼
------------------------------------
👤 *Candidate Name:* ${caregiverData.name || 'Not provided'}
📍 *City/Location:* ${caregiverData.city}
⭐ *Experience:* ${caregiverData.experience}
⏰ *Preferred Shift:* ${caregiverData.workType}

💬 *Request:* I want to join JapaCares as a caregiver. Please guide me for verification.`;
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summaryMessage)}`;
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
              <Sparkles size={12} /> JapaCares Quick Connect
            </span>
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              How can we help you?
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Select an option below for instant response.
            </p>
          </div>

          {/* STEP 1: CHOOSE USER TYPE (Client vs Caregiver) */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="block text-xs font-bold text-gray-700 mb-2">
                What are you looking for?
              </label>

              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={() => { setUserType("client"); setStep(2); }}
                  className="p-4 rounded-2xl border-2 border-rose-100 hover:border-rose-500 bg-rose-50/30 hover:bg-rose-50 text-left transition-all group flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                    <HeartHandshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Book a Caregiver</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Need postpartum care for mother & newborn baby</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { setUserType("caregiver"); setStep(2); }}
                  className="p-4 rounded-2xl border-2 border-teal-100 hover:border-teal-500 bg-teal-50/30 hover:bg-teal-50 text-left transition-all group flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Become a Caregiver</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Looking for work/jobs as a verified Jaapa caregiver</p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: CLIENT FLOW */}
          {step === 2 && userType === "client" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-rose-500" /> Select Your City
                </label>
                <select
                  value={clientData.city}
                  onChange={(e) => setClientData({ ...clientData, city: e.target.value })}
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
                  <Clock size={14} className="text-rose-500" /> Shift / Care Duration
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
                      onClick={() => setClientData({ ...clientData, shift: option })}
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                        clientData.shift === option
                          ? "border-rose-500 bg-rose-50/50 text-rose-700 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <span>{option}</span>
                      {clientData.shift === option && <CheckCircle2 size={16} className="text-rose-500" />}
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
                  <span>Next: Delivery Timing</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CLIENT FINAL SUMMARY */}
          {step === 3 && userType === "client" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <User size={14} className="text-rose-500" /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  value={clientData.name}
                  onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-rose-500 bg-gray-50"
                />
              </div>

              <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-100 text-xs space-y-1.5 text-gray-700">
                <p className="font-bold text-gray-900 border-b border-rose-200/60 pb-1 flex items-center justify-between">
                  <span>Care Booking Summary</span>
                  <Sparkles size={14} className="text-rose-500" />
                </p>
                <p>📍 <strong>City:</strong> {clientData.city}</p>
                <p>⏰ <strong>Shift:</strong> {clientData.shift}</p>
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
                  <span>Send Booking to WhatsApp</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: CAREGIVER WORK FLOW */}
          {step === 2 && userType === "caregiver" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <User size={14} className="text-teal-600" /> Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sunita Devi"
                  value={caregiverData.name}
                  onChange={(e) => setCaregiverData({ ...caregiverData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-500 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-teal-600" /> Which city do you want to work in?
                </label>
                <select
                  value={caregiverData.city}
                  onChange={(e) => setCaregiverData({ ...caregiverData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-500 bg-gray-50 font-medium"
                >
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Other City">Other City</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-teal-600" /> Experience in Baby/Mother Massage Care
                </label>
                <div className="space-y-2">
                  {["1 to 2 Years Experience", "2 to 5 Years Experience", "5+ Years Experience (Senior Caregiver)"].map((exp) => (
                    <button
                      key={exp}
                      type="button"
                      onClick={() => setCaregiverData({ ...caregiverData, experience: exp })}
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                        caregiverData.experience === exp
                          ? "border-teal-500 bg-teal-50/50 text-teal-700 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <span>{exp}</span>
                      {caregiverData.experience === exp && <CheckCircle2 size={16} className="text-teal-600" />}
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
                  onClick={handleSendToWhatsApp}
                  className="flex-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Apply on WhatsApp</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}