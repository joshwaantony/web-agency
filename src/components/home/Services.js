



"use client";

export default function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white border-y border-slate-100">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-headline font-bold 
          text-2xl sm:text-3xl md:text-4xl 
          text-[#1A2B3C] mb-3 md:mb-4">
            What We Do
          </h2>

          <div className="h-[3px] w-12 md:w-14 bg-[#0050cc] rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* CARD 1 (BIG) */}
          <div className="md:col-span-2 p-6 sm:p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0050cc]/30 transition-all group">
            
            <span className="material-symbols-outlined text-3xl md:text-4xl text-[#0050cc] mb-4 md:mb-6">
              rocket_launch
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline text-[#1A2B3C] mb-3 md:mb-4">
              Strategic Brand Engineering
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              We dig deep into your identity to create a digital presence that
              doesn't just look good, but dominates. Our strategy first approach
              ensures every pixel serves a purpose.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-[#0050cc]/20 transition-all">
            
            <div>
              <span className="material-symbols-outlined text-3xl md:text-4xl text-[#0050cc] mb-4 md:mb-6">
                fluorescent
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline text-[#1A2B3C] mb-3 md:mb-4">
                Premium UI/UX
              </h3>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Accessibility first. High legibility. Clean interactions.
              Experience-driven professional design.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-[#0050cc]/20 transition-all">
            
            <div>
              <span className="material-symbols-outlined text-3xl md:text-4xl text-[#0050cc] mb-4 md:mb-6">
                code_blocks
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline text-[#1A2B3C] mb-3 md:mb-4">
                Modern Stack
              </h3>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Optimized performance via Next.js and Tailwind CSS. Built for
              scale, speed, and enterprise-grade security.
            </p>
          </div>

          {/* CARD 4 (BIG WITH IMAGE) */}
          <div className="md:col-span-2 p-6 sm:p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:border-[#0050cc]/30 transition-all">
            
            {/* TEXT */}
            <div className="flex-1">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-[#0050cc] mb-4 md:mb-6">
                auto_awesome
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline text-[#1A2B3C] mb-3 md:mb-4">
                Motion Alchemy
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Subtle transitions that guide the user's journey. We use motion
                to define focus and tell a compelling story through smooth,
                purposeful interaction.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full sm:w-[80%] md:w-56 aspect-video rounded-xl bg-white border border-slate-200 overflow-hidden shadow-inner">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD80zstNg6436_2xSxpUhbtGp7T_S7XmoZlb97XB7QUmHV66E-gJohZNgRZU7jaHtxIyWIjKBb705HmGy8qA-jCJj5txN0Ou2PGhLz6ve2aULjGYf-uiF8udTl2kMo8yOZvvWl53VVonBXG1LXqhTj6VaEdtYR2mxdP4eqcxPVlT6sZhTzBVyY3lISWNv82wQHRATjAb6AxwLLJSU-peuVJvrxhFw-43sslTjwXND-ztJ9G_XcMMfsfC3ski-Y4SZ_ZBfcbZod7eZlu"
                alt="Animation preview"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}