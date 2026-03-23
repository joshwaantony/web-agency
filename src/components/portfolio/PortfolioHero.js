


"use client";

export default function PortfolioHero() {
  return (
    <section className="max-w-7xl mx-auto 
    px-4 sm:px-6 md:px-8 
    mb-16 sm:mb-20 md:mb-24">
      
      <div className="flex flex-col lg:flex-row 
      items-start lg:items-end 
      justify-between 
      gap-8 md:gap-10 lg:gap-12">
        
        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          {/* LABEL */}
          <span className="text-[#0050cc] font-headline font-bold 
          tracking-[0.15em] md:tracking-widest uppercase 
          text-[10px] sm:text-xs mb-3 md:mb-4 block">
            Our Portfolio
          </span>

          {/* HEADING */}
          <h1 className="font-headline font-extrabold 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          text-[#0f172a] leading-tight mb-4 md:mb-6 lg:mb-8">
            
            Precision Digital <br className="hidden sm:block" />
            <span className="text-[#0050cc]">
              Solutions.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#64748b] 
          text-sm sm:text-base md:text-lg 
          max-w-md sm:max-w-lg 
          mx-auto lg:mx-0 
          leading-relaxed">
            
            We deliver high-performance digital products engineered for growth.
            Explore our curated selection of award-winning work across industries.
          </p>
        </div>

        {/* RIGHT FILTER */}
        <div className="w-full lg:w-auto">
          
          <div className="flex flex-wrap justify-center lg:justify-end 
          gap-2 p-1.5 
          bg-[#f8fafc] 
          rounded-lg border border-[#e2e8f0]">
            
            {/* ACTIVE */}
            <button className="px-4 sm:px-5 md:px-6 py-2 rounded-md 
            bg-white shadow-sm border border-[#e2e8f0]/50 
            text-[#1e293b] font-headline font-bold 
            text-xs sm:text-sm transition-all">
              All
            </button>

            {/* OTHERS */}
            <button className="px-4 sm:px-5 md:px-6 py-2 rounded-md 
            text-[#64748b] hover:text-[#1e293b] 
            font-headline font-bold 
            text-xs sm:text-sm transition-all">
              Web
            </button>

            <button className="px-4 sm:px-5 md:px-6 py-2 rounded-md 
            text-[#64748b] hover:text-[#1e293b] 
            font-headline font-bold 
            text-xs sm:text-sm transition-all">
              Mobile
            </button>

            <button className="px-4 sm:px-5 md:px-6 py-2 rounded-md 
            text-[#64748b] hover:text-[#1e293b] 
            font-headline font-bold 
            text-xs sm:text-sm transition-all">
              Design
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}