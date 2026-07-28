"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  Eye,
  Sparkles,
  Users,
  Award,
  Shield,
  Mail,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp,
} from "lucide-react";

const LEADERS = [
  {
    name: "Bikas Singh",
    role: "Co-Founder & CEO",
    expertise: "Technology, Operations & Business Strategy",
    bio: "A visionary technologist with a passion for building products that make a real difference. Bikas leads JapaCares' technology strategy and overall business operations, ensuring every mother receives world-class care through seamless technology.",
    image: "/bikas.jpg",
    email: "bikas@japacares.com",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    skills: ["Product Strategy", "Tech Leadership", "Business Growth"],
  },
  {
    name: "Manisha Yadav",
    role: "Co-Founder & CMO",
    expertise: "Marketing, Brand & Customer Experience",
    bio: "A creative marketing leader focused on building meaningful connections with families. Manisha shapes JapaCares' brand identity and ensures every customer touchpoint reflects our core values of trust, care, and compassion.",
    image: "/manisha.jpg",
    email: "manisha@japacares.com",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    skills: ["Brand Strategy", "Digital Marketing", "Customer Experience"],
  },
  {
    name: "Pardeep Kumar",
    role: "Co-Founder & COO",
    expertise: "Operations, Caregiver Management & Service Delivery",
    bio: "An operations expert dedicated to service excellence. Pardeep manages JapaCares' extensive caregiver network across India, ensuring every family receives verified, trained, and compassionate care providers matched perfectly to their needs.",
    image: "/pardeep.jpg",
    email: "pardeep@japacares.com",
    color: "from-teal-500 to-emerald-500",
    bgColor: "from-teal-50 to-emerald-50",
    skills: ["Operations", "Team Management", "Service Quality"],
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction starts with empathy. We treat every mother like family.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "100% verified caregivers with police checks and comprehensive background verification.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in postpartum care delivery.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a supportive community for mothers, caregivers, and families.",
    color: "from-teal-400 to-emerald-500",
  },
];

const STATS = [
  { icon: Users, value: "2,000+", label: "Happy Mothers", color: "text-rose-500" },
  { icon: MapPin, value: "6+", label: "Cities Served", color: "text-amber-500" },
  { icon: Award, value: "1,300+", label: "Verified Caregivers", color: "text-teal-500" },
  { icon: TrendingUp, value: "4.9/5", label: "Average Rating", color: "text-purple-500" },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFF3EC] to-[#FDE8E4] pt-32 pb-20">
        <div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-200 rounded-full blur-[140px] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-amber-200 rounded-full blur-[160px] opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-6">
              <Sparkles size={14} className="text-rose-500" />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                ABOUT JAPACARES
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-gray-900">
              Caring for mothers,{" "}
              <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                one family
              </span>{" "}
              at a time.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              JapaCares was born from a simple belief — that every new mother
              deserves compassionate, professional care during the most
              transformative phase of her life. We&apos;re building India&apos;s
              most trusted postpartum care platform, connecting families with
              verified Jaapa caregivers who bring warmth, expertise, and peace
              of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 mb-4">
                  <stat.icon size={24} className={stat.color} />
                </div>
                <p className="font-serif text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION & VISION ═══════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower every new mother in India with access to trusted,
                trained, and compassionate postpartum caregivers — ensuring she
                can focus on healing and bonding with her baby, worry-free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg mb-6">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become India&apos;s most loved and trusted postpartum care
                brand, transforming how families experience motherhood — with
                dignity, tradition, and modern care working in perfect harmony.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR VALUES ═══════════ */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
              <Heart size={14} className="text-rose-500" />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                OUR CORE VALUES
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
              What we{" "}
              <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                stand for
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 transition-all hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LEADERSHIP DETAILED ═══════════ */}
      <section
        id="leadership"
        className="py-24 bg-gradient-to-b from-white to-[#FDE8E4]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
              <Users size={14} className="text-rose-500" />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                THE FOUNDING TEAM
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
              Meet Our{" "}
              <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The passionate minds building JapaCares.
            </p>
          </motion.div>

          <div className="space-y-16">
            {LEADERS.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Photo */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${leader.color} rounded-3xl blur-2xl opacity-30`}
                      aria-hidden="true"
                    />
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${leader.color} text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold whitespace-nowrap`}
                    >
                      {leader.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
                    {leader.name}
                  </h3>

                  <div
                    className={`inline-block bg-gradient-to-r ${leader.color} bg-clip-text text-transparent font-semibold text-lg mb-6`}
                  >
                    {leader.expertise}
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${leader.bgColor} text-gray-800 border border-gray-100`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Email Only */}
                  <a
                    href={`mailto:${leader.email}`}
                    aria-label={`Email ${leader.name}`}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${leader.color} text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all`}
                  >
                    <Mail size={16} />
                    Contact
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ JOURNEY ═══════════ */}
      <section className="py-24 bg-gradient-to-b from-[#FDE8E4] to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm mb-5">
              <Calendar size={14} className="text-rose-500" />
              <span className="text-xs font-semibold text-gray-700 tracking-wide">
                OUR JOURNEY
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900">
              How it all{" "}
              <span className="italic bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                started
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              JapaCares started with a simple observation — new mothers in India
              were struggling to find trained, trustworthy postpartum
              caregivers. Traditional networks were unreliable, and modern
              alternatives lacked the warmth of Indian caregiving traditions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Three friends with complementary skills — technology, marketing,
              and operations — came together with a shared vision: to bridge
              this gap by combining the best of traditional Jaapa care with
              modern service standards.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, JapaCares serves families across 6+ cities in India, with a
              network of 1,300+ verified caregivers helping thousands of
              mothers experience motherhood with confidence, comfort, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6">
              Ready to experience{" "}
              <span className="italic">JapaCares?</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust us with the most precious
              moments of their lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book-caregiver"
                className="group inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-7 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
              >
                Book a Caregiver
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border-2 border-white text-white font-semibold px-7 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}