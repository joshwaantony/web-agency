


"use client";

export default function PortfolioClients() {
  const clients = [
    "Skyline Corp",
    "VoltFlow",
    "Prism Studio",
    "Nexus Labs",
    "Aether Group",
  ];

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 
    py-12 sm:py-16 md:py-20 
    bg-[#f1f5f9] border-y border-[#e2e8f0]">
      
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <p className="text-[#64748b] 
        text-[10px] sm:text-xs 
        tracking-[0.2em] sm:tracking-[0.25em] 
        uppercase font-semibold">
          Industry Leaders We've Partnered With
        </p>
      </div>

      {/* CLIENTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="flex flex-wrap 
        justify-center md:justify-between 
        items-center 
        gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-0">
          
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-[#0f172a]/60 
              text-sm sm:text-base md:text-lg lg:text-xl 
              font-semibold 
              text-center md:text-left 
              whitespace-nowrap 
              hover:text-[#0f172a] transition-colors duration-300"
            >
              {client}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}