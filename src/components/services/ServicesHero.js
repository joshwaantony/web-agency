

"use client";

export default function ServicesHero() {
  return (
    <header className="mb-16 md:mb-20 lg:mb-24 px-4 sm:px-6 md:px-8">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start lg:items-end">
        
        {/* LEFT */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          
          {/* LABEL */}
          <span className="text-[#0050cc] font-headline font-bold 
          tracking-[0.15em] md:tracking-[0.2em] uppercase 
          text-[10px] sm:text-xs mb-3 md:mb-4 block">
            Our Specializations
          </span>

          {/* HEADING */}
          <h1 className="font-headline font-extrabold 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 
          leading-[1.1] tracking-tight text-[#041627]">
            
            Crafting{" "}
            <span className="text-[#0050cc]">
              Digital Excellence
            </span>
            .
          </h1>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          
          <p className="text-[#64748b] 
          text-sm sm:text-base md:text-lg 
          leading-relaxed font-medium 
          max-w-md mx-auto lg:mx-0">
            
            We combine technical precision with professional aesthetic intuition
            to build interfaces that empower modern businesses.
          </p>

        </div>

      </div>
    </header>
  );
}