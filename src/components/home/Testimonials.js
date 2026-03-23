


"use client";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-slate-50 border-y border-slate-100">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline font-bold 
          text-2xl sm:text-3xl md:text-4xl 
          text-[#1A2B3C]">
            Client Voices
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* CARD 1 */}
          <div className="p-6 sm:p-8 md:p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            
            {/* STARS */}
            <div className="flex gap-1 text-[#0050cc] mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm md:text-base">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6 md:mb-8">
              "Luminous Agency completely redefined our brand identity. The attention to atmospheric detail is something we haven't found anywhere else. Truly elite."
            </p>

            {/* PROFILE */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1A2B3C] font-bold text-xs md:text-sm">
                MT
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C] text-sm md:text-base">
                  Marcus Thorne
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  CEO, Thorne Digital
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div className="p-6 sm:p-8 md:p-10 bg-white rounded-2xl border border-[#0050cc]/30 shadow-lg 
          md:scale-105 transition">
            
            {/* STARS */}
            <div className="flex gap-1 text-[#0050cc] mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm md:text-base">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6 md:mb-8">
              "They don't just build sites; they build digital experiences that breathe. Our conversion rates spiked 40% after the relaunch. It's magic."
            </p>

            {/* PROFILE */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0050cc] font-bold text-xs md:text-sm">
                EV
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C] text-sm md:text-base">
                  Elena Vance
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  Founder, Void Aesthetics
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-6 sm:p-8 md:p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            
            {/* STARS */}
            <div className="flex gap-1 text-[#0050cc] mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm md:text-base">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6 md:mb-8">
              "The process was seamless and the result exceeded our wildest expectations. The motion work alone is worth every penny."
            </p>

            {/* PROFILE */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1A2B3C] font-bold text-xs md:text-sm">
                JK
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C] text-sm md:text-base">
                  Julian Klay
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  Design Lead, Apex Tech
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}