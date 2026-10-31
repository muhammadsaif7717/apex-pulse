"use client";

import { GymClub } from "@/data/gyms";
import { Phone, Flame } from "lucide-react";

interface FloatingCtaProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function FloatingCta({ gym, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/90 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs active:scale-95 transition shadow-xs border border-zinc-700"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>কল করুন</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xs shadow-lg shadow-amber-500/20 active:scale-95 transition cursor-pointer"
        >
          <Flame className="w-4 h-4 text-black" />
          <span>ফ্রি ট্রায়াল নিন</span>
        </button>
      </div>
    </div>
  );
}

