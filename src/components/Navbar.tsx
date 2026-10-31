"use client";

import { useState } from "react";
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
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function Navbar({ gym, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 sticky top-0 z-40 transition-all">
      {/* Clean Top Contact Bar */}
      <div className="bg-black/90 text-zinc-400 text-xs py-2 px-4 hidden md:block border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{gym.address}</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{gym.hours.general}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-400 font-medium transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>জিম হেল্পলাইন: {gym.phone}</span>
            </a>
            <span className="text-zinc-800">|</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {gym.specialHighlight}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/20 transition group-hover:scale-105 shrink-0">
            <Dumbbell className="w-5 h-5 text-black" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight leading-snug group-hover:text-amber-400 transition-colors truncate max-w-[200px] xs:max-w-[260px] sm:max-w-sm md:max-w-md">
              {gym.name}
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-400 font-medium truncate">
              {gym.area} • {gym.category}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-300">
          <a href="#packages" className="hover:text-amber-400 transition">
            প্যাকেজ ও অফার
          </a>
          <a href="#facilities" className="hover:text-amber-400 transition">
            ইকুইপমেন্ট ও সুবিধা
          </a>
          <a href="#trainers" className="hover:text-amber-400 transition">
            মাস্টার ট্রেইনার্স
          </a>
          <a href="#gallery" className="hover:text-amber-400 transition">
            জিম চিত্রশালা
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition">
            সদস্যদের মতামত
          </a>
          <a href="#location" className="hover:text-amber-400 transition">
            লোকেশন ও সময়সূচি
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
              `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ / ফ্রি ট্রায়াল সেশনের জন্য যোগাযোগ করছি।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 text-xs font-bold border border-emerald-500/40 transition shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs transition cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-black" />
            <span>ফ্রি ট্রায়াল নিন</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-3 shadow-2xl animate-slide-up">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-zinc-300">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              প্যাকেজ ও মেম্বারশিপ ফি
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              ইকুইপমেন্ট ও সুবিধাসমূহ
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              সার্টিফাইড ট্রেইনার্স
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              জিম ফ্লোর চিত্রশালা
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              মেম্বারদের রিভিউ ও ট্রান্সফর্মেশন
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-zinc-800 hover:text-amber-400 rounded-xl"
            >
              ঠিকানা ও শিফট টাইম
            </a>
          </nav>

          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs shadow-md"
            >
              <Flame className="w-4 h-4 text-black" />
              <span>১ দিনের ফ্রি ট্রায়াল বুক করুন</span>
            </button>
            <a
              href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${gym.name}-এ মেম্বারশিপ সংক্রান্ত তথ্যের জন্য কথা বলতে চাচ্ছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-emerald-400 font-bold text-xs border border-zinc-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>হোয়াটসঅ্যাপে সরাসরি চ্যাট</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
