"use client";

import { GymClub } from "@/data/gyms";
import { Phone, MapPin, Clock, MessageCircle, Dumbbell, Flame } from "lucide-react";

interface FooterProps {
  gym: GymClub;
  onOpenBooking: () => void;
  isClientMode?: boolean;
}

export default function Footer({ gym, onOpenBooking, isClientMode }: FooterProps) {
  return (
    <footer className="bg-black text-zinc-300 pt-12 sm:pt-14 pb-28 sm:pb-24 md:pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
          {/* Gym Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 text-black flex items-center justify-center font-bold">
                <Dumbbell className="w-4 h-4 text-black" />
              </div>
              <span className="text-base font-black text-white">{gym.name}</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {gym.bengaliTagline}। আন্তর্জাতিক গ্রেড মেশিনারি ও সার্টিফাইড ট্রেইনারদের সরাসরি পরিচর্যায় সুস্থ ও আত্মবিশ্বাসী জীবনের বিশ্বস্ত ঠিকানা।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>
                <a href="#packages" className="hover:text-amber-400 transition">
                  প্যাকেজ ও মেম্বারশিপ ফি
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition">
                  ইকুইপমেন্ট ও সুবিধাসমূহ
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-amber-400 transition">
                  সার্টিফাইড মাস্টার ট্রেইনার্স
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition">
                  জিম ফ্লোর চিত্রশালা
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition">
                  মেম্বারদের রিভিউ ও ফলাফল
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition">
                  ঠিকানা ও শিফট সময়সূচি
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ঠিকানা ও হেল্পলাইন
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{gym.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{gym.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{gym.hours.general}</span>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ১ দিনের ফ্রি গেস্ট পাস
            </h4>
            <p className="text-xs text-zinc-400">
              ভর্তির পূর্বে কোনো প্রকার পেমেন্ট ছাড়াই সরাসরি জিম ফ্লোর ট্রায়াল দিয়ে দেখুন।
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 text-black" />
              <span>ফ্রি ট্রায়াল বুক করুন</span>
            </button>
            <a
              href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${gym.name}-এ যোগাযোগ করতে চাচ্ছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs transition flex items-center justify-center gap-1.5 border border-zinc-700"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp হেল্পলাইন</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {gym.name}. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-zinc-500">
            প্রিমিয়াম ফিটনেস ক্লাব ও বডি ট্রান্সফর্মেশন হাব
          </p>
        </div>
      </div>
    </footer>
  );
}

