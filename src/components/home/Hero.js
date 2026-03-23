


"use client";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-50">
      
      {/* BACKGROUND BLUR */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-slate-200 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-50 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
          
          {/* HEADING */}
          <h1 className="font-headline font-extrabold 
          text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px]
          leading-[1.1] tracking-tight text-[#1A2B3C] mb-6 md:mb-8">
            
            Architecting the{" "}
            <span className="text-[#0050cc]">Digital Future</span>{" "}
            of Brands.
          </h1>

          {/* SUBTEXT */}
          <p className="text-slate-600 
          text-sm sm:text-base md:text-lg lg:text-xl 
          max-w-xl md:max-w-2xl mx-auto lg:mx-0 
          leading-relaxed mb-8 md:mb-10">
            
            We blend high-end editorial aesthetics with raw technical power.
            We don't just build websites; we craft immersive digital landscapes
            for the elite corporate space.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1A2B3C] text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-slate-800 transition shadow-md">
              Start Your Project
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-slate-300 text-[#1A2B3C] rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-slate-50 transition">
              View Showcase
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-5 xl:col-span-4 relative mt-10 lg:mt-0">
          
          <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-full mx-auto aspect-square rounded-2xl bg-white relative overflow-hidden shadow-xl border border-slate-200 group">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCnXbdMBi5tOYCG88YZJRjUgY3XRqKUqFnXHLwbJGWerlUwd1E3fVcgmqw2cZz-aIYRvA8uB-a4yruZaLtVbUCJnBu2wkby6HkdV5e4Zs2ZTI8FfBx8EuFnmsDWJ0wkVGLmVtCjmcqC3c6Pj_A0ZvpMNfG7pwZAXJ9R5cgl_CchHgtq0yljqt75sziC-KsywP327bDRfNHZ67ieOyYSIeddMnjt07P4YVn1OK2e5yengNctUgU1GwbrqxfvhwxfSoj1gPeS4yV_fh"
              alt="Digital Art"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

            {/* CARD CONTENT */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-sm">
              
              <p className="text-[#0050cc] font-headline font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-1">
                Live Experiment
              </p>

              <h3 className="text-[#1A2B3C] font-semibold text-sm sm:text-base">
                Vortex Interface v2.0
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}