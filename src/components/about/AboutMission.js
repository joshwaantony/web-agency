"use client";

export default function AboutMission() {
  return (
    <section className="py-24 px-8 bg-[#f8fafc] border-b border-[#e2e8f0]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CARD 1 */}
        <div className="p-10 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
          
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0050cc]/10 text-[#0050cc] mb-6">
            <span className="material-symbols-outlined text-[28px]">
              rocket_launch
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-headline font-bold text-[#0f172a] mb-4">
            Our Mission
          </h2>

          {/* TEXT */}
          <p className="text-[#475569] leading-relaxed text-base">
            To engineer high-performance digital products that combine aesthetic clarity with technical excellence. Every solution we craft is designed to deliver measurable business impact.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="p-10 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
          
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0050cc]/10 text-[#0050cc] mb-6">
            <span className="material-symbols-outlined text-[28px]">
              visibility
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-headline font-bold text-[#0f172a] mb-4">
            Our Vision
          </h2>

          {/* TEXT */}
          <p className="text-[#475569] leading-relaxed text-base">
            To set the global benchmark for premium digital experiences. We aim to redefine how brands interact with technology through innovation, precision, and creativity.
          </p>

        </div>

      </div>
    </section>
  );
}