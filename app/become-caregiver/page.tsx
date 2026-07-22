"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  ShieldCheck,
  Briefcase,
  Award,
  Clock,
  Upload,
  CreditCard,
  Home,
  Camera,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function BecomeCaregiver() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    email: "",
    city: "",
    address: "",
    age: "",
    experience: "",
    qualification: "",
    languages: "",
    availability: "",
    remarks: "",
    aadhaar: "",
    pan: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, string>>({});
  const [agreements, setAgreements] = useState({
    backgroundCheck: false,
    policeVerification: false,
    termsConditions: false,
    codeOfConduct: false,
  });

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

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    docName: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedDocs({ ...uploadedDocs, [docName]: file.name });
    }
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements({ ...agreements, [key]: !agreements[key] });
  };

  const allAgreementsChecked = Object.values(agreements).every(Boolean);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allAgreementsChecked) {
      alert("Please agree to all verification terms before submitting.");
      return;
    }
    console.log(form);
    console.log("Selected Services:", selectedServices);
    console.log("Uploaded Docs:", uploadedDocs);
    alert("Application Submitted Successfully! We will verify your documents within 48 hours.");
  };

  const documents = [
    {
      key: "aadhaarFront",
      label: "Aadhaar Card (Front)",
      icon: <CreditCard size={20} className="text-pink-500" />,
      required: true,
      hint: "Upload clear photo of front side",
    },
    {
      key: "aadhaarBack",
      label: "Aadhaar Card (Back)",
      icon: <CreditCard size={20} className="text-pink-500" />,
      required: true,
      hint: "Upload clear photo of back side",
    },
    {
      key: "panCard",
      label: "PAN Card",
      icon: <CreditCard size={20} className="text-blue-500" />,
      required: false,
      hint: "PAN card for identity verification",
    },
    {
      key: "addressProof",
      label: "Address Proof",
      icon: <Home size={20} className="text-green-500" />,
      required: true,
      hint: "Electricity bill / Ration card / Voter ID",
    },
    {
      key: "photo",
      label: "Recent Passport Photo",
      icon: <Camera size={20} className="text-orange-500" />,
      required: true,
      hint: "Clear front-facing photo on white background",
    },
    {
      key: "qualificationCert",
      label: "Qualification Certificate",
      icon: <Award size={20} className="text-purple-500" />,
      required: false,
      hint: "ANM / GNM / Nursing degree if available",
    },
    {
      key: "experienceLetter",
      label: "Experience Letter",
      icon: <Briefcase size={20} className="text-indigo-500" />,
      required: false,
      hint: "Reference letter from previous employer",
    },
    {
      key: "policeClearance",
      label: "Police Clearance Certificate",
      icon: <ShieldCheck size={20} className="text-red-500" />,
      required: false,
      hint: "If already available, upload here",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600">
          Become a Jaapa Caregiver
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Join our network of verified caregivers and help new mothers across
          India.
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <ShieldCheck className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Verified Profile</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <Briefcase className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Steady Work</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <Award className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Good Earnings</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-3 text-center">
            <Clock className="mx-auto text-pink-600" />
            <p className="text-xs mt-2">Flexible Hours</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-6">

          {/* ── PERSONAL INFORMATION ── */}
          <div className="border-b pb-2 mb-2">
            <h2 className="text-xl font-bold text-gray-700">
              Personal Information
            </h2>
          </div>

          {/* Name */}
          <div>
            <label className="font-medium mb-2 block">Full Name *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="font-medium mb-2 block">Age *</label>
            <div className="relative">
              <Calendar
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                type="number"
                name="age"
                min={18}
                max={65}
                value={form.age}
                onChange={handleChange}
                placeholder="Your Age (18–65)"
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
                maxLength={10}
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

          {/* Address */}
          <div>
            <label className="font-medium mb-2 block">Full Address *</label>
            <textarea
              required
              rows={3}
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="House No, Street, Area, City, Pincode"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* ── PROFESSIONAL INFORMATION ── */}
          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">
              Professional Information
            </h2>
          </div>

          {/* Qualification */}
          <div>
            <label className="font-medium mb-2 block">Qualification *</label>
            <div className="relative">
              <Award
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <select
                required
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              >
                <option value="">Select Qualification</option>
                <option value="GNM">GNM (General Nursing & Midwifery)</option>
                <option value="BSc Nursing">B.Sc Nursing</option>
                <option value="Trained Dai">Trained Dai / Midwife</option>
                <option value="Experienced Caregiver">
                  Experienced Caregiver (No Formal Degree)
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="font-medium mb-2 block">
              Years of Experience *
            </label>
            <div className="relative">
              <Briefcase
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <select
                required
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              >
                <option value="">Select Experience</option>
                <option value="0-1 Year">0–1 Year (Fresher)</option>
                <option value="1-3 Years">1–3 Years</option>
                <option value="3-5 Years">3–5 Years</option>
                <option value="5-10 Years">5–10 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="font-medium mb-2 block">Languages Known *</label>
            <div className="relative">
              <FileText
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                name="languages"
                value={form.languages}
                onChange={handleChange}
                placeholder="Hindi, English, Punjabi..."
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="font-medium mb-3 block">Availability *</label>
            <div className="space-y-3">
              {[
                {
                  value: "Live-In",
                  label: "Live-In (24 Hours)",
                  sublabel: "Stay at client's home full-time",
                },
                {
                  value: "Day Shift",
                  label: "Day Shift (8 AM – 8 PM)",
                  sublabel: "12-hour day shift",
                },
                {
                  value: "Night Shift",
                  label: "Night Shift (8 PM – 8 AM)",
                  sublabel: "12-hour night shift",
                },
                {
                  value: "Flexible",
                  label: "Flexible",
                  sublabel: "Available for any shift as needed",
                },
              ].map((shift) => (
                <label
                  key={shift.value}
                  className={`flex items-center gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    form.availability === shift.value
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="availability"
                    value={shift.value}
                    checked={form.availability === shift.value}
                    onChange={handleChange}
                    required
                    className="accent-pink-600 w-4 h-4 shrink-0"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">
                      {shift.label}
                    </span>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {shift.sublabel}
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

          {/* Mother Care Sub-section */}
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

          {/* Newborn Care Sub-section */}
          {selectedServices.includes("Newborn Care") && (
            <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50">
              <h2 className="text-xl font-bold mb-5 text-blue-700">
                Newborn Care Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Diaper Changing",
                  "Bathing & Hygiene",
                  "Umbilical Cord Care",
                  "Temperature Monitoring",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-white border border-blue-200 rounded-xl p-3 cursor-pointer hover:border-blue-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4 shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Baby Massage Sub-section */}
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

          {/* Nutrition Support Sub-section */}
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

          {/* Night Care Sub-section */}
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

          {/* Wellness Therapy Sub-section */}
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

          {/* ── IDENTITY VERIFICATION ── */}
          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">
              Identity Verification
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Required for background check and caregiver badge issuance
            </p>
          </div>

          {/* Aadhaar Number */}
          <div>
            <label className="font-medium mb-2 block">
              Aadhaar Number *
            </label>
            <div className="relative">
              <CreditCard
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                name="aadhaar"
                value={form.aadhaar}
                onChange={handleChange}
                maxLength={12}
                placeholder="XXXX XXXX XXXX"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none tracking-widest"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-1">
              Your Aadhaar details are encrypted and stored securely
            </p>
          </div>

          {/* PAN Number */}
          <div>
            <label className="font-medium mb-2 block">PAN Number</label>
            <div className="relative">
              <CreditCard
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                name="pan"
                value={form.pan}
                onChange={handleChange}
                maxLength={10}
                placeholder="ABCDE1234F"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none uppercase"
              />
            </div>
          </div>

          {/* ── DOCUMENT UPLOAD ── */}
          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">
              Document Upload
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Upload clear scanned copies or photos — JPG, PNG, PDF accepted
              (Max 5MB each)
            </p>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.key}
                className={`border-2 rounded-xl p-4 transition-all ${
                  uploadedDocs[doc.key]
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 hover:border-pink-300"
                }`}
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    {doc.icon}
                    <div>
                      <p className="font-medium text-gray-800">
                        {doc.label}
                        {doc.required && (
                          <span className="text-pink-500 ml-1">*</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-400">{doc.hint}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {uploadedDocs[doc.key] ? (
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <CheckCircle2 size={18} />
                        <span className="max-w-[140px] truncate">
                          {uploadedDocs[doc.key]}
                        </span>
                      </div>
                    ) : (
                      <label className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer transition">
                        <Upload size={16} />
                        Upload
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, doc.key)}
                        />
                      </label>
                    )}

                    {uploadedDocs[doc.key] && (
                      <label className="flex items-center gap-1 text-sm text-pink-600 hover:text-pink-800 cursor-pointer font-medium">
                        <Upload size={14} />
                        Re-upload
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, doc.key)}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Document Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
            <AlertCircle
              className="text-blue-500 shrink-0 mt-0.5"
              size={20}
            />
            <div className="text-sm text-blue-700 space-y-1">
              <p className="font-semibold">Why do we collect documents?</p>
              <ul className="list-disc list-inside space-y-1 text-blue-600">
                <li>To issue your official Jaapa Verified Caregiver Badge</li>
                <li>For police verification and background clearance</li>
                <li>To protect the families you will be working with</li>
                <li>Documents are encrypted and never shared with third parties</li>
              </ul>
            </div>
          </div>

          {/* ── EMERGENCY CONTACT ── */}
          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">
              Emergency Contact
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              A trusted person we can contact in case of emergency
            </p>
          </div>

          {/* Emergency Name */}
          <div>
            <label className="font-medium mb-2 block">
              Emergency Contact Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                required
                name="emergencyName"
                value={form.emergencyName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Emergency Phone */}
          <div>
            <label className="font-medium mb-2 block">
              Emergency Contact Number *
            </label>
            <div className="relative">
              <Phone
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <input
                required
                type="tel"
                maxLength={10}
                name="emergencyPhone"
                value={form.emergencyPhone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Emergency Relation */}
          <div>
            <label className="font-medium mb-2 block">Relation *</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <select
                required
                name="emergencyRelation"
                value={form.emergencyRelation}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-pink-500 outline-none"
              >
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

          {/* ── BACKGROUND CHECK AGREEMENTS ── */}
          <div className="border-b pb-2 mt-4">
            <h2 className="text-xl font-bold text-gray-700">
              Background Check Consent
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Please read and agree to each item below to proceed
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                key: "backgroundCheck" as const,
                title: "Background Verification Consent",
                description:
                  "I consent to Jaapa conducting a thorough background verification check including identity, address, and employment history.",
              },
              {
                key: "policeVerification" as const,
                title: "Police Verification Consent",
                description:
                  "I consent to police verification being conducted. I confirm I have no prior criminal record and agree to provide a Police Clearance Certificate if requested.",
              },
              {
                key: "termsConditions" as const,
                title: "Terms & Conditions",
                description:
                  "I have read and agree to Jaapa's Terms & Conditions, Privacy Policy, and Caregiver Service Agreement.",
              },
              {
                key: "codeOfConduct" as const,
                title: "Code of Conduct",
                description:
                  "I agree to follow Jaapa's Code of Conduct including maintaining professional behaviour, respecting client privacy, and providing safe, ethical care at all times.",
              },
            ].map((item) => (
              <label
                key={item.key}
                className={`flex gap-4 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                  agreements[item.key]
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 hover:border-pink-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={agreements[item.key]}
                  onChange={() => handleAgreementChange(item.key)}
                  className="accent-green-600 w-5 h-5 shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    {agreements[item.key] ? (
                      <CheckCircle2 size={16} className="text-green-500" />
                    ) : (
                      <AlertCircle size={16} className="text-gray-400" />
                    )}
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
              </label>
            ))}
          </div>

          {/* Agreement Progress */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
              <span>Verification Progress</span>
              <span>
                {Object.values(agreements).filter(Boolean).length} / 4 Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    (Object.values(agreements).filter(Boolean).length / 4) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Remarks */}
          <div>
            <label className="font-medium mb-2 block">
              Additional Information
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
                placeholder="Tell us more about yourself, certifications, special skills..."
                className="w-full border rounded-xl pl-12 p-4 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!allAgreementsChecked}
            className={`w-full py-4 rounded-xl text-lg font-semibold transition ${
              allAgreementsChecked
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {allAgreementsChecked
              ? "Submit Application"
              : `Complete All Agreements to Submit (${
                  Object.values(agreements).filter(Boolean).length
                }/4)`}
          </button>

          <p className="text-center text-sm text-gray-400">
            After submission, our team will review your documents and contact
            you within{" "}
            <span className="text-pink-500 font-medium">48 hours</span> for the
            next steps.
          </p>
        </form>
      </div>
    </section>
  );
}