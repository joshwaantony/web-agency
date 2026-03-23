import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}