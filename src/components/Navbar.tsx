"use client";

import { useState, useEffect } from "react";
import { GymClub } from "@/data/gyms";
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  MessageCircle,
  Menu,
  X,
  Dumbbell,
  Flame,
} from "lucide-react";

interface NavbarProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function Navbar({ gym, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 sticky top-0 z-40 transition-all">
      {/* Top Athletic Contact Bar */}
      <div className="bg-black text-zinc-400 text-xs py-2 px-4 hidden md:block border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate max-w-md">{gym.address}</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{gym.hours.general}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{gym.specialHighlight}</span>
            </span>
            <span className="text-zinc-800">|</span>
            <a
              href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-400 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>হেল্পলাইন: {gym.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-zinc-950 flex items-center justify-center font-black text-lg shadow-sm transition-transform group-hover:scale-105 shrink-0">
            <Dumbbell className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight leading-snug group-hover:text-amber-400 transition-colors truncate max-w-[200px] xs:max-w-[260px] sm:max-w-sm md:max-w-md">
              {gym.name}
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-400 font-semibold truncate">
              {gym.area} • {gym.category}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-300" aria-label="Main Navigation">
          <a
            href="#packages"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            প্যাকেজ ও অফার
          </a>
          <a
            href="#facilities"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            ইকুইপমেন্ট ও সুবিধা
          </a>
          <a
            href="#trainers"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            মাস্টার ট্রেইনার্স
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            জিম চিত্রশালা
          </a>
          <a
            href="#reviews"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            সদস্যদের মতামত
          </a>
          <a
            href="#location"
            className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            লোকেশন ও সময়সূচি
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
              `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ প্যাকেজ সম্পর্কে জানতে চাচ্ছি।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-zinc-950 text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 min-h-[44px] cursor-pointer"
          >
            <Flame className="w-4 h-4 text-zinc-950 shrink-0" />
            <span>ফ্রি ট্রায়াল পাস নিন</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-md px-4 py-5 space-y-4 animate-slide-up shadow-2xl">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-zinc-300">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              প্যাকেজ ও মেম্বারশিপ প্ল্যান
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              ইকুইপমেন্ট ও সুযোগ-সুবিধা
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              মাস্টার ট্রেইনার্স ও কোচ
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              জিম ফ্লোর চিত্রশালা
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              সদস্যদের মতামত ও রূপান্তর
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-zinc-800/80 hover:text-amber-400 transition-colors"
            >
              চেম্বারের লোকেশন ও সময়সূচি
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-zinc-950 font-bold text-sm shadow-xs transition-all min-h-[44px]"
            >
              <Flame className="w-4 h-4 text-zinc-950" />
              <span>১ দিনের ফ্রি ট্রায়াল পাস নিন</span>
            </button>

            <a
              href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ সম্পর্কে জানতে চাচ্ছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-semibold text-sm transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp এ সরাসরি কথা বলুন</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
