


"use client";

export default function ContactDetails() {
  return (
    <div className="
    bg-[#f1f5f9] 
    rounded-lg md:rounded-xl 
    p-4 sm:p-6 md:p-8 
    space-y-6 sm:space-y-8 
    border border-[#e2e8f0]
    ">
      
      {/* TITLE */}
      <h3 className="
      text-lg sm:text-xl md:text-2xl 
      font-bold font-headline text-[#0050cc]
      ">
        Studio Details
      </h3>

      {/* DETAILS */}
      <div className="space-y-5 sm:space-y-6">

        {/* EMAIL */}
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-[#0050cc] text-[20px] sm:text-[22px] md:text-[24px]">
            mail
          </span>

          <div>
            <p className="text-[10px] sm:text-xs uppercase font-bold text-[#475569] mb-1">
              Email Us
            </p>

            <p className="text-sm sm:text-base text-[#0f172a] font-medium break-all">
              hello@luminousagency.studio
            </p>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-[#0050cc] text-[20px] sm:text-[22px] md:text-[24px]">
            call
          </span>

          <div>
            <p className="text-[10px] sm:text-xs uppercase font-bold text-[#475569] mb-1">
              Call Us
            </p>

            <p className="text-sm sm:text-base text-[#0f172a] font-medium">
              +1 (555) 012-3456
            </p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-[#0050cc] text-[20px] sm:text-[22px] md:text-[24px]">
            location_on
          </span>

          <div>
            <p className="text-[10px] sm:text-xs uppercase font-bold text-[#475569] mb-1">
              Visit Us
            </p>

            <p className="text-sm sm:text-base text-[#0f172a] font-medium leading-relaxed">
              42 Neon Circuit, Creative District <br />
              Nocturne City, NC 90210
            </p>
          </div>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="
      pt-4 sm:pt-6 
      border-t border-[#cbd5e1] 
      flex flex-wrap gap-3 sm:gap-4
      ">
        
        {["public", "share", "alternate_email"].map((icon, index) => (
          <a
            key={index}
            href="#"
            className="
            w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 
            rounded-full 
            bg-white border border-[#e2e8f0]
            flex items-center justify-center 
            text-[#475569]
            hover:text-[#0050cc] hover:border-[#0050cc]
            transition-all duration-200
            "
          >
            <span className="material-symbols-outlined text-xs sm:text-sm md:text-base">
              {icon}
            </span>
          </a>
        ))}

      </div>

    </div>
  );
}