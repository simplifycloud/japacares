"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User, Phone, Mail, MapPin, Calendar, FileText,
  ShieldCheck, Briefcase, Award, Clock,
  AlertCircle, CheckCircle2,
} from "lucide-react";

export default function BecomeCaregiver() {
  const [form, setForm] = useState({
    name: "", mobile: "", whatsapp: "", email: "",
    city: "", address: "", age: "", experience: "",
    qualification: "", languages: "", availability: "",
    remarks: "",
    emergencyName: "", emergencyPhone: "", emergencyRelation: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [agreements, setAgreements] = useState({
    backgroundCheck: false,
    policeVerification: false,
    termsConditions: false,
    codeOfConduct: false,
  });

  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
  const [ageConsent, setAgeConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((i) => i !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements({ ...agreements, [key]: !agreements[key] });
  };

  const allAgreementsChecked = Object.values(agreements).every(Boolean);
  const allConsentsChecked = privacyConsent && dataConsent && ageConsent;
  const canSubmit = allAgreementsChecked && allConsentsChecked;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      alert("Please complete all agreements and consent checkboxes.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mqernqrj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          whatsapp: form.whatsapp,
          email: form.email,
          city: form.city,
          address: form.address,
          age: form.age,
          qualification: form.qualification,
          experience: form.experience,
          languages: form.languages,
          availability: form.availability,
          services: selectedServices.join(", "),
          emergencyName: form.emergencyName,
          emergencyPhone: form.emergencyPhone,
          emergencyRelation: form.emergencyRelation,
          remarks: form.remarks,
          privacyConsentGiven: "Yes",
          dataConsentGiven: "Yes",
          ageConsentGiven: "Yes",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center px-5">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="text-7xl mb-6">🎉</div>
          <CheckCircle2 className="mx-auto text-green-500 mb-4" size={60} />
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Application Submitted!
          </h2>
          <p className="text-gray-500 text-lg mb-2">
            Thank you,{" "}
            <span className="text-pink-600 font-semibold">{form.name}</span>!
          </p>
          <p className="text-gray-500 mb-8">
            Our team will contact you on{" "}
            <span className="text-pink-600 font-semibold">{form.mobile}</span>{" "}
            within{" "}
            <span className="font-semibold text-gray-700">48 hours</span>.
          </p>

          <div className="bg-pink-50 rounded-2xl p-5 mb-8 text-left space-y-2">
            <p className="font-semibold text-gray-700 mb-3">What happens next?</p>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-pink-500">✅</span> Application received
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-blue-500">📞</span> Our team will call you
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-orange-500">📋</span> Identity verification (in-person)
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-green-500">🏅</span> Get your Jaapa Verified Badge
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-blue-700">
              <strong>📌 Note:</strong> Identity documents (Aadhaar, PAN) will be
              verified securely during in-person verification. We do not collect
              or store these online as per Indian data protection laws.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3.5 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
            >
              🏠 Go to Homepage
            </Link>

            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "", mobile: "", whatsapp: "", email: "",
                  city: "", address: "", age: "", experience: "",
                  qualification: "", languages: "", availability: "",
                  remarks: "",
                  emergencyName: "", emergencyPhone: "", emergencyRelation: "",
                });
                setSelectedServices([]);
                setAgreements({
                  backgroundCheck: false,
                  policeVerification: false,
                  termsConditions: false,
                  codeOfConduct: false,
                });
                setPrivacyConsent(false);
                setDataConsent(false);
                setAgeConsent(false);
              }}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3.5 rounded-2xl font-semibold transition"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-10 px-5">

      {/* BACK TO HOME BUTTON */}
      <div className="max-w-3xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-gray-700 hover:text-pink-600 font-semibold px-5 py-3 rounded-full shadow-md border border-gray-200 transition-all hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600">
          Become a Jaapa Caregiver
        </h1>
        <p className="text-center text-gray-500 mt-3 mb-10">
          Join our network of verified caregivers and help new mothers across India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: ShieldCheck, label: "Verified Profile" },
            { icon: Briefcase, label: "Steady Work" },
            { icon: Award, label: "Good Earnings" },
            { icon: Clock, label: "Flexible Hours" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="bg-pink-50 rounded-xl p-3 text-center">
              <Icon className="mx-auto text-pink-600" />
              <p className="text-xs mt-2">{label}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex gap-3">
            <AlertCircle className="text-red-500 shrink-0" size={20} />
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={submit} className="space-y-6">

          <div className="border-b pb-2 mb-2">
            <h2 className="text-xl font-bold text-gray-700">Personal Information</h2>
          </div>

          <div>
            <label className="font-medium mb-2 block">Full Name *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required name="name" value={form.name} onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Age *</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required type="number" name="age" min={18} max={65}
                value={form.age} onChange={handleChange}
                placeholder="Your Age (18–65)"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Mobile Number *</label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required type="tel" maxLength={10} name="mobile"
                value={form.mobile} onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">WhatsApp Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
              <input type="tel" maxLength={10} name="whatsapp"
                value={form.whatsapp} onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
              <input type="email" name="email" value={form.email}
                onChange={handleChange} placeholder="name@email.com"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">City *</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
              <select required name="city" value={form.city} onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none">
                <option value="">Select Your City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Agra">Agra</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Full Address *</label>
            <textarea required rows={3} name="address" value={form.address}
              onChange={handleChange}
              placeholder="House No, Street, Area, City, Pincode"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none" />
          </div>

          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">Professional Information</h2>
          </div>

          <div>
            <label className="font-medium mb-2 block">Qualification *</label>
            <div className="relative">
              <Award className="absolute left-4 top-4 text-gray-400" size={20} />
              <select required name="qualification" value={form.qualification}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none">
                <option value="">Select Qualification</option>
                <option value="GNM">GNM (General Nursing & Midwifery)</option>
                <option value="BSc Nursing">B.Sc Nursing</option>
                <option value="Trained Dai">Trained Dai / Midwife</option>
                <option value="Experienced Caregiver">Experienced Caregiver (No Formal Degree)</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Years of Experience *</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-4 text-gray-400" size={20} />
              <select required name="experience" value={form.experience}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none">
                <option value="">Select Experience</option>
                <option value="0-1 Year">0–1 Year (Fresher)</option>
                <option value="1-3 Years">1–3 Years</option>
                <option value="3-5 Years">3–5 Years</option>
                <option value="5-10 Years">5–10 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Languages Known *</label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required name="languages" value={form.languages}
                onChange={handleChange} placeholder="Hindi, English, Punjabi..."
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-3 block">Availability *</label>
            <div className="space-y-3">
              {[
                { value: "Live-In", label: "Live-In (24 Hours)", sublabel: "Stay at client's home full-time" },
                { value: "Day Shift", label: "Day Shift (8 AM – 8 PM)", sublabel: "12-hour day shift" },
                { value: "Night Shift", label: "Night Shift (8 PM – 8 AM)", sublabel: "12-hour night shift" },
                { value: "Flexible", label: "Flexible", sublabel: "Available for any shift as needed" },
              ].map((shift) => (
                <label key={shift.value}
                  className={`flex items-center gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    form.availability === shift.value
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/40"
                  }`}>
                  <input type="radio" name="availability" value={shift.value}
                    checked={form.availability === shift.value}
                    onChange={handleChange} required
                    className="accent-pink-600 w-4 h-4 shrink-0" />
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">{shift.label}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{shift.sublabel}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-4">Services You Can Provide *</label>
            <div className="grid md:grid-cols-2 gap-4">
              {["Mother Care", "Newborn Care", "Baby Massage", "Nutrition Support", "Night Care", "Wellness Therapy"].map((service) => (
                <label key={service}
                  className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedServices.includes(service)
                      ? "border-pink-600 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/40"
                  }`}>
                  <input type="checkbox" className="accent-pink-600 w-4 h-4 shrink-0"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)} />
                  <span className="font-medium text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {selectedServices.includes("Mother Care") && (
            <div className="border-2 border-pink-200 rounded-2xl p-6 bg-pink-50">
              <h2 className="text-xl font-bold mb-5 text-pink-700">Mother Care Experience</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["C-Section Care", "Normal Delivery Care", "Breastfeeding Support", "Postpartum Recovery"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-pink-200 rounded-xl p-3 cursor-pointer hover:border-pink-400 transition">
                    <input type="checkbox" className="accent-pink-600 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {selectedServices.includes("Newborn Care") && (
            <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50">
              <h2 className="text-xl font-bold mb-5 text-blue-700">Newborn Care Experience</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Diaper Changing", "Bathing & Hygiene", "Umbilical Cord Care", "Temperature Monitoring"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-blue-200 rounded-xl p-3 cursor-pointer hover:border-blue-400 transition">
                    <input type="checkbox" className="accent-blue-600 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {selectedServices.includes("Baby Massage") && (
            <div className="border-2 border-orange-200 rounded-2xl p-6 bg-orange-50">
              <h2 className="text-xl font-bold mb-5 text-orange-700">Baby Massage Experience</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Ayurvedic Baby Massage", "Oil Massage", "Premature Baby Care", "Infant Muscle Therapy"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-orange-200 rounded-xl p-3 cursor-pointer hover:border-orange-400 transition">
                    <input type="checkbox" className="accent-orange-500 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {selectedServices.includes("Nutrition Support") && (
            <div className="border-2 border-green-200 rounded-2xl p-6 bg-green-50">
              <h2 className="text-xl font-bold mb-5 text-green-700">Nutrition Expertise</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Postpartum Diet", "Lactation Diet", "Meal Planning", "Special Medical Diets"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-green-200 rounded-xl p-3 cursor-pointer hover:border-green-400 transition">
                    <input type="checkbox" className="accent-green-600 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {selectedServices.includes("Night Care") && (
            <div className="border-2 border-indigo-200 rounded-2xl p-6 bg-indigo-50">
              <h2 className="text-xl font-bold mb-5 text-indigo-700">Night Care Experience</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Night Feeding", "Sleep Routine", "Emergency Support", "24×7 Care"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-indigo-200 rounded-xl p-3 cursor-pointer hover:border-indigo-400 transition">
                    <input type="checkbox" className="accent-indigo-600 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {selectedServices.includes("Wellness Therapy") && (
            <div className="border-2 border-purple-200 rounded-2xl p-6 bg-purple-50">
              <h2 className="text-xl font-bold mb-5 text-purple-700">Wellness Skills</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Yoga", "Meditation", "Stress Management", "Breathing Exercises"].map((item) => (
                  <label key={item} className="flex items-center gap-3 bg-white border border-purple-200 rounded-xl p-3 cursor-pointer hover:border-purple-400 transition">
                    <input type="checkbox" className="accent-purple-600 w-4 h-4 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">Identity Verification</h2>
            <p className="text-sm text-gray-500 mt-1">
              For your safety and compliance with Indian data protection laws
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex gap-3">
              <ShieldCheck className="text-amber-600 shrink-0 mt-0.5" size={22} />
              <div className="text-sm text-amber-800 space-y-2">
                <p className="font-bold text-base">🔒 Your Data is Safe</p>
                <p>
                  As per the <strong>Digital Personal Data Protection Act 2023 (DPDPA)</strong> and{" "}
                  <strong>Aadhaar Act 2016</strong>, we do <strong>NOT</strong> collect
                  Aadhaar numbers, PAN numbers, or any sensitive identity numbers online.
                </p>
                <p>
                  📎 Documents (address proof, photo, certificates) will be collected
                  by our team via WhatsApp during your verification call — not through
                  this form.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>We only collect basic contact & professional information here</li>
                  <li>No sensitive ID numbers or documents are collected online</li>
                  <li>All data is encrypted and processed in India</li>
                  <li>You can request data deletion anytime</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">Emergency Contact</h2>
          </div>

          <div>
            <label className="font-medium mb-2 block">Emergency Contact Name *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required name="emergencyName" value={form.emergencyName}
                onChange={handleChange} placeholder="Full Name"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Emergency Contact Number *</label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
              <input required type="tel" maxLength={10} name="emergencyPhone"
                value={form.emergencyPhone} onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Relation *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <select required name="emergencyRelation" value={form.emergencyRelation}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none">
                <option value="">Select Relation</option>
                <option value="Husband">Husband</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">Background Check Consent</h2>
            <p className="text-sm text-gray-500 mt-1">
              Please read and agree to each item below to proceed
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                key: "backgroundCheck" as const,
                title: "Background Verification Consent",
                description: "I consent to Jaapa conducting a thorough background verification check including identity, address, and employment history during the in-person verification stage.",
              },
              {
                key: "policeVerification" as const,
                title: "Police Verification Consent",
                description: "I consent to police verification being conducted. I confirm I have no prior criminal record and agree to provide a Police Clearance Certificate during in-person verification.",
              },
              {
                key: "termsConditions" as const,
                title: "Terms & Conditions",
                description: "I have read and agree to Jaapa's Terms & Conditions, Privacy Policy, and Caregiver Service Agreement.",
              },
              {
                key: "codeOfConduct" as const,
                title: "Code of Conduct",
                description: "I agree to follow Jaapa's Code of Conduct including maintaining professional behaviour, respecting client privacy, and providing safe, ethical care at all times.",
              },
            ].map((item) => (
              <label key={item.key}
                className={`flex gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                  agreements[item.key]
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 hover:border-pink-300"
                }`}>
                <input type="checkbox" checked={agreements[item.key]}
                  onChange={() => handleAgreementChange(item.key)}
                  className="accent-green-600 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    {agreements[item.key]
                      ? <CheckCircle2 size={16} className="text-green-500" />
                      : <AlertCircle size={16} className="text-gray-400" />}
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">📋 Privacy & Data Consent</h2>
            <p className="text-sm text-gray-500 mt-1">
              Required under Digital Personal Data Protection Act 2023 (DPDPA)
            </p>
          </div>

          <div className="space-y-4">
            <label className={`flex gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
              privacyConsent ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-pink-300"
            }`}>
              <input type="checkbox" checked={privacyConsent}
                onChange={() => setPrivacyConsent(!privacyConsent)}
                className="accent-green-600 w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  {privacyConsent
                    ? <CheckCircle2 size={16} className="text-green-500" />
                    : <AlertCircle size={16} className="text-gray-400" />}
                  Privacy Policy *
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  I have read and understood Jaapa&apos;s{" "}
                  <a href="/privacy-policy" target="_blank" className="text-pink-600 underline font-medium">
                    Privacy Policy
                  </a>
                  . I can withdraw consent or request data deletion anytime by contacting{" "}
                  <span className="text-pink-600 font-medium">privacy@japacares.com</span>.
                </p>
              </div>
            </label>

            <label className={`flex gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
              dataConsent ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-pink-300"
            }`}>
              <input type="checkbox" checked={dataConsent}
                onChange={() => setDataConsent(!dataConsent)}
                className="accent-green-600 w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  {dataConsent
                    ? <CheckCircle2 size={16} className="text-green-500" />
                    : <AlertCircle size={16} className="text-gray-400" />}
                  Data Collection & Processing Consent *
                </p>
                <ul className="text-sm text-gray-500 mt-2 list-disc list-inside space-y-1">
                  <li>My data will only be used for caregiver verification and job matching</li>
                  <li>My data will NOT be sold to third parties</li>
                  <li>My data is stored securely within India as per DPDPA 2023</li>
                  <li>I can request complete deletion of my data at any time</li>
                </ul>
              </div>
            </label>

            <label className={`flex gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
              ageConsent ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-pink-300"
            }`}>
              <input type="checkbox" checked={ageConsent}
                onChange={() => setAgeConsent(!ageConsent)}
                className="accent-green-600 w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  {ageConsent
                    ? <CheckCircle2 size={16} className="text-green-500" />
                    : <AlertCircle size={16} className="text-gray-400" />}
                  Age Confirmation *
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  I confirm that I am <strong>18 years or older</strong> and legally
                  eligible to provide consent as per Indian law.
                </p>
              </div>
            </label>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
              <span>Completion Progress</span>
              <span>
                {Object.values(agreements).filter(Boolean).length +
                  [privacyConsent, dataConsent, ageConsent].filter(Boolean).length} / 7 Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((Object.values(agreements).filter(Boolean).length +
                    [privacyConsent, dataConsent, ageConsent].filter(Boolean).length) / 7) * 100}%`,
                }}
              />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">Additional Information</label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 text-gray-400" size={20} />
              <textarea rows={4} name="remarks" value={form.remarks}
                onChange={handleChange}
                placeholder="Tell us more about yourself, certifications, special skills..."
                className="w-full border rounded-xl pl-12 p-4 focus:ring-2 focus:ring-pink-500 outline-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className={`w-full py-4 rounded-xl text-lg font-semibold transition ${
              canSubmit && !loading
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {loading
              ? "Submitting... Please wait ⏳"
              : canSubmit
              ? "Submit Application ✨"
              : `Complete All Agreements & Consents (${
                  Object.values(agreements).filter(Boolean).length +
                  [privacyConsent, dataConsent, ageConsent].filter(Boolean).length
                }/7)`}
          </button>

          <p className="text-center text-sm text-gray-400">
            By submitting, you agree to our{" "}
            <a href="/privacy-policy" className="text-pink-500 underline">Privacy Policy</a>{" "}
            and{" "}
            <a href="/terms" className="text-pink-500 underline">Terms of Service</a>.
            Your data is protected under DPDPA 2023.
          </p>
        </form>
      </div>
    </section>
  );
}