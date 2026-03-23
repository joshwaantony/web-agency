"use client";

export default function PortfolioCTA() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-32 mb-32">
      
      {/* CTA CONTAINER */}
      <div className="bg-[#dbe7fb] rounded-[28px] px-12 py-24 text-center relative overflow-hidden">
        
        {/* SOFT GRADIENT FEEL */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbe7fb] to-[#c7d6f7]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-2xl mx-auto">
          
          {/* HEADING */}
          <h2 className="text-[40px] md:text-[48px] font-headline font-extrabold text-[#0f172a] leading-tight mb-6">
            Ready to elevate your digital presence?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-12">
            We’re currently accepting high-impact projects. Partner with us to
            build a product that leads the market.
          </p>

          {/* BUTTON */}
          <button className="px-8 py-3 bg-[#0050cc] text-white font-semibold rounded-md 
          shadow-md hover:bg-[#003ea6] transition-all duration-200">
            Start a Project
          </button>

        </div>

      </div>
    </section>
  );
}