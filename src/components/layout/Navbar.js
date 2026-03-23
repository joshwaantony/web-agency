


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `font-headline font-semibold text-sm tracking-tight pb-1 transition-colors ${
      pathname === path
        ? "text-[#0050cc] border-b-2 border-[#0050cc]"
        : "text-slate-600 hover:text-[#041627]"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 h-16 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[#041627] tracking-tighter font-headline"
        >
          Luminous Agency
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          
          <Link href="/home" className={linkClass("/home")}>
            Home
          </Link>

          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>

          <Link href="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-[#0050cc] text-white px-6 py-2 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          Get Started
        </Link>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button className="text-[#041627]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}