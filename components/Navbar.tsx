"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Cities", href: "#cities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-rose-100/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-200 group-hover:scale-110 transition-transform">
            <Heart size={18} className="text-white fill-white" />
          </div>
          <h1 className="font-serif text-2xl font-semibold text-gray-900">
            Japa<span className="italic text-rose-500">Cares</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="#contact" className="hidden md:block">
          <button className="group flex items-center gap-2 bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm">
            Book Now
            <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse" />
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-rose-100 px-6 py-6 space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-800 font-medium hover:text-rose-600"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-full mt-4">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}