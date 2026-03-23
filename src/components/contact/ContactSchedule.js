


"use client";

import { ArrowRight, Calendar } from "lucide-react";

export default function ContactSchedule() {
  return (
    <div className="mt-4 sm:mt-6">
      
      <div className="
      flex items-center justify-between 
      bg-white border border-[#e2e8f0] 
      rounded-lg md:rounded-xl 
      px-4 sm:px-5 md:px-6 
      py-3 sm:py-4 md:py-5 
      shadow-sm 
      hover:shadow-md 
      active:scale-[0.99] 
      transition-all duration-200 
      cursor-pointer group
      ">
        
        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* ICON */}
          <div className="
          w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
          flex items-center justify-center 
          rounded-md md:rounded-lg 
          bg-[#eef2ff]
          ">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0050cc]" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="
            text-[#0f172a] 
            font-semibold 
            text-xs sm:text-sm md:text-base
            ">
              Schedule a Call
            </h3>

            <p className="
            text-[#64748b] 
            text-[11px] sm:text-xs md:text-sm
            ">
              Pick a slot that works for you
            </p>
          </div>

        </div>

        {/* RIGHT ARROW */}
        <div className="
        text-[#64748b] 
        group-hover:text-[#0050cc] 
        transition
        ">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

      </div>

    </div>
  );
}