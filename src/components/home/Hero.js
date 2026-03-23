


"use client";

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 px-8 overflow-hidden bg-slate-50">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-8">
          
          {/* ✅ FIXED TEXT COLORS */}
          <h1 className="font-headline font-extrabold text-[52px] md:text-[72px] leading-[1.05] tracking-tight text-[#1A2B3C] mb-8">
            Architecting the{" "}
            <span className="text-[#0050cc]">
              Digital Future
            </span>{" "}
            of Brands.
          </h1>

          {/* ✅ FIXED SUBTEXT */}
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-body">
            We blend high-end editorial aesthetics with raw technical power.
            We don't just build websites; we craft immersive digital landscapes
            for the elite corporate space.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            
            {/* ✅ PRIMARY BUTTON FIX */}
            <button className="px-8 py-4 bg-[#1A2B3C] text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all shadow-md">
              Start Your Project
            </button>

            {/* SECONDARY */}
            <button className="px-8 py-4 bg-white border border-slate-300 text-[#1A2B3C] rounded-lg font-semibold text-lg hover:bg-slate-50 transition">
              View Showcase
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="lg:col-span-4 relative">
          <div className="w-full aspect-square rounded-2xl bg-white relative overflow-hidden shadow-xl border border-slate-200 group">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCnXbdMBi5tOYCG88YZJRjUgY3XRqKUqFnXHLwbJGWerlUwd1E3fVcgmqw2cZz-aIYRvA8uB-a4yruZaLtVbUCJnBu2wkby6HkdV5e4Zs2ZTI8FfBx8EuFnmsDWJ0wkVGLmVtCjmcqC3c6Pj_A0ZvpMNfG7pwZAXJ9R5cgl_CchHgtq0yljqt75sziC-KsywP327bDRfNHZ67ieOyYSIeddMnjt07P4YVn1OK2e5yengNctUgU1GwbrqxfvhwxfSoj1gPeS4yV_fh"
              alt="Digital Art"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-sm">
              <p className="text-[#0050cc] font-headline font-bold uppercase tracking-widest text-xs mb-1">
                Live Experiment
              </p>
              <h3 className="text-[#1A2B3C] font-semibold">
                Vortex Interface v2.0
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}