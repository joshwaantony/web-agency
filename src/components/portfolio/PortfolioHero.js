"use client";

export default function PortfolioHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      
      <div className="flex flex-col md:flex-row items-end justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          
          {/* LABEL */}
          <span className="text-[#0050cc] font-headline font-bold tracking-widest uppercase text-xs mb-4 block">
            Our Portfolio
          </span>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-[#0f172a] leading-tight mb-8">
            Precision Digital <br />
            <span className="text-[#0050cc]">Solutions.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#64748b] text-lg max-w-lg leading-relaxed">
            We deliver high-performance digital products engineered for growth.
            Explore our curated selection of award-winning work across industries.
          </p>
        </div>

        {/* RIGHT FILTER */}
        <div className="hidden md:block pb-4">
          <div className="flex gap-2 p-1.5 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
            
            {/* ACTIVE */}
            <button className="px-6 py-2 rounded-md bg-white shadow-sm border border-[#e2e8f0]/50 text-[#1e293b] font-headline font-bold text-sm transition-all duration-200">
              All
            </button>

            {/* OTHER BUTTONS */}
            <button className="px-6 py-2 rounded-md text-[#64748b] hover:text-[#1e293b] font-headline font-bold text-sm transition-all duration-200">
              Web
            </button>

            <button className="px-6 py-2 rounded-md text-[#64748b] hover:text-[#1e293b] font-headline font-bold text-sm transition-all duration-200">
              Mobile
            </button>

            <button className="px-6 py-2 rounded-md text-[#64748b] hover:text-[#1e293b] font-headline font-bold text-sm transition-all duration-200">
              Design
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}