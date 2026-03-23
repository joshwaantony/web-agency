



"use client";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 text-center bg-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-slate-50 -z-10" />

      <div className="max-w-3xl md:max-w-4xl mx-auto">
        
        {/* HEADING */}
        <h2 className="font-headline font-bold 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
        tracking-tight text-[#1A2B3C] mb-6 md:mb-8 leading-tight">
          
          Ready to elevate your{" "}
          <span className="text-[#0050cc]">presence?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-slate-600 
        text-sm sm:text-base md:text-lg 
        leading-relaxed mb-8 md:mb-12">
          
          Limited availability for Q4 2024 projects. Let's discuss your vision.
        </p>

        {/* BUTTON */}
        <button
          className="px-6 sm:px-8 md:px-10 
          py-3 sm:py-4 md:py-5 
          bg-[#0050cc] text-white 
          font-semibold text-sm sm:text-base md:text-lg 
          rounded-lg 
          shadow-[0_8px_25px_rgba(0,80,204,0.25)] 
          hover:bg-[#003ea6] 
          hover:shadow-[0_10px_30px_rgba(0,80,204,0.35)]
          transition-all duration-300 
          active:scale-[0.98]"
        >
          Book a Strategy Call
        </button>

      </div>
    </section>
  );
}