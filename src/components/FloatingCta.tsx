"use client";

import { GymClub } from "@/data/gyms";
import { Phone, Flame } from "lucide-react";

interface FloatingCtaProps {
  gym: GymClub;
  onOpenBooking: () => void;
}

export default function FloatingCta({ gym, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${gym.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs active:scale-[0.98] transition-all border border-zinc-700 min-h-[44px]"
          aria-label={`কল করুন ${gym.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>সরাসরি কল</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-xs shadow-xs active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
        >
          <Flame className="w-4 h-4 text-zinc-950" />
          <span>ফ্রি ট্রায়াল পাস</span>
        </button>
      </div>
    </div>
  );
}
