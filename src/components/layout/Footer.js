// "use client";

// export default function Footer() {
//   return (
//     <footer className="w-full mt-auto bg-[#041627]">
//       <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto">
        
//         {/* Logo / Brand */}
//         <div className="text-lg font-bold text-white mb-4 md:mb-0 font-headline">
//           FreelancePro
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap justify-center gap-8 mb-4 md:mb-0">
//           <a
//             href="#"
//             className="text-sm text-slate-400 hover:text-white transition-colors"
//           >
//             Privacy Policy
//           </a>

//           <a
//             href="#"
//             className="text-sm text-slate-400 hover:text-white transition-colors"
//           >
//             Terms of Service
//           </a>

//           <a
//             href="#"
//             className="text-sm text-slate-400 hover:text-white transition-colors"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="#"
//             className="text-sm text-slate-400 hover:text-white transition-colors"
//           >
//             Twitter
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="text-sm text-slate-400 text-center md:text-right">
//           © 2024 FreelancePro Agency. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#041627]">
      
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT - LOGO */}
        <div className="text-white font-headline font-semibold text-lg">
          FreelancePro
        </div>

        {/* CENTER - LINKS */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          
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
        <div className="text-slate-400 text-sm text-center md:text-right">
          © 2024 FreelancePro Agency. All rights reserved.
        </div>

      </div>
    </footer>
  );
}