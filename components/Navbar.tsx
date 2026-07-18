"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50"><div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6"><Link href="/"><h1 className="text-3xl font-bold text-teal-600">            Japa<span className="text-pink-500">Cares</span></h1></Link><div className="hidden md:flex gap-8"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/cities">Cities</Link><Link href="/contact">Contact</Link></div><button className="bg-teal-600 text-white px-5 py-3 rounded-full hover:bg-teal-700">          Book Now
        </button></div></nav>  );
}