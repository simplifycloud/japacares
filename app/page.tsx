import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cities from "@/components/Cities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section id="home"className="scroll-mt-24">
        <Hero />
      </section>

      <section id="services"className="scroll-mt-24">
        <Services />
      </section>

      <section id="pricing"className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="cities"className="scroll-mt-24">
        <Cities />
      </section>

      <section id="contact"className="scroll-mt-24">
        <Contact />
      </section>

      <WhatsAppButton />
    </main>
  );
}