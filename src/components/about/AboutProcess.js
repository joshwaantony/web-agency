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
    <section className="py-24 px-8 bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-headline font-bold text-[#0f172a] mb-4">
            The Strategic Framework
          </h2>
          <div className="h-1.5 w-16 bg-[#0050cc] mx-auto rounded-full"></div>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* TOP NUMBER + LINE */}
              <div className="flex items-center mb-6">
                
                {/* NUMBER BOX */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold ${
                    index === 3 ? "bg-[#0050cc]" : "bg-[#041627]"
                  }`}
                >
                  0{index + 1}
                </div>

                {/* CONNECTOR LINE */}
                {index !== 3 && (
                  <div className="h-[2px] flex-grow bg-[#e2e8f0] ml-4"></div>
                )}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-3">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#475569] text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}