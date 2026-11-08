"use client";

import { useState } from "react";
import Link from "next/link";
import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { openBookingModal } from "@/components/FitFlexBookingModal";
import { FITFLEX_SCHEDULE } from "@/data/fitnessData";

export default function TimetablePage() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filterTabs = [
    "ALL",
    "FITFUSION",
    "YOGA HARMONY",
    "CYCLE FUSION",
    "CARDIO KICK",
    "FUNCTIONAL FITNESS",
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

  const timeSlots = [
    "06:00 AM - 07:00 AM",
    "08:00 AM - 09:00 AM",
    "10:00 AM - 11:00 AM",
    "05:00 PM - 06:00 PM",
    "07:00 PM - 08:00 PM",
  ];

  const getSlot = (day: string, time: string) => {
    return FITFLEX_SCHEDULE.find((s) => s.day === day && (s.time === time || s.time.startsWith(time.split(" ")[0])));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />

      <main className="flex-1">
        {/* Banner */}
        <FitFlexPageBanner
          title="YOUR DAILY FITNESS JOURNEY STARTS HERE"
          breadcrumbs={[{ label: "Timetable" }]}
        />

        {/* Timetable Section */}
        <section className="py-24 bg-[#222222] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-[11px] font-bold tracking-widest text-[#f2fd84] uppercase bg-white/5 px-3 py-1 border border-white/10 font-[family-name:var(--heading-font)] mb-3 inline-block">
                  WEEKLY ROTATION
                </span>
                <h2 className="cs_text_strock text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-[family-name:var(--heading-font)]">
                  <span>STUDIO </span>CLASS TIMETABLE
                </h2>
                <p className="text-white/60 text-sm sm:text-base mt-4 font-[family-name:var(--body-font)]">
                  Select your favorite training format and lock in your session with our certified instructors.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setSelectedFilter(tab)}
                    className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-[family-name:var(--heading-font)] transition-all cursor-pointer border ${
                      selectedFilter === tab
                        ? "bg-[#f2fd84] text-[#222222] border-[#f2fd84] shadow-md"
                        : "bg-[#1a1a1a] text-white/70 hover:text-white border-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Timetable Table Matrix */}
            <RevealOnScroll direction="up" delayMs={150}>
              <div className="overflow-x-auto border border-white/10 bg-[#1a1a1a] shadow-2xl">
                <table className="w-full min-w-[1000px] border-collapse text-left text-xs font-[family-name:var(--heading-font)]">
                  <thead>
                    <tr className="bg-[#2a2a2a] border-b border-white/10">
                      <th className="p-4 text-center text-[#f2fd84] font-black w-36 uppercase">Time</th>
                      {days.map((day) => (
                        <th key={day} className="p-4 text-center text-white font-extrabold uppercase">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {timeSlots.map((time) => (
                      <tr key={time} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-center font-bold text-white/60 bg-[#222222]/80 border-r border-white/10 whitespace-nowrap">
                          {time}
                        </td>
                        {days.map((day) => {
                          const slot = getSlot(day, time);
                          const isMatch =
                            slot &&
                            (selectedFilter === "ALL" ||
                              slot.className.toLowerCase().includes(selectedFilter.toLowerCase()));

                          return (
                            <td
                              key={day}
                              className={`p-3 text-center border-r border-white/10 transition-colors ${
                                isMatch ? "bg-[#282828] hover:bg-[#303030]" : "bg-[#181818]"
                              }`}
                            >
                              {isMatch && slot ? (
                                <div className="space-y-1.5 p-2">
                                  <Link
                                    href={`/classes/${slot.className.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-xs font-black text-white hover:text-[#f2fd84] transition-colors uppercase block"
                                  >
                                    {slot.className}
                                  </Link>
                                  <p className="text-[10px] text-white/50">{slot.room}</p>
                                  <p className="text-[10px] text-[#f2fd84] font-semibold">{slot.trainer}</p>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      openBookingModal(`${slot.className} (${day} ${time})`)
                                    }
                                    className="inline-block mt-2 px-3 py-1 bg-white/5 hover:bg-[#f2fd84] hover:text-[#222222] text-[10px] font-bold uppercase transition-colors border border-white/10 cursor-pointer"
                                  >
                                    RESERVE SPOT
                                  </button>
                                </div>
                              ) : (
                                <span className="text-white/10 text-xs">—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <FitFlexCta
          title="EXPLORE OUR DIVERSE CLASS SCHEDULE"
          subtitle="Ready to transform your lifestyle? Contact our front desk to book your free trial pass."
        />
      </main>

      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
