"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8F3] to-[#FDE8E4] py-24">

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
            Have questions? Our care team is ready to guide you.
            Reach out anytime, day or night.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Phone size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Call Us 24/7</p>
              <a href="tel:+919999999999" className="font-serif text-xl font-semibold text-gray-900 hover:text-rose-600 transition mt-1 block">
                +91 99999 99999
              </a>
              <p className="text-sm text-gray-500 mt-2">Available round the clock</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Email Us</p>
              <a href="mailto:hello@japacares.com" className="font-serif text-xl font-semibold text-gray-900 hover:text-rose-600 transition mt-1 block">
                hello@japacares.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We reply within 2 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">Head Office</p>
              <p className="font-serif text-xl font-semibold text-gray-900 mt-1">
                Jaipur, Rajasthan
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

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-gray-700 tracking-wide">FULL NAME</label>
                  <input
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 tracking-wide">MOBILE NUMBER</label>
                  <input
                    className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 tracking-wide">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 tracking-wide">MESSAGE</label>
                <textarea
                  rows={5}
                  className="w-full mt-2 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 transition resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button className="group w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all">
                Send Message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}