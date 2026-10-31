"use client";

import { useState } from "react";
import { GYM_CLUBS, GymClub } from "@/data/gyms";
import { Check, Copy, Sparkles, Eye, Dumbbell } from "lucide-react";

interface AgencyBarProps {
  currentGym: GymClub;
  onSelectGym: (id: string) => void;
  isClientMode: boolean;
}

export default function AgencyBar({
  currentGym,
  onSelectGym,
  isClientMode,
}: AgencyBarProps) {
  const [copied, setCopied] = useState(false);

  // If in client view mode, COMPLETELY HIDE the bar
  if (isClientMode) {
    return null;
  }

  const handleCopyCleanClientLink = () => {
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/?client=${currentGym.id}&view=client`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePreviewAsClient = () => {
    if (typeof window !== "undefined") {
      window.open(`/?client=${currentGym.id}&view=client`, "_blank");
    }
  };

  return (
    <aside
      aria-label="Agency Controls"
      className="bg-black/95 text-zinc-100 border-b border-zinc-800 sticky top-0 z-50 shadow-xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        {/* Left Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold text-amber-400 flex items-center gap-1.5 text-xs">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Gym Pitch Mode</span>
          </span>
          <span className="text-zinc-400 hidden lg:inline">
            • জিম সিলেক্ট করুন এবং ক্লায়েন্টের জন্য প্রিমিয়াম লিংক কপি করুন
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={currentGym.id}
            onChange={(e) => onSelectGym(e.target.value)}
            className="max-w-[170px] xs:max-w-[210px] sm:max-w-[260px] bg-zinc-900 text-white text-xs rounded-lg px-2.5 py-1.5 border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer font-medium truncate"
          >
            {GYM_CLUBS.map((gym, index) => (
              <option key={gym.id} value={gym.id} className="bg-zinc-900 text-white">
                {index + 1}. {gym.name} ({gym.area.split(",")[0]})
              </option>
            ))}
          </select>

          {/* Clean Client Link Copy */}
          <button
            onClick={handleCopyCleanClientLink}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition active:scale-95 cursor-pointer shrink-0"
            title="ক্লায়েন্টকে পাঠানোর মতো ক্লিন লিংক কপি করুন (এতে এই বারটি থাকবে না)"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-black" />
                <span>কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-black" />
                <span>শেয়ার লিংক</span>
              </>
            )}
          </button>

          {/* Test in New Tab as Client */}
          <button
            onClick={handlePreviewAsClient}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs border border-zinc-700 transition cursor-pointer shrink-0"
            title="নতুন ট্যাবে দেখুন ক্লায়েন্ট কেমন দেখবে"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">ক্লায়েন্ট ভিউ</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
