"use client";

export default function AboutHero() {
  return (
    <section className="pt-40 pb-24 px-8 bg-white border-b border-[#e2e8f0] relative overflow-hidden">
      
      {/* GRID BACKGROUND (exact match) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          
          {/* SMALL LABEL */}
          <p className="text-[#0050cc] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Our Story
          </p>

          {/* HEADING */}
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight text-[#0f172a] mb-8">
            Crafting the{" "}
            <span className="text-[#0050cc]">standard</span>{" "}
            of digital excellence.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#475569] text-lg md:text-xl leading-relaxed max-w-2xl">
            Luminous Agency is a multidisciplinary creative partner. We bridge the gap between high-end aesthetics and technical precision, building digital experiences that define industries.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-5">
          <div className="bg-white p-2 rounded-xl shadow-xl border border-[#e2e8f0]">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwg8Yp5Um7IaJNoAJbuNHQnFYjEibjRx08HOFTGSqEUM2aWfpri6U2ylrr3jsvfH6fDy1vWBR3S5Gq5oP0s-p-DF6fNjVubezsFCJli5KYrYBiWo9aLHdpz8pjAHaRW5pruLb609DP4F59AcfUJ2MX0LNgIx-g8vKo8crvfJCXmm_-3lv3geLHvBelZiqIzhrub800VmmkqDX-pBfhy9uqSXyHjb6xCDVtr4AE-vj5GXgWdrKCx_jnsjul5sg_ZjgHTG2HgvDn9Oz"
              alt="Team working"
              className="w-full h-full object-cover rounded-lg aspect-[4/3]"
            />

          </div>
        </div>

      </div>
    </section>
  );
}