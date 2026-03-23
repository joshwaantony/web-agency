


"use client";

export default function PortfolioCTA() {
  return (
    <section className="max-w-7xl mx-auto 
    px-4 sm:px-6 md:px-8 
    mt-16 sm:mt-20 md:mt-24 lg:mt-32 
    mb-16 sm:mb-20 md:mb-24 lg:mb-32">
      
      {/* CTA CONTAINER */}
      <div className="relative overflow-hidden 
      bg-[#dbe7fb] 
      rounded-xl sm:rounded-2xl md:rounded-[28px] 
      px-6 sm:px-8 md:px-12 
      py-12 sm:py-16 md:py-20 lg:py-24 
      text-center">
        
        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbe7fb] to-[#c7d6f7]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl sm:max-w-2xl mx-auto">
          
          {/* HEADING */}
          <h2 className="font-headline font-extrabold 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          text-[#0f172a] 
          leading-tight mb-4 md:mb-6">
            Ready to elevate your digital presence?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#475569] 
          text-sm sm:text-base md:text-lg 
          leading-relaxed mb-6 md:mb-10 lg:mb-12">
            We’re currently accepting high-impact projects. Partner with us to
            build a product that leads the market.
          </p>

          {/* BUTTON */}
          <button className="px-6 sm:px-8 
          py-3 sm:py-3.5 
          bg-[#0050cc] text-white 
          font-semibold text-sm sm:text-base 
          rounded-md 
          shadow-md 
          hover:bg-[#003ea6] 
          transition-all duration-200 
          active:scale-[0.98]">
            Start a Project
          </button>

        </div>

      </div>
    </section>
  );
}