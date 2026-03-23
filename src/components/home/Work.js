// "use client";

// export default function Work() {
//   return (
//     <section className="py-32 px-8 bg-surface">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
//           <div className="max-w-xl">
//             <h2 className="font-headline font-bold text-5xl mb-6 text-primary">
//               Latest Work
//             </h2>
//             <p className="text-on-surface-variant text-lg">
//               A selection of premium digital artifacts we've crafted for visionary clients across the globe.
//             </p>
//           </div>

//           <a
//             href="#"
//             className="group flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
//           >
//             View Full Portfolio
//             <span className="material-symbols-outlined">
//               arrow_forward
//             </span>
//           </a>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* Project 1 */}
//           <div className="group cursor-pointer">
//             <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200">
              
//               <img
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUM2jIxDhIhQPDh_0lV7rHWd_Hr04OBwmDlNyavVW-RaRy01L_312u99k_z671FMOyXGvGFNtN8-sElplCYdjDWhy7cYGag-G-AuRwf_q9EDBYuv-5Y_qzxqVSWRTF36yqcDJceHW7fqJtGDLygqhy82ql-UCatXniC5N0j2jJOuejURMCRPhHl_0DYC1BXQKlbuuz3Afl95ZnIClN9P1rI91Sx8bzmDX1xpzRTpkE-roLiCcwkW-LIrhnGWYnoBPMCm8_rZikr9Ww"
//                 alt="Fintech App"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//             </div>

//             {/* Content */}
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-2xl font-bold font-headline mb-2 text-primary">
//                   Aether Financial
//                 </h3>
//                 <p className="text-on-surface-variant">
//                   Fintech • UI/UX Design
//                 </p>
//               </div>

//               <span className="p-3 rounded-full border border-slate-200 group-hover:bg-accent group-hover:text-white transition-colors">
//                 <span className="material-symbols-outlined">
//                   north_east
//                 </span>
//               </span>
//             </div>
//           </div>

//           {/* Project 2 (Staggered) */}
//           <div className="group cursor-pointer pt-0 lg:pt-24">
//             <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200">
              
//               <img
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpByDNBEOnWR8COm7yM0aR3Z1WXaJ7w6LSl2r8UuYiF-kHcBDeXcApzETdXnPAeIXHx1LgRC7OWhOVI-o7-GoEW7-5KX3--k5bSGCwsCKn6GTuh9rKoz27yUDwLfdLuXkxUJ4p2P5rWxJ5welHXrh9fep8ttu4K7VvxBIK9bpXuR3dYWItsamMaZdlml7bOcoMmzK2ALpwCWXLGSxQePEwzl46NYhPyFczun7wDEwTv7Ju78xkH4zOyVXYGOGq01_DTqxob5oRMcN"
//                 alt="Luxury E-commerce"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//             </div>

//             {/* Content */}
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-2xl font-bold font-headline mb-2 text-primary">
//                   Nocturne Jewelry
//                 </h3>
//                 <p className="text-on-surface-variant">
//                   E-commerce • WebGL
//                 </p>
//               </div>

//               <span className="p-3 rounded-full border border-slate-200 group-hover:bg-accent group-hover:text-white transition-colors">
//                 <span className="material-symbols-outlined">
//                   north_east
//                 </span>
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

export default function Work() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          
          <div className="max-w-xl">
            <h2 className="font-headline font-bold text-5xl text-[#1A2B3C] mb-6">
              Latest Work
            </h2>

            <p className="text-slate-600 text-lg">
              A selection of premium digital artifacts we've crafted for visionary clients across the globe.
            </p>
          </div>

          {/* LINK */}
          <a
            href="#"
            className="group flex items-center gap-2 text-[#0050cc] font-semibold hover:gap-4 transition-all duration-300"
          >
            View Full Portfolio
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* PROJECT 1 */}
          <div className="group cursor-pointer">
            
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200 shadow-sm">
              
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUM2jIxDhIhQPDh_0lV7rHWd_Hr04OBwmDlNyavVW-RaRy01L_312u99k_z671FMOyXGvGFNtN8-sElplCYdjDWhy7cYGag-G-AuRwf_q9EDBYuv-5Y_qzxqVSWRTF36yqcDJceHW7fqJtGDLygqhy82ql-UCatXniC5N0j2jJOuejURMCRPhHl_0DYC1BXQKlbuuz3Afl95ZnIClN9P1rI91Sx8bzmDX1xpzRTpkE-roLiCcwkW-LIrhnGWYnoBPMCm8_rZikr9Ww"
                alt="Fintech App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#0050cc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* CONTENT */}
            <div className="flex justify-between items-start">
              
              <div>
                <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-2">
                  Aether Financial
                </h3>

                <p className="text-slate-600 text-sm">
                  Fintech • UI/UX Design
                </p>
              </div>

              {/* ICON BUTTON */}
              <span className="p-3 rounded-full border border-slate-200 transition-all duration-300 group-hover:bg-[#0050cc] group-hover:text-white">
                <span className="material-symbols-outlined">
                  north_east
                </span>
              </span>
            </div>
          </div>

          {/* PROJECT 2 (OFFSET) */}
          <div className="group cursor-pointer pt-0 lg:pt-24">
            
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200 shadow-sm">
              
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpByDNBEOnWR8COm7yM0aR3Z1WXaJ7w6LSl2r8UuYiF-kHcBDeXcApzETdXnPAeIXHx1LgRC7OWhOVI-o7-GoEW7-5KX3--k5bSGCwsCKn6GTuh9rKoz27yUDwLfdLuXkxUJ4p2P5rWxJ5welHXrh9fep8ttu4K7VvxBIK9bpXuR3dYWItsamMaZdlml7bOcoMmzK2ALpwCWXLGSxQePEwzl46NYhPyFczun7wDEwTv7Ju78xkH4zOyVXYGOGq01_DTqxob5oRMcN"
                alt="Luxury E-commerce"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#0050cc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* CONTENT */}
            <div className="flex justify-between items-start">
              
              <div>
                <h3 className="text-2xl font-bold font-headline text-[#1A2B3C] mb-2">
                  Nocturne Jewelry
                </h3>

                <p className="text-slate-600 text-sm">
                  E-commerce • WebGL
                </p>
              </div>

              {/* ICON BUTTON */}
              <span className="p-3 rounded-full border border-slate-200 transition-all duration-300 group-hover:bg-[#0050cc] group-hover:text-white">
                <span className="material-symbols-outlined">
                  north_east
                </span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}