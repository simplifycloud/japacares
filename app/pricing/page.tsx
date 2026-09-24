import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing | JapaCares",
  description: "Affordable and transparent pricing for postpartum care.",
};

export default function PricingPage() {
  return (
    <main className="pt-16">
      <Pricing />
    </main>
  );
}