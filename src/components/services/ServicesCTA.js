"use client";

export default function ServicesCTA() {
  return (
    <section className="mt-32 relative overflow-hidden bg-[#041627] rounded-2xl px-12 py-16">
      
      {/* 🔵 BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0050cc]/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">
        
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6 leading-tight">
          Need a tailored solution?
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
          Every brand has unique challenges. Let's map out your strategy and
          build something exceptional together.
        </p>

        {/* BUTTON GROUP */}
        <div className="flex flex-wrap gap-4">
          
          {/* PRIMARY BUTTON */}
          <button className="px-8 py-4 bg-[#0050cc] text-white font-semibold rounded-lg 
          shadow-[0_10px_30px_rgba(0,80,204,0.25)] 
          hover:bg-[#003ea6] 
          hover:shadow-[0_12px_35px_rgba(0,80,204,0.35)]
          transition-all duration-300">
            Schedule a Consultation
          </button>

          {/* SECONDARY BUTTON */}
          <button className="px-8 py-4 text-white font-semibold rounded-lg border border-white/20 
          hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
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