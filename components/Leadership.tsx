"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

const LEADERS = [
  {
    name: "Bikas Singh",
    role: "Co-Founder & CEO",
    expertise: "Technology, Operations & Business Strategy",
    image: "/bikas.jpg",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    ringColor: "ring-rose-200",
  },
  {
    name: "Manisha Yadav",
    role: "Co-Founder & CMO",
    expertise: "Marketing, Brand & Customer Experience",
    image: "/manisha.jpg",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    ringColor: "ring-amber-200",
  },
  {
    name: "Pardeep Kumar",
    role: "Co-Founder & COO",
    expertise: "Operations, Caregiver Management & Service Delivery",
    image: "/pardeep.jpg",
    color: "from-teal-500 to-emerald-500",
    bgColor: "from-teal-50 to-emerald-50",
    ringColor: "ring-teal-200",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-gradient-to-b from-[#FDE8E4] via-white to-[#FFF8F3] py-16 md:py-24"
    >
      {/* Simplified blobs — smaller on mobile */}
      <div
        className="absolute top-20 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-rose-200 rounded-full blur-[100px] md:blur-[140px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-20 right-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[140px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
            <Users size={14} className="text-rose-500" aria-hidden="true" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide">
              THE FOUNDERS
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            Meet Our{" "}
            <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            Three passionate founders united by one mission — to bring loving,
            trusted care to every mother across India.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Decorative corner */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${leader.bgColor} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-700`}
                  aria-hidden="true"
                />

                {/* 🎯 Photo — Sharp & Optimized */}
                <div className="relative pt-8 md:pt-10 px-8 pb-4">
                  <div
                    className={`relative w-40 h-40 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden ring-4 ${leader.ringColor} shadow-2xl group-hover:scale-105 transition-transform duration-500`}
                  >
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role} at JapaCares`}
                      fill
                      sizes="(max-width: 768px) 160px, 176px"
                      className="object-cover"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 md:p-8 text-center">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <div
                    className={`inline-block bg-gradient-to-r ${leader.color} bg-clip-text text-transparent font-semibold text-sm tracking-wide mb-4`}
                  >
                    {leader.role}
                  </div>
                  <div
                    className={`h-0.5 w-16 mx-auto bg-gradient-to-r ${leader.color} rounded-full mb-4 opacity-60`}
                    aria-hidden="true"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.expertise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 md:px-7 py-3 md:py-4 rounded-full shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm md:text-base"
          >
            Learn More About Us
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}