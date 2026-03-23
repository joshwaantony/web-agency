



"use client";

export default function ContactForm() {
  return (
    <section className="
    bg-white border border-[#e2e8f0] 
    rounded-lg md:rounded-xl 
    p-4 sm:p-6 md:p-8 lg:p-12 
    shadow-sm
    ">
      
      <form className="space-y-6 sm:space-y-8">

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* NAME */}
          <div className="flex flex-col space-y-1.5 sm:space-y-2">
            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#475569]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
              bg-[#f8fafc] border border-[#e2e8f0] 
              rounded-md md:rounded-lg 
              px-3 sm:px-4 
              py-2.5 sm:py-3 md:py-4 
              text-sm sm:text-base 
              text-[#0f172a]
              focus:ring-2 focus:ring-[#0050cc] focus:border-transparent 
              transition-all outline-none
              "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col space-y-1.5 sm:space-y-2">
            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#475569]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="
              bg-[#f8fafc] border border-[#e2e8f0] 
              rounded-md md:rounded-lg 
              px-3 sm:px-4 
              py-2.5 sm:py-3 md:py-4 
              text-sm sm:text-base 
              text-[#0f172a]
              focus:ring-2 focus:ring-[#0050cc] focus:border-transparent 
              transition-all outline-none
              "
            />
          </div>

        </div>

        {/* SUBJECT */}
        <div className="flex flex-col space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#475569]">
            Subject
          </label>

          <select
            className="
            bg-[#f8fafc] border border-[#e2e8f0] 
            rounded-md md:rounded-lg 
            px-3 sm:px-4 
            py-2.5 sm:py-3 md:py-4 
            text-sm sm:text-base 
            text-[#0f172a]
            focus:ring-2 focus:ring-[#0050cc] focus:border-transparent 
            transition-all outline-none appearance-none
            "
          >
            <option>Branding & Identity</option>
            <option>Web Development</option>
            <option>Creative Strategy</option>
            <option>Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col space-y-1.5 sm:space-y-2">
          <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#475569]">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="
            bg-[#f8fafc] border border-[#e2e8f0] 
            rounded-md md:rounded-lg 
            px-3 sm:px-4 
            py-3 sm:py-4 
            text-sm sm:text-base 
            text-[#0f172a]
            focus:ring-2 focus:ring-[#0050cc] focus:border-transparent 
            transition-all outline-none resize-none
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
          w-full 
          bg-[#0050cc] hover:bg-[#003d99] 
          py-3 sm:py-3.5 md:py-4 
          rounded-md md:rounded-lg 
          font-headline font-bold 
          text-xs sm:text-sm md:text-base 
          text-white 
          uppercase tracking-widest 
          transition-all duration-200 
          shadow-lg shadow-[#0050cc]/10 
          active:scale-[0.98]
          "
        >
          Send Message
        </button>

      </form>
    </section>
  );
}