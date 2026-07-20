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
      <section id="home">
        <Hero />
      </section>
      <Services />
      <Pricing />
      <Cities />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}