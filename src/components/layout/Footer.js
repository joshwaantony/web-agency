




"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#041627]">
      
      <div
        className="max-w-7xl mx-auto 
        px-4 sm:px-6 md:px-8 
        py-8 sm:py-10 md:py-12 
        flex flex-col md:flex-row 
        items-center md:items-start 
        justify-between 
        gap-6 md:gap-8"
      >
        
        {/* LEFT - LOGO */}
        <div className="text-white font-headline font-semibold 
        text-base sm:text-lg text-center md:text-left">
          FreelancePro
        </div>

        {/* CENTER - LINKS */}
        <div
          className="flex flex-wrap justify-center md:justify-center 
          gap-4 sm:gap-6 md:gap-8 
          text-xs sm:text-sm"
        >
          
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>

        </div>

        {/* RIGHT - COPYRIGHT */}
        <div
          className="text-slate-400 
          text-xs sm:text-sm 
          text-center md:text-right"
        >
          © 2024 FreelancePro Agency. All rights reserved.
        </div>

      </div>
    </footer>
  );
}