"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const CITIES = [
  {
    name: "Jaipur",
    caregivers: "120+",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop",
    tag: "Pink City",
  },
  {
    name: "Delhi",
    caregivers: "350+",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop",
    tag: "Capital",
  },
  {
    name: "Gurgaon",
    caregivers: "180+",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop",
    tag: "Millennium City",
  },
  {
    name: "Noida",
    caregivers: "150+",
    image: "https://picsum.photos/seed/noida/800/600",
    tag: "Tech Hub",
  },
  {
    name: "Agra",
    caregivers: "80+",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop",
    tag: "Heritage",
  },
  {
    name: "Mumbai",
    caregivers: "420+",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop",
    tag: "Financial Capital",
  },
];

export default function Cities() {
  // 🎯 Request City Handler — Opens WhatsApp with pre-filled message
  const handleRequestCity = () => {
    const phone = "918239548307"; // Your WhatsApp number without +
    const message = `Hi JapaCares! 👋

I would like to request Jaapa caregiver services in my city.

• My City: 
• My Name: 
• My Mobile:

Please let me know when your services will be available in my area. Thank you! 💕`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="cities"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-white to-[#FDE8E4] py-24"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-rose-200 rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30 pointer-events-none" />

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
            <MapPin size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              AVAILABLE IN METRO CITIES
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            Serving mothers across{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              India
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Verified Jaapa caregivers now available in your city. Compassionate
            care, wherever you call home.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-gray-800 tracking-wide uppercase">
                    {city.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={18} className="text-gray-900" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                    {city.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse" />
                    <p className="text-sm font-medium">
                      {city.caregivers} verified caregivers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — Now Working! */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 px-8 py-6 rounded-3xl bg-white/70 backdrop-blur-md border border-rose-100 shadow-lg">
            <div className="text-left">
              <p className="font-serif text-xl font-semibold text-gray-900">
                Don't see your city?
              </p>
              <p className="text-sm text-gray-600 mt-1">
                We're expanding fast. Request care in your area.
              </p>
            </div>
            <button
              onClick={handleRequestCity}
              className="group flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Request City
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}