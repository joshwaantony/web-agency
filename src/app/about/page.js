import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutProcess from "@/components/about/AboutProcess";
import AboutTeam from "@/components/about/AboutTeam";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export default function AboutPage() {
  return (
    <main className="bg-white text-[#0f172a]">
      
      
      <Navbar />

    
      <AboutHero />
       <AboutMission />
       <AboutProcess />
       <AboutTeam />
      {/* <AboutCTA />  */}
      <Footer />  

    </main>
  );
}