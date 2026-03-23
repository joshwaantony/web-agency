



"use client";

export default function ContactMap() {
  return (
    <div className="
    relative overflow-hidden 
    rounded-lg sm:rounded-xl md:rounded-2xl 
    border border-[#e2e8f0] 
    h-40 sm:h-48 md:h-56 lg:h-64 
    bg-[#f8fafc]
    ">
      
      {/* MAP IMAGE */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ23opSBMX4i2f_sfbhw3JcJ8C6EZQ0dtFn-Gy3tqMQpe5zPnSUg-Jx1zQyXyKq7sME9ROaKy_tCHg7jvgCV2g5kvE9ssLRgN7_CCZOb6PBYOQB99kvKv75gPQWb2v2yI7bHjSqtQLRQU0OYK9VpdBYwZfk9YuN9d7HZR_W8HG1fuNtmgqB4d7FfnOVa00EzSDOlSw9_nwSUXSWxGzROYWQRafOD-4WA7kc_7WcpuIlGTrjG3dnB78dWKL1qwP0SUaw-cmfq8mOZaJ"
        alt="Studio Location"
        className="
        w-full h-full object-cover 
        opacity-40 
        transition-transform duration-500 
        hover:scale-[1.03]
        "
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

      {/* LIVE BADGE */}
      <div className="
      absolute bottom-3 left-3 
      sm:bottom-4 sm:left-4 
      flex items-center gap-2 
      bg-white/90 backdrop-blur-md 
      px-2.5 sm:px-3 md:px-4 
      py-1 sm:py-1.5 
      rounded-full 
      border border-[#e2e8f0] 
      shadow-sm
      ">
        
        {/* BLUE DOT */}
        <span className="
        w-1.5 h-1.5 sm:w-2 sm:h-2 
        rounded-full bg-[#0050cc] animate-pulse
        "></span>

        {/* TEXT */}
        <span className="
        text-[9px] sm:text-[10px] md:text-xs 
        font-bold uppercase tracking-wider 
        text-[#0f172a]
        ">
          Live Studio
        </span>

      </div>

    </div>
  );
}