"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📩 SEND MESSAGE — via Web3Forms (Free, no signup needed for testing)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // 👈 Get free key at web3forms.com
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          message: form.message,
          subject: `New Contact Form Submission from ${form.name}`,
          from_name: "Japa Cares Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", mobile: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or WhatsApp us.");
      }
    } catch (error) {
      alert("Network error. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  // 💬 WHATSAPP REDIRECT
  const handleWhatsApp = () => {
    const phone = "918239548307"; // Your number without +
    const text = `Hi Japa Cares! 👋

Name: ${form.name || "Not provided"}
Mobile: ${form.mobile || "Not provided"}
Email: ${form.email || "Not provided"}

Message: ${form.message || "I would like to know more about your services."}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8F3] to-[#FDE8E4] py-24"
    >
      {/* Blobs */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-30" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30" />

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
            <MessageCircle size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            We're here to{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              help
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Have questions? Our care team is ready to guide you. Reach out
            anytime, day or night.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Phone */}
            <motion.a
              href="tel:+918239548307"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Phone size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                Call Us 24/7
              </p>
              <p className="font-serif text-xl font-semibold text-gray-900 hover:text-rose-600 transition mt-1">
                +91 8239548307
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Available round the clock
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full text-left bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                WhatsApp Chat
              </p>
              <p className="font-serif text-xl font-semibold text-gray-900 hover:text-green-600 transition mt-1">
                Chat with us
              </p>
              <p className="text-sm text-gray-500 mt-2">Instant reply 💬</p>
            </motion.button>

            {/* Email */}
            <motion.a
              href="mailto:hello@japacares.com"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                Email Us
              </p>
              <p className="font-serif text-xl font-semibold text-gray-900 hover:text-rose-600 transition mt-1">
                hello@japacares.com
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We reply within 2 hours
              </p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                Head Office
              </p>
              <p className="font-serif text-xl font-semibold text-gray-900 mt-1">
                Sector 76, Gurgaon Haryana
              </p>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                <Clock size={12} />
                Mon - Sun · 24/7
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Send us a message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form and our care team will reach out shortly.
            </p>

            {/* Success Banner */}
            {success && (
              <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-2xl p-4 flex items-center gap-3 animate-pulse">
                <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-green-800">
                    Message sent successfully! ✨
                  </p>
                  <p className="text-sm text-green-600">
                    Our team will reach out to you within 2 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-gray-700 tracking-wide">
                    FULL NAME *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 tracking-wide">
                    MOBILE NUMBER *
                  </label>
                  <input
                    required
                    type="tel"
                    maxLength={10}
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 tracking-wide">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Two Buttons */}
              <div className="grid md:grid-cols-2 gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
              </div>

              <p className="text-center text-xs text-gray-400">
                We usually respond within 2 hours during business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}