import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#041627]">
      <Navbar />
      <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </div>
      <Footer />
    </main>
  );
}
