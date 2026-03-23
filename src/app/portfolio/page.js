import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PortfolioClients from "@/components/portfolio/PortfolioClients";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioHero from "@/components/portfolio/PortfolioHero";


export default function PortfolioPage() {
  return (
    <main className="bg-white text-[#0f172a]">
      <Navbar />

      <div className="pt-32 pb-24">
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioClients />
        <PortfolioCTA />
      </div>

      <Footer />
    </main>
  );
}