
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `font-headline font-semibold text-sm tracking-tight pb-1 transition-colors ${
      pathname === path
        ? "text-[#0050cc] border-b-2 border-[#0050cc]"
        : "text-slate-600 hover:text-[#041627]"
    }`;

  const mobileLinkClass = (path) =>
    `block text-base font-semibold py-3 ${
      pathname === path ? "text-[#0050cc]" : "text-[#0f172a]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-8 h-16 max-w-7xl mx-auto">
          
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold text-[#041627] tracking-tighter font-headline"
          >
            Luminous Agency
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/home" className={linkClass("/home")}>Home</Link>
            <Link href="/services" className={linkClass("/services")}>Services</Link>
            <Link href="/portfolio" className={linkClass("/portfolio")}>Portfolio</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>

          {/* CTA (HIDE ON SMALL) */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-[#0050cc] text-white px-6 py-2 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Get Started
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#041627]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          
          {/* HEADER */}
          <div className="flex justify-between items-center px-6 h-16 border-b">
            <span className="font-bold text-[#041627]">Menu</span>

            <button onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* LINKS */}
          <div className="px-6 py-6 flex flex-col">
            <Link href="/home" className={mobileLinkClass("/home")} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className={mobileLinkClass("/services")} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/portfolio" className={mobileLinkClass("/portfolio")} onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="/about" className={mobileLinkClass("/about")} onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className={mobileLinkClass("/contact")} onClick={() => setOpen(false)}>Contact</Link>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 bg-[#0050cc] text-white text-center py-3 rounded-md font-semibold"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}