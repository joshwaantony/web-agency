"use client";

export default function ServicesHero() {
  return (
    <header className="mb-24 flex flex-col md:flex-row gap-12 items-end">
      
      {/* LEFT CONTENT */}
      <div className="md:w-2/3">
        
        {/* SMALL LABEL */}
        <span className="text-[#0050cc] font-headline font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Our Specializations
        </span>

        {/* MAIN HEADING */}
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-[#041627] leading-[1.1] tracking-tight">
          Crafting{" "}
          <span className="text-[#0050cc]">
            Digital Excellence
          </span>
          .
        </h1>
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:w-1/3">
        <p className="text-[#64748b] text-lg leading-relaxed font-medium">
          We combine technical precision with professional aesthetic intuition
          to build interfaces that empower modern businesses.
        </p>
      </div>

    </header>
  );
}