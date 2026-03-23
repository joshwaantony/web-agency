// "use client";

// export default function CTA() {
//   return (
//     <section className="py-32 px-8 text-center bg-white relative">
      
//       {/* Background Layer */}
//       <div className="absolute inset-0 bg-slate-50 -z-10"></div>

//       <div className="max-w-4xl mx-auto">
        
//         {/* Heading */}
//         <h2 className="font-headline font-bold text-5xl md:text-6xl mb-8 tracking-tighter text-primary">
//           Ready to elevate your{" "}
//           <span className="text-accent">presence?</span>
//         </h2>

//         {/* Subtext */}
//         <p className="text-on-surface-variant text-xl mb-12">
//           Limited availability for Q4 2024 projects. Let's discuss your vision.
//         </p>

//         {/* Button */}
//         <button className="px-12 py-6 bg-accent text-white rounded-lg font-bold text-2xl hover:opacity-90 transition-all shadow-xl shadow-accent/10">
//           Book a Strategy Call
//         </button>

//       </div>
//     </section>
//   );
// }


"use client";

export default function CTA() {
  return (
    <section className="py-32 px-8 text-center bg-white relative">
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* HEADING */}
        <h2 className="font-headline font-bold text-5xl md:text-6xl tracking-tight text-[#1A2B3C] mb-8">
          Ready to elevate your{" "}
          <span className="text-[#0050cc]">presence?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-slate-600 text-lg mb-12">
          Limited availability for Q4 2024 projects. Let's discuss your vision.
        </p>

        {/* BUTTON */}
        <button className="px-10 py-5 bg-[#0050cc] text-white font-semibold text-lg rounded-lg 
        shadow-[0_10px_30px_rgba(0,80,204,0.25)] 
        hover:bg-[#003ea6] 
        hover:shadow-[0_12px_35px_rgba(0,80,204,0.35)]
        transition-all duration-300">
          Book a Strategy Call
        </button>

      </div>
    </section>
  );
}