"use client";

import { ArrowRight } from "lucide-react";
import { Calendar } from "lucide-react";

export default function ContactSchedule() {
  return (
    <div className="mt-6">
      
      <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition-all cursor-pointer group">
        
        {/* LEFT CONTENT */}
        <div className="flex items-center gap-4">
          
          {/* ICON BOX */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#eef2ff]">
            <Calendar className="w-5 h-5 text-[#0050cc]" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-[#0f172a] font-semibold text-sm">
              Schedule a Call
            </h3>
            <p className="text-[#64748b] text-sm">
              Pick a slot that works for you
            </p>
          </div>

        </div>

        {/* RIGHT ARROW */}
        <div className="text-[#64748b] group-hover:text-[#0050cc] transition">
          <ArrowRight className="w-5 h-5" />
        </div>

      </div>

    </div>
  );
}