"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  ShieldCheck,
} from "lucide-react";

function BookCaregiverForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    email: "",
    city: "",
    address: "",
    deliveryDate: "",
    duration: "",
    remarks: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // 🎯 Auto-select plan from URL query param
  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setForm((prev) => ({ ...prev, duration: plan }));

      // Smooth scroll to duration section after a short delay
      setTimeout(() => {
        const el = document.getElementById("duration-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);
    }
  }, [searchParams]);

  const handleServiceChange = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    console.log("Selected Services:", selectedServices);
    alert("Booking Submitted Successfully!");
  };

  const packages = [
    {
      value: "7 Days",
      label: "7 Days",
      sublabel: "Starter Care",
      popular: false,
    },
    {
      value: "30 Days",
      label: "30 Days",
      sublabel: "Complete Postpartum Support",
      popular: true,
    },
    {
      value: "45 Days",
      label: "45 Days",
      sublabel: "Premium Recovery Package",
      popular: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-5xl font-bold text-center text-pink-600">
          Book a Jaapa Caregiver
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Fill in your details and we'll connect you with a verified caregiver.
        </p>

        {/* Pre-selected plan banner */}
        {form.duration && (
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-4 mb-8 flex items-center gap-3 shadow-lg">
            <ShieldCheck className="shrink-0" size={24} />
            <div>
              <p className="text-sm opacity-90">You have selected:</p>
              <p className="font-bold text-lg">
                {form.duration} Care Package ⭐
              </p>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <ShieldCheck className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Verified</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <ShieldCheck className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Police Checked</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <ShieldCheck className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Experienced</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <ShieldCheck className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">24×7 Support</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="font-medium mb-2 block">Mother's Name *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Mother's Name"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="font-medium mb-2 block">Mobile Number *</label>
            <div className="relative">
              <Phone
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                type="tel"
                maxLength={10}
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="font-medium mb-2 block">WhatsApp Number</label>
            <div className="relative">
              <Phone
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-medium mb-2 block">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="font-medium mb-2 block">City *</label>
            <div className="relative">
              <MapPin
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <select
                required
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              >
                <option value="">Select Your City</option>
                <option value="Delhi">Delhi • 350+ Verified Caregivers</option>
                <option value="Mumbai">
                  Mumbai • 420+ Verified Caregivers
                </option>
                <option value="Gurgaon">
                  Gurgaon • 180+ Verified Caregivers
                </option>
                <option value="Noida">Noida • 150+ Verified Caregivers</option>
                <option value="Jaipur">
                  Jaipur • 120+ Verified Caregivers
                </option>
                <option value="Agra">Agra • 80+ Verified Caregivers</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="font-medium mb-2 block">Address</label>
            <textarea
              rows={3}
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Complete Address"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Delivery Date */}
          <div>
            <label className="font-medium mb-2 block">
              Expected Delivery Date *
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                type="date"
                name="deliveryDate"
                value={form.deliveryDate}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Package / Duration */}
          <div id="duration-section">
            <label className="font-medium mb-3 block">
              Required Duration *
            </label>
            <div className="space-y-3">
              {packages.map((pkg) => (
                <label
                  key={pkg.value}
                  className={`flex items-center gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    form.duration === pkg.value
                      ? "border-pink-500 bg-pink-50 ring-2 ring-pink-300"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value={pkg.value}
                    checked={form.duration === pkg.value}
                    onChange={handleChange}
                    required
                    className="accent-pink-600 w-4 h-4 shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-800">
                        {pkg.label}
                      </span>
                      {pkg.popular && (
                        <span className="bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          ⭐ Most Popular
                        </span>
                      )}
                      {form.duration === pkg.value && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          ✓ Selected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {pkg.sublabel}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Services You Can Provide *
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Mother Care",
                "Newborn Care",
                "Baby Massage",
                "Nutrition Support",
                "Night Care",
                "Wellness Therapy",
              ].map((service) => (
                <label
                  key={service}
                  className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedServices.includes(service)
                      ? "border-pink-600 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="accent-pink-600 w-4 h-4 shrink-0"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <span className="font-medium text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Mother Care */}
          {selectedServices.includes("Mother Care") && (
            <div className="border-2 border-pink-200 rounded-2xl p-6 bg-pink-50">
              <h2 className="text-xl font-bold mb-5 text-pink-700">
                Mother Care Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "C-Section Care",
                  "Normal Delivery Care",
                  "Breastfeeding Support",
                  "Postpartum Recovery",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-pink-200 rounded-xl p-3 cursor-pointer hover:border-pink-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-pink-600 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Baby Massage */}
          {selectedServices.includes("Baby Massage") && (
            <div className="border-2 border-orange-200 rounded-2xl p-6 bg-orange-50">
              <h2 className="text-xl font-bold mb-5 text-orange-700">
                Baby Massage Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ayurvedic Baby Massage",
                  "Oil Massage",
                  "Premature Baby Care",
                  "Infant Muscle Therapy",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-orange-200 rounded-xl p-3 cursor-pointer hover:border-orange-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-orange-500 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition Support */}
          {selectedServices.includes("Nutrition Support") && (
            <div className="border-2 border-green-200 rounded-2xl p-6 bg-green-50">
              <h2 className="text-xl font-bold mb-5 text-green-700">
                Nutrition Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Postpartum Diet",
                  "Lactation Diet",
                  "Meal Planning",
                  "Special Medical Diets",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-green-200 rounded-xl p-3 cursor-pointer hover:border-green-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-green-600 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Night Care */}
          {selectedServices.includes("Night Care") && (
            <div className="border-2 border-indigo-200 rounded-2xl p-6 bg-indigo-50">
              <h2 className="text-xl font-bold mb-5 text-indigo-700">
                Night Care Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Night Feeding",
                  "Sleep Routine",
                  "Emergency Support",
                  "24×7 Care",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-indigo-200 rounded-xl p-3 cursor-pointer hover:border-indigo-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-indigo-600 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Wellness Therapy */}
          {selectedServices.includes("Wellness Therapy") && (
            <div className="border-2 border-purple-200 rounded-2xl p-6 bg-purple-50">
              <h2 className="text-xl font-bold mb-5 text-purple-700">
                Wellness Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Yoga",
                  "Meditation",
                  "Stress Management",
                  "Breathing Exercises",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-purple-200 rounded-xl p-3 cursor-pointer hover:border-purple-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-purple-600 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Remarks */}
          <div>
            <label className="font-medium mb-2 block">
              Special Requirements
            </label>
            <div className="relative">
              <FileText
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <textarea
                rows={4}
                name="remarks"
                value={form.remarks}
                onChange={handleChange}
                placeholder="Any special requirements..."
                className="w-full border rounded-xl pl-12 p-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-lg font-semibold transition">
            Book Caregiver
          </button>
        </form>
      </div>
    </section>
  );
}

// 🎯 Wrap in Suspense for useSearchParams
export default function BookCaregiver() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
          <p className="text-pink-600 font-medium">Loading...</p>
        </div>
      }
    >
      <BookCaregiverForm />
    </Suspense>
  );
}