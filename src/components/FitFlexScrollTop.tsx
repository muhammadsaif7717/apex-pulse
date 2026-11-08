"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function FitFlexScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-[#f2fd84] hover:bg-white text-[#222222] flex items-center justify-center transition-all duration-300 shadow-2xl border border-[#f2fd84] cursor-pointer"
    >
      <ChevronUp className="w-6 h-6 stroke-[3]" />
    </button>
  );
}

