"use client";

export default function ContactDetails() {
  return (
    <div className="bg-[#f1f5f9] rounded-xl p-8 space-y-8 border border-[#e2e8f0]">
      
      {/* TITLE */}
      <h3 className="text-2xl font-bold font-headline text-[#0050cc]">
        Studio Details
      </h3>

      {/* DETAILS */}
      <div className="space-y-6">

        {/* EMAIL */}
        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-[#0050cc]">
            mail
          </span>
          <div>
            <p className="text-xs uppercase font-bold text-[#475569] mb-1">
              Email Us
            </p>
            <p className="text-[#0f172a] font-medium">
              hello@luminousagency.studio
            </p>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-[#0050cc]">
            call
          </span>
          <div>
            <p className="text-xs uppercase font-bold text-[#475569] mb-1">
              Call Us
            </p>
            <p className="text-[#0f172a] font-medium">
              +1 (555) 012-3456
            </p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-[#0050cc]">
            location_on
          </span>
          <div>
            <p className="text-xs uppercase font-bold text-[#475569] mb-1">
              Visit Us
            </p>
            <p className="text-[#0f172a] font-medium leading-relaxed">
              42 Neon Circuit, Creative District <br />
              Nocturne City, NC 90210
            </p>
          </div>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="pt-6 border-t border-[#cbd5e1] flex gap-4">

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0]
          flex items-center justify-center text-[#475569]
          hover:text-[#0050cc] hover:border-[#0050cc]
          transition-colors"
        >
          <span className="material-symbols-outlined text-sm">
            public
          </span>
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0]
          flex items-center justify-center text-[#475569]
          hover:text-[#0050cc] hover:border-[#0050cc]
          transition-colors"
        >
          <span className="material-symbols-outlined text-sm">
            share
          </span>
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0]
          flex items-center justify-center text-[#475569]
          hover:text-[#0050cc] hover:border-[#0050cc]
          transition-colors"
        >
          <span className="material-symbols-outlined text-sm">
            alternate_email
          </span>
        </a>

      </div>

    </div>
  );
}