// "use client";

// export default function Testimonials() {
//   return (
//     <section className="py-24 px-8 bg-slate-50 overflow-hidden relative border-y border-slate-100">
//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="font-headline font-bold text-4xl text-primary">
//             Client Voices
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Card 1 */}
//           <div className="p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            
//             {/* Stars */}
//             <div className="flex gap-1 text-accent mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="material-symbols-outlined"
//                   style={{ fontVariationSettings: "'FILL' 1" }}
//                 >
//                   star
//                 </span>
//               ))}
//             </div>

//             <p className="text-lg text-on-surface-variant italic leading-relaxed mb-8">
//               "Luminous Agency completely redefined our brand identity. The attention to atmospheric detail is something we haven't found anywhere else. Truly elite."
//             </p>

//             {/* Profile */}
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-accent font-bold">
//                 MT
//               </div>
//               <div>
//                 <p className="font-bold text-primary">Marcus Thorne</p>
//                 <p className="text-sm text-on-surface-variant">
//                   CEO, Thorne Digital
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Card 2 (Highlighted) */}
//           <div className="p-10 bg-white rounded-2xl border-2 border-accent/20 shadow-lg scale-105 relative z-10">
            
//             {/* Stars */}
//             <div className="flex gap-1 text-accent mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="material-symbols-outlined"
//                   style={{ fontVariationSettings: "'FILL' 1" }}
//                 >
//                   star
//                 </span>
//               ))}
//             </div>

//             <p className="text-lg text-on-surface-variant italic leading-relaxed mb-8">
//               "They don't just build sites; they build digital experiences that breathe. Our conversion rates spiked 40% after the relaunch. It's magic."
//             </p>

//             {/* Profile */}
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-accent font-bold">
//                 EV
//               </div>
//               <div>
//                 <p className="font-bold text-primary">Elena Vance</p>
//                 <p className="text-sm text-on-surface-variant">
//                   Founder, Void Aesthetics
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Card 3 */}
//           <div className="p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            
//             {/* Stars */}
//             <div className="flex gap-1 text-accent mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="material-symbols-outlined"
//                   style={{ fontVariationSettings: "'FILL' 1" }}
//                 >
//                   star
//                 </span>
//               ))}
//             </div>

//             <p className="text-lg text-on-surface-variant italic leading-relaxed mb-8">
//               "The process was seamless and the result exceeded our wildest expectations. The motion work alone is worth every penny."
//             </p>

//             {/* Profile */}
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-accent font-bold">
//                 JK
//               </div>
//               <div>
//                 <p className="font-bold text-primary">Julian Klay</p>
//                 <p className="text-sm text-on-surface-variant">
//                   Design Lead, Apex Tech
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl text-[#1A2B3C]">
            Client Voices
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#0050cc] mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 italic leading-relaxed mb-8">
              "Luminous Agency completely redefined our brand identity. The attention to atmospheric detail is something we haven't found anywhere else. Truly elite."
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1A2B3C] font-bold text-sm">
                MT
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C]">
                  Marcus Thorne
                </p>
                <p className="text-sm text-slate-500">
                  CEO, Thorne Digital
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div className="p-10 bg-white rounded-2xl border border-[#0050cc]/30 shadow-lg scale-105">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#0050cc] mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 italic leading-relaxed mb-8">
              "They don't just build sites; they build digital experiences that breathe. Our conversion rates spiked 40% after the relaunch. It's magic."
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0050cc] font-bold text-sm">
                EV
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C]">
                  Elena Vance
                </p>
                <p className="text-sm text-slate-500">
                  Founder, Void Aesthetics
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#0050cc] mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  star
                </span>
              ))}
            </div>

            <p className="text-slate-600 italic leading-relaxed mb-8">
              "The process was seamless and the result exceeded our wildest expectations. The motion work alone is worth every penny."
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1A2B3C] font-bold text-sm">
                JK
              </div>

              <div>
                <p className="font-semibold text-[#1A2B3C]">
                  Julian Klay
                </p>
                <p className="text-sm text-slate-500">
                  Design Lead, Apex Tech
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}