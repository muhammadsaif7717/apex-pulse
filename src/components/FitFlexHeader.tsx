"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import { FITFLEX_INFO } from "@/data/fitnessData";

export default function FitFlexHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setClassesDropdownOpen(false);
    setBlogDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#222222]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
          : "bg-[#222222]/80 backdrop-blur-sm border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="ApexPulse Home"
        >
          <div className="w-10 h-10 bg-[#f2fd84] text-[#222222] flex items-center justify-center font-extrabold text-lg transition-transform group-hover:scale-105">
            <Zap className="w-6 h-6 fill-[#222222] stroke-[#222222]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase font-[family-name:var(--heading-font)]">
              APEX<span className="text-[#f2fd84]">PULSE</span>
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase font-medium -mt-1 hidden sm:block">
              Fitness Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/80 font-[family-name:var(--heading-font)]">
          <Link
            href="/"
            className={`transition-colors hover:text-[#f2fd84] ${
              pathname === "/" ? "text-[#f2fd84]" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition-colors hover:text-[#f2fd84] ${
              pathname === "/about" ? "text-[#f2fd84]" : ""
            }`}
          >
            About Us
          </Link>

          {/* Classes Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setClassesDropdownOpen(true)}
            onMouseLeave={() => setClassesDropdownOpen(false)}
          >
            <Link
              href="/classes"
              className={`flex items-center gap-1 transition-colors hover:text-[#f2fd84] py-2 ${
                pathname.startsWith("/classes") ? "text-[#f2fd84]" : ""
              }`}
            >
              <span>Classes</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </Link>

            {classesDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#1e1e1e] border border-white/10 shadow-2xl py-2 flex flex-col z-50 animate-in fade-in duration-150">
                <Link
                  href="/classes"
                  className="px-4 py-2 text-xs text-white/80 hover:text-[#222222] hover:bg-[#f2fd84] transition-colors"
                >
                  All Classes
                </Link>
                <Link
                  href="/classes/fitfusion"
                  className="px-4 py-2 text-xs text-white/80 hover:text-[#222222] hover:bg-[#f2fd84] transition-colors"
                >
                  Class Details (FitFusion)
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBlogDropdownOpen(true)}
            onMouseLeave={() => setBlogDropdownOpen(false)}
          >
            <Link
              href="/blog"
              className={`flex items-center gap-1 transition-colors hover:text-[#f2fd84] py-2 ${
                pathname.startsWith("/blog") ? "text-[#f2fd84]" : ""
              }`}
            >
              <span>Blog</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </Link>

            {blogDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#1e1e1e] border border-white/10 shadow-2xl py-2 flex flex-col z-50 animate-in fade-in duration-150">
                <Link
                  href="/blog"
                  className="px-4 py-2 text-xs text-white/80 hover:text-[#222222] hover:bg-[#f2fd84] transition-colors"
                >
                  Blog Feed
                </Link>
                <Link
                  href="/blog/benefits-of-daily-exercise-for-mental-health"
                  className="px-4 py-2 text-xs text-white/80 hover:text-[#222222] hover:bg-[#f2fd84] transition-colors"
                >
                  Blog Details
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/timetable"
            className={`transition-colors hover:text-[#f2fd84] ${
              pathname === "/timetable" ? "text-[#f2fd84]" : ""
            }`}
          >
            Timetable
          </Link>
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="cs_btn_style_outline hidden sm:inline-flex text-xs px-6 py-2.5 h-11"
          >
            <span>CONTACT</span>
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#f2fd84]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] z-50 lg:hidden bg-black/85 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#222222] border-b border-white/10 p-6 flex flex-col gap-4 font-[family-name:var(--heading-font)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-base font-bold ${pathname === "/" ? "text-[#f2fd84]" : "text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-base font-bold ${pathname === "/about" ? "text-[#f2fd84]" : "text-white"}`}
            >
              About Us
            </Link>
            <div className="flex flex-col pl-2 border-l border-white/10 space-y-2">
              <Link
                href="/classes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/90 font-semibold"
              >
                Classes
              </Link>
              <Link
                href="/classes/fitfusion"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-white/60 hover:text-[#f2fd84]"
              >
                — Class Details (FitFusion)
              </Link>
            </div>
            <div className="flex flex-col pl-2 border-l border-white/10 space-y-2">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/90 font-semibold"
              >
                Blog
              </Link>
              <Link
                href="/blog/benefits-of-daily-exercise-for-mental-health"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-white/60 hover:text-[#f2fd84]"
              >
                — Blog Details
              </Link>
            </div>
            <Link
              href="/timetable"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-base font-bold ${pathname === "/timetable" ? "text-[#f2fd84]" : "text-white"}`}
            >
              Timetable
            </Link>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cs_btn_style_1 w-full text-center flex items-center justify-center text-xs"
              >
                CONTACT US NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

