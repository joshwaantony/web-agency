

"use client";

export default function AboutMission() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 
    px-4 sm:px-6 md:px-8 
    bg-[#f8fafc] border-b border-[#e2e8f0]">
      
      <div className="max-w-7xl mx-auto 
      grid grid-cols-1 md:grid-cols-2 
      gap-6 sm:gap-8 md:gap-10">
        
        {/* CARD 1 */}
        <div className="p-6 sm:p-8 md:p-10 
        bg-white rounded-lg md:rounded-xl 
        border border-[#e2e8f0] shadow-sm 
        transition hover:shadow-md">
          
          {/* ICON */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
          flex items-center justify-center 
          rounded-md md:rounded-lg 
          bg-[#0050cc]/10 text-[#0050cc] 
          mb-4 md:mb-6">
            
            <span className="material-symbols-outlined text-[22px] sm:text-[24px] md:text-[28px]">
              rocket_launch
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-lg sm:text-xl md:text-2xl 
          font-headline font-bold text-[#0f172a] 
          mb-2 md:mb-4">
            Our Mission
          </h2>

          {/* TEXT */}
          <p className="text-[#475569] 
          text-sm sm:text-base 
          leading-relaxed">
            
            To engineer high-performance digital products that combine aesthetic clarity 
            with technical excellence. Every solution we craft is designed to deliver 
            measurable business impact.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="p-6 sm:p-8 md:p-10 
        bg-white rounded-lg md:rounded-xl 
        border border-[#e2e8f0] shadow-sm 
        transition hover:shadow-md">
          
          {/* ICON */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
          flex items-center justify-center 
          rounded-md md:rounded-lg 
          bg-[#0050cc]/10 text-[#0050cc] 
          mb-4 md:mb-6">
            
            <span className="material-symbols-outlined text-[22px] sm:text-[24px] md:text-[28px]">
              visibility
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-lg sm:text-xl md:text-2xl 
          font-headline font-bold text-[#0f172a] 
          mb-2 md:mb-4">
            Our Vision
          </h2>

          {/* TEXT */}
          <p className="text-[#475569] 
          text-sm sm:text-base 
          leading-relaxed">
            
            To set the global benchmark for premium digital experiences. We aim 
            to redefine how brands interact with technology through innovation, 
            precision, and creativity.
          </p>

        </div>

      </div>
    </section>
  );
}