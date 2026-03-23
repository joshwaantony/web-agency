



"use client";

export default function PortfolioGrid() {
  return (
    <section className="max-w-7xl mx-auto 
    px-4 sm:px-6 md:px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

        {/* ===================== */}
        {/* PROJECT 1 (BIG LEFT) */}
        {/* ===================== */}
        <div className="md:col-span-8 group">
          <div className="bg-[#f8fafc] rounded-2xl overflow-hidden relative border border-[#e2e8f0] transition-all duration-500 hover:shadow-xl hover:shadow-[#0050cc]/5">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzUhaGu7jF5RAj4um3huvdrHLUPRDO5xVPTSgXd-FktUbv2qSt6BlJvdEP8l48CgMI3JXMxHTZxYEPsFAqhH1JOwaqWYqsxvAlP3iGdY4BUnmZIzLLwjKu1CK0_-nJXAaTSs7vMKP-bDtE3uoDT_cKCwWIfS0sp6PUNpa4l5AmIONxs-j283fa0d-ATPjOanAs5MIbqeUWz6QmI793tSf4RjKTd7TJ9eiw1OG0C9yDQe6nvtrkR0o94LNRMeu1M87p5j9VWkHWYgT5"
              alt="Aether Finance"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041627]/90 via-[#041627]/20 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-10 w-full">
              <div className="flex justify-between items-end">

                <div>
                  <span className="text-[#e0eaff] bg-[#0050cc]/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-3 inline-block">
                    Web Application
                  </span>

                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-headline font-bold text-white mb-2 md:mb-4">
                    Aether Finance Hub
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                    A high-fidelity dashboard for decentralized finance monitoring.
                  </p>
                </div>

                <button className="bg-white text-[#041627] p-2 sm:p-3 md:p-4 rounded-full hover:bg-[#0050cc] hover:text-white transition-all shadow-lg">
                  <span className="material-symbols-outlined text-sm md:text-base">
                    arrow_outward
                  </span>
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* ===================== */}
        {/* PROJECT 2 */}
        {/* ===================== */}
        <div className="md:col-span-4 group">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-xl">
            
            <div className="h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5obppd60jKIReTC0UPa5rV55FLJBw_OIyRSevpfWU8JoprCqoLVqm4fUWAIdjgXQ5pxwXK2yxOAdoA7LhMVaDQobobRKzVlJWQC7345_UIUy72mgGq4-TrGBYsd_I8d5pIquw3Cn2tN12SD6Ungdzk7e6zFAKiTwHUc5P3w6YXlgPtkQ-MyxN_23z2ghZHqQGUHStw4U4ZJvoMJkGIXMy1FZVimrcK9XykbpX0MCc25ikMS-pyFZCqgZlXDzMJiyl7NDazibUHhp7"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
              <span className="text-[#0050cc] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2">
                Mobile Design
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-[#0f172a] mb-3 md:mb-4">
                Vivid Portfolio App
              </h3>

              <p className="text-[#64748b] text-xs sm:text-sm mb-6 md:mb-8 flex-grow">
                Interactive portfolio browser for independent artists.
              </p>

              <button className="w-full py-3 md:py-4 border border-[#e2e8f0] rounded-lg font-headline font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#f8fafc]">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* PROJECT 3 */}
        {/* ===================== */}
        <div className="md:col-span-4 group">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-xl">
            
            <div className="h-56 sm:h-64 md:h-80 overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpacHTLXeG8vSrjp51KVizIUs5NQs29jWDoTQnaiCZ6lYJ9PCxTpQCZW8mxgpQkbRuHSr-gJepQSKuk3D-_mn1Limj87daOcltK7VY7uf7U41VRDAz4CmbnQJcLziQ98r2KhNBOk4TFiOVwsADMkjRqdf3JCIg4ZtAW7ECkclMcC9w3rpDmqBfGUVVMVUU5wbufGVXxv9iaAn7N_Y7Mo-UgRFHlQK8nqWpmhr3v8nPD30SzYJrubnOgfCqOrQOQn6X9Iwy0dX9nFwe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <span className="text-[#0050cc] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2">
                Branding & Web
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-[#0f172a] mb-3 md:mb-4">
                Circuit Labs
              </h3>

              <p className="text-[#64748b] text-xs sm:text-sm mb-6 md:mb-8">
                Visual identity and e-commerce platform.
              </p>

              <button className="w-full py-3 md:py-4 border border-[#e2e8f0] rounded-lg font-headline font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#f8fafc]">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* PROJECT 4 (BIG RIGHT) */}
        {/* ===================== */}
        <div className="md:col-span-8 group">
          <div className="bg-[#f8fafc] rounded-2xl overflow-hidden relative border border-[#e2e8f0] transition-all duration-500 hover:shadow-xl hover:shadow-[#0050cc]/5">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5nvvVrJeokGf0sZ17rbuteY8idBxdGB-7AL35p-YmqlP4UDiDrGVkUfnE0gpWGUEeNQvDpe58a9FG9c1m9rCsIelvLjwhVJskYCQAK9ZRQhcbih3sMWS5p_wlbWEwTTtenjt4QIy6AZ7Egd5hYdnhwZ1A9TvbUMgxZOGrsvy-7AyuGQmlRQ-pbnCHtk1z9oLj8w3sx1gJNIpy4h7YC1juVTAyoeqZNL7zEevG9KDlik6nNGHyZcbexmp480gApZ_5Y3iuSutml6vb"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover group-hover:scale-[1.01] transition"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#041627]/80 via-[#041627]/20 to-transparent" />

            <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              
              <span className="text-white bg-white/10 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 w-fit">
                Experimental Design
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-white mb-4 md:mb-6">
                Spatial <br /> Interiors VR
              </h3>

              <p className="text-slate-200 text-xs sm:text-sm max-w-xs mb-4 md:mb-8">
                Virtual reality walkthroughs for luxury architectural firm.
              </p>

              <button className="bg-[#0050cc] text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold flex items-center gap-2 md:gap-3 hover:-translate-y-1 transition text-xs sm:text-sm">
                Full Case Study
                <span className="material-symbols-outlined text-xs sm:text-sm">
                  trending_flat
                </span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}