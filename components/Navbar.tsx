"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "Cities", href: "#cities" },
    { name: "Team", href: "#leadership" },  
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // 🎯 Detect active section (using dynamic navbar height)
      const navbar = document.querySelector("nav");
      const navHeight = navbar?.getBoundingClientRect().height || 80;
      const triggerPoint = navHeight + 40;

      const sections = links.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= triggerPoint && rect.bottom >= triggerPoint;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🎯 Smooth scroll handler with DYNAMIC offset
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (el) {
      const navbar = document.querySelector("nav");
      const navHeight = navbar?.getBoundingClientRect().height || 80;
      const yOffset = -(navHeight + 20);

      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-rose-100/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12">
        {/* 🎯 Clean Logo Only — No Duplicate Text */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label="JapaCares - Home"
        >
          <div className="relative w-16 h-16 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="JapaCares - Postpartum Care"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  isActive
                    ? "text-rose-600"
                    : "text-gray-700 hover:text-rose-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-300 ${
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/book-caregiver"
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-rose-200 hover:scale-105 transition-transform"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-rose-100 px-6 py-6 space-y-3">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`block py-2 font-medium transition ${
                  isActive
                    ? "text-rose-600"
                    : "text-gray-800 hover:text-rose-600"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <Link
            href="/book-caregiver"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-3 rounded-full mt-4 shadow-lg"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}