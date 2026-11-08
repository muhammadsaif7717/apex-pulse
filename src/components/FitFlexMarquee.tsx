import { Zap, Flame, Trophy, Dumbbell } from "lucide-react";

export default function FitFlexMarquee() {
  const items = [
    { text: "STRENGTH TRAINING", icon: Dumbbell },
    { text: "HIGH-INTENSITY METCON", icon: Flame },
    { text: "POWER VINYASA YOGA", icon: Zap },
    { text: "COMBAT KICKBOXING", icon: Trophy },
    { text: "PERSONAL NUTRITION", icon: Dumbbell },
    { text: "24/7 STUDIO ACCESS", icon: Flame },
  ];

  return (
    <div className="bg-[#f2fd84] text-[#222222] py-3.5 overflow-hidden select-none border-y border-[#f2fd84] shadow-md font-[family-name:var(--heading-font)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 mx-6 text-xs sm:text-sm font-black tracking-wider uppercase">
              <Icon className="w-4 h-4 fill-[#222222]" />
              <span>{item.text}</span>
              <span className="text-[#222222]/30 text-lg">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

