import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import dynamic from "next/dynamic";

// 🚀 Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const Cities = dynamic(() => import("@/components/Cities"));
const Leadership = dynamic(() => import("@/components/Leadership"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="reviews" className="scroll-mt-24">
        <Reviews />
      </section>

      <section id="cities" className="scroll-mt-24">
        <Cities />
      </section>

      <section id="leadership" className="scroll-mt-24">
        <Leadership />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <WhatsAppButton />
    </main>
  );
}