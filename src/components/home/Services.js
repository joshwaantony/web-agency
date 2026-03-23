// "use client";

// export default function Services() {
//   return (
//     <section className="py-24 px-8 bg-white relative border-y border-slate-100">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Heading */}
//         <div className="mb-16">
//           <h2 className="font-headline font-bold text-4xl mb-4 text-primary">
//             What We Do
//           </h2>
//           <div className="h-1.5 w-16 bg-accent rounded-full"></div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Card 1 (Big) */}
//           <div className="md:col-span-2 p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-accent/30 transition-all duration-300 group">
//             <span className="material-symbols-outlined text-4xl text-accent mb-6">
//               rocket_launch
//             </span>

//             <h3 className="text-2xl font-bold mb-4 font-headline text-primary">
//               Strategic Brand Engineering
//             </h3>

//             <p className="text-on-surface-variant leading-relaxed max-w-xl">
//               We dig deep into your identity to create a digital presence that
//               doesn't just look good, but dominates. Our strategy first approach
//               ensures every pixel serves a purpose.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
//             <div>
//               <span className="material-symbols-outlined text-4xl text-accent mb-6">
//                 fluorescent
//               </span>

//               <h3 className="text-2xl font-bold mb-4 font-headline text-primary">
//                 Premium UI/UX
//               </h3>
//             </div>

//             <p className="text-on-surface-variant leading-relaxed">
//               Accessibility first. High legibility. Clean interactions.
//               Experience-driven professional design.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all duration-300">
//             <div>
//               <span className="material-symbols-outlined text-4xl text-accent mb-6">
//                 code_blocks
//               </span>

//               <h3 className="text-2xl font-bold mb-4 font-headline text-primary">
//                 Modern Stack
//               </h3>
//             </div>

//             <p className="text-on-surface-variant leading-relaxed">
//               Optimized performance via Next.js and Tailwind CSS. Built for
//               scale, speed, and enterprise-grade security.
//             </p>
//           </div>

//           {/* Card 4 (Big with Image) */}
//           <div className="md:col-span-2 p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-8 items-center hover:border-accent/30 transition-all duration-300">
            
//             {/* Text */}
//             <div className="flex-1">
//               <span className="material-symbols-outlined text-4xl text-accent mb-6">
//                 auto_awesome
//               </span>

//               <h3 className="text-2xl font-bold mb-4 font-headline text-primary">
//                 Motion Alchemy
//               </h3>

//               <p className="text-on-surface-variant leading-relaxed">
//                 Subtle transitions that guide the user's journey. We use motion
//                 to define focus and tell a compelling story through smooth,
//                 purposeful interaction.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="w-full md:w-56 aspect-video rounded-xl bg-white border border-slate-200 overflow-hidden shadow-inner">
//               <img
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD80zstNg6436_2xSxpUhbtGp7T_S7XmoZlb97XB7QUmHV66E-gJohZNgRZU7jaHtxIyWIjKBb705HmGy8qA-jCJj5txN0Ou2PGhLz6ve2aULjGYf-uiF8udTl2kMo8yOZvvWl53VVonBXG1LXqhTj6VaEdtYR2mxdP4eqcxPVlT6sZhTzBVyY3lISWNv82wQHRATjAb6AxwLLJSU-peuVJvrxhFw-43sslTjwXND-ztJ9G_XcMMfsfC3ski-Y4SZ_ZBfcbZod7eZlu"
//                 alt="Animation preview"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

export default function Services() {
  return (
    <section className="py-24 px-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-headline font-bold text-4xl text-[#1A2B3C] mb-4">
            What We Do
          </h2>
          <div className="h-[3px] w-14 bg-[#0050cc] rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 (BIG) */}
          <div className="md:col-span-2 p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0050cc]/30 transition-all duration-300 group">
            
            <span className="material-symbols-outlined text-4xl text-[#0050cc] mb-6">
              rocket_launch
            </span>

            <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-4">
              Strategic Brand Engineering
            </h3>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              We dig deep into your identity to create a digital presence that
              doesn't just look good, but dominates. Our strategy first approach
              ensures every pixel serves a purpose.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-[#0050cc]/20 transition-all duration-300">
            
            <div>
              <span className="material-symbols-outlined text-4xl text-[#0050cc] mb-6">
                fluorescent
              </span>

              <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-4">
                Premium UI/UX
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Accessibility first. High legibility. Clean interactions.
              Experience-driven professional design.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-10 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-[#0050cc]/20 transition-all duration-300">
            
            <div>
              <span className="material-symbols-outlined text-4xl text-[#0050cc] mb-6">
                code_blocks
              </span>

              <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-4">
                Modern Stack
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Optimized performance via Next.js and Tailwind CSS. Built for
              scale, speed, and enterprise-grade security.
            </p>
          </div>

          {/* CARD 4 (BIG WITH IMAGE) */}
          <div className="md:col-span-2 p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-8 items-center hover:border-[#0050cc]/30 transition-all duration-300">
            
            {/* TEXT */}
            <div className="flex-1">
              <span className="material-symbols-outlined text-4xl text-[#0050cc] mb-6">
                auto_awesome
              </span>

              <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-4">
                Motion Alchemy
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Subtle transitions that guide the user's journey. We use motion
                to define focus and tell a compelling story through smooth,
                purposeful interaction.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-56 aspect-video rounded-xl bg-white border border-slate-200 overflow-hidden shadow-inner">
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