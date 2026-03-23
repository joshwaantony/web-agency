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
    <section className="mt-32 py-20 bg-[#f1f5f9] border-y border-[#e2e8f0]">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[#64748b] text-xs tracking-[0.25em] uppercase font-semibold">
          Industry Leaders We've Partnered With
        </p>
      </div>

      {/* Clients Row */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-0">
          
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-[#0f172a]/60 text-lg md:text-xl font-semibold"
            >
              {client}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}