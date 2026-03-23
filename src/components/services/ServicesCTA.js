



"use client";

export default function ServicesCTA() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32 relative overflow-hidden 
    bg-[#041627] rounded-xl md:rounded-2xl 
    px-6 sm:px-8 md:px-12 
    py-10 sm:py-12 md:py-16">
      
      {/* 🔵 BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 
      w-[250px] sm:w-[350px] md:w-[500px] 
      h-[250px] sm:h-[350px] md:h-[500px] 
      bg-[#0050cc]/10 blur-[80px] md:blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl 
      text-center md:text-left">
        
        {/* HEADING */}
        <h2 className="font-headline font-bold text-white 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        leading-tight mb-4 md:mb-6">
          Need a tailored solution?
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#94A3B8] 
        text-sm sm:text-base md:text-lg 
        leading-relaxed mb-6 md:mb-10 
        max-w-md mx-auto md:mx-0">
          
          Every brand has unique challenges. Let's map out your strategy and
          build something exceptional together.
        </p>

        {/* BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row 
        items-center md:items-start 
        gap-3 sm:gap-4">
          
          {/* PRIMARY BUTTON */}
          <button className="w-full sm:w-auto 
          px-6 sm:px-8 py-3 sm:py-4 
          bg-[#0050cc] text-white 
          font-semibold text-sm sm:text-base 
          rounded-lg 
          shadow-[0_8px_25px_rgba(0,80,204,0.25)] 
          hover:bg-[#003ea6] 
          hover:shadow-[0_10px_30px_rgba(0,80,204,0.35)]
          transition-all duration-300 
          active:scale-[0.98]">
            Schedule a Consultation
          </button>

          {/* SECONDARY BUTTON */}
          <button className="w-full sm:w-auto 
          px-6 sm:px-8 py-3 sm:py-4 
          text-white font-semibold 
          text-sm sm:text-base 
          rounded-lg border border-white/20 
          hover:bg-white/5 transition-all duration-300 
          flex items-center justify-center gap-2">
            
            View Portfolio
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}