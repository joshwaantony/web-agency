import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactSchedule from "@/components/contact/ContactSchedule";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export default function ContactPage() {
  return (
    <main className="bg-white text-[#0f172a] min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto w-full flex-grow">
        
        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start mt-16">
          
          {/* LEFT */}
          <ContactForm />

          {/* RIGHT */}
          <div className="space-y-8">
              <ContactDetails /> 
             <ContactMap />
            <ContactSchedule />   
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}