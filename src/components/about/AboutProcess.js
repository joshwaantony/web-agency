


"use client";

export default function AboutProcess() {
  const steps = [
    {
      title: "Discovery",
      desc: "Deep research and understanding of business goals, user behavior, and technical requirements.",
    },
    {
      title: "Architecture",
      desc: "Designing scalable systems and intuitive structures that align with long-term growth.",
    },
    {
      title: "Execution",
      desc: "Building high-performance digital products with precision and modern technologies.",
    },
    {
      title: "Optimization",
      desc: "Continuous refinement through analytics, testing, and performance improvements.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 
    px-4 sm:px-6 md:px-8 bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 
          font-headline font-bold text-[#0f172a] mb-3 md:mb-4">
            The Strategic Framework
          </h2>

          <div className="h-1 w-12 md:h-1.5 md:w-16 bg-[#0050cc] mx-auto rounded-full"></div>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-6 sm:gap-8 md:gap-10">
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* TOP NUMBER + LINE */}
              <div className="flex items-center mb-4 md:mb-6">
                
                {/* NUMBER */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
                  flex items-center justify-center 
                  rounded-md md:rounded-lg 
                  text-white font-bold text-sm md:text-base ${
                    index === 3 ? "bg-[#0050cc]" : "bg-[#041627]"
                  }`}
                >
                  0{index + 1}
                </div>

                {/* CONNECTOR LINE (only desktop) */}
                {index !== 3 && (
                  <div className="hidden lg:block h-[2px] flex-grow bg-[#e2e8f0] ml-4"></div>
                )}
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg 
              font-headline font-bold text-[#0f172a] mb-2 md:mb-3">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#475569] 
              text-xs sm:text-sm 
              leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}