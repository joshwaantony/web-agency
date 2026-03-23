


"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden 
    pt-24 sm:pt-28 md:pt-32 lg:pt-40 
    pb-12 sm:pb-16 md:pb-20 lg:pb-24 
    px-4 sm:px-6 md:px-8 
    bg-white border-b border-[#e2e8f0]">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 
      bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] 
      [background-size:20px_20px] md:[background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto 
      grid grid-cols-1 lg:grid-cols-12 
      gap-10 md:gap-14 lg:gap-16 
      items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-7 text-center lg:text-left">
          
          {/* LABEL */}
          <p className="text-[#0050cc] 
          text-[10px] sm:text-xs 
          font-semibold tracking-[0.2em] md:tracking-[0.25em] 
          uppercase mb-4 md:mb-6">
            Our Story
          </p>

          {/* HEADING */}
          <h1 className="font-headline font-extrabold 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          leading-tight text-[#0f172a] mb-4 md:mb-6 lg:mb-8">
            
            Crafting the{" "}
            <span className="text-[#0050cc]">standard</span>{" "}
            of digital excellence.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#475569] 
          text-sm sm:text-base md:text-lg lg:text-xl 
          leading-relaxed 
          max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 
          mx-auto lg:mx-0">
            
            Luminous Agency is a multidisciplinary creative partner. 
            We bridge the gap between high-end aesthetics and technical precision, 
            building digital experiences that define industries.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-5 mt-8 lg:mt-0">
          
          <div className="bg-white p-2 
          rounded-lg md:rounded-xl 
          shadow-lg md:shadow-xl 
          border border-[#e2e8f0]">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwg8Yp5Um7IaJNoAJbuNHQnFYjEibjRx08HOFTGSqEUM2aWfpri6U2ylrr3jsvfH6fDy1vWBR3S5Gq5oP0s-p-DF6fNjVubezsFCJli5KYrYBiWo9aLHdpz8pjAHaRW5pruLb609DP4F59AcfUJ2MX0LNgIx-g8vKo8crvfJCXmm_-3lv3geLHvBelZiqIzhrub800VmmkqDX-pBfhy9uqSXyHjb6xCDVtr4AE-vj5GXgWdrKCx_jnsjul5sg_ZjgHTG2HgvDn9Oz"
              alt="Team working"
              className="w-full h-full object-cover 
              rounded-md md:rounded-lg 
              aspect-[4/3]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}