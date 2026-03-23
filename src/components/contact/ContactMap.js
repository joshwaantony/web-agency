"use client";

export default function ContactMap() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-[#e2e8f0] h-48 bg-[#f8fafc]">
      
      {/* MAP IMAGE */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ23opSBMX4i2f_sfbhw3JcJ8C6EZQ0dtFn-Gy3tqMQpe5zPnSUg-Jx1zQyXyKq7sME9ROaKy_tCHg7jvgCV2g5kvE9ssLRgN7_CCZOb6PBYOQB99kvKv75gPQWb2v2yI7bHjSqtQLRQU0OYK9VpdBYwZfk9YuN9d7HZR_W8HG1fuNtmgqB4d7FfnOVa00EzSDOlSw9_nwSUXSWxGzROYWQRafOD-4WA7kc_7WcpuIlGTrjG3dnB78dWKL1qwP0SUaw-cmfq8mOZaJ"
        alt="Studio Location"
        className="w-full h-full object-cover opacity-40"
      />

      {/* GRADIENT OVERLAY (IMPORTANT FIX) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>

      {/* LIVE BADGE (FIXED) */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#e2e8f0] shadow-sm">
        
        {/* BLUE DOT */}
        <span className="w-2 h-2 rounded-full bg-[#0050cc] animate-pulse"></span>

        {/* TEXT */}
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f172a]">
          Live Studio
        </span>

      </div>

    </div>
  );
}