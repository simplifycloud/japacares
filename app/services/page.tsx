"use client";

import { motion } from "framer-motion";
import { Heart, Baby, Sparkles, Utensils, Moon, Flower2 } from "lucide-react";

const SERVICES = [
  {
    icon: Heart,
    title: "Mother Care",
    description: "Complete postpartum support, emotional wellness, and recovery care for new mothers.",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
  },
  {
    icon: Baby,
    title: "Newborn Care",
    description: "Experienced caregivers trained in newborn hygiene, feeding, and sleep routines.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Sparkles,
    title: "Baby Massage",
    description: "Traditional Ayurvedic massage by certified professionals for baby's development.",
    color: "from-teal-400 to-emerald-500",
    bg: "bg-teal-50",
  },
  {
    icon: Utensils,
    title: "Nutrition Support",
    description: "Custom postpartum meal plans and lactation support tailored to your needs.",
    color: "from-purple-400 to-pink-500",
    bg: "bg-purple-50",
  },
  {
    icon: Moon,
    title: "Night Care",
    description: "Overnight caregivers so mothers get the rest they truly deserve.",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Flower2,
    title: "Wellness Therapy",
    description: "Yoga, meditation, and holistic wellness sessions for mind & body recovery.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8F3] to-white py-24">

      {/* Blobs */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-30" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30" />

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
            <Sparkles size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              OUR PREMIUM SERVICES
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            Care crafted with{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              love
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Professional postpartum services designed to nurture mothers
            and welcome newborns with the finest care possible.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-rose-200/50 border border-gray-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative bg */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 ${service.bg} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon size={24} className="text-white" />
                </div>

                {/* Text */}
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}