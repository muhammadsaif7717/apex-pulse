"use client";

import { openBookingModal } from "@/components/FitFlexBookingModal";

interface BookClassButtonProps {
  classNameTitle: string;
  variant?: "primary" | "outline";
  text?: string;
}

export default function BookClassButton({
  classNameTitle,
  variant = "primary",
  text = "BOOK THIS CLASS",
}: BookClassButtonProps) {
  return (
    <button
      type="button"
      onClick={() => openBookingModal(classNameTitle)}
      className={`${
        variant === "primary" ? "cs_btn_style_1" : "cs_btn_style_outline"
      } cursor-pointer`}
    >
      <span>{text}</span>
    </button>
  );
}

