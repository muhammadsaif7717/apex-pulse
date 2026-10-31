"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getGymById, GYM_CLUBS, GymClub } from "@/data/gyms";
import AgencyBar from "@/components/AgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TrainersSection from "@/components/TrainersSection";
import GallerySection from "@/components/GallerySection";
import TransformationsSection from "@/components/TransformationsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import BookingModal from "@/components/BookingModal";

function GymLandingContent() {
  const searchParams = useSearchParams();
  const clientParam = searchParams.get("client");
  const viewParam = searchParams.get("view");

  const [currentGym, setCurrentGym] = useState<GymClub>(() => {
    if (clientParam) {
      return getGymById(clientParam);
    }
    return GYM_CLUBS[0];
  });

  const [isClientMode, setIsClientMode] = useState<boolean>(() => {
    return viewParam === "client";
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (clientParam) {
      setCurrentGym(getGymById(clientParam));
    }
    if (viewParam === "client") {
      setIsClientMode(true);
    }
  }, [clientParam, viewParam]);

  const handleSelectGym = (id: string) => {
    const gym = getGymById(id);
    setCurrentGym(gym);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("client", id);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleOpenBooking = (planName?: string) => {
    setSelectedPlan(planName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
      {/* Agency Control Bar (Hidden in Client View) */}
      <AgencyBar
        currentGym={currentGym}
        onSelectGym={handleSelectGym}
        isClientMode={isClientMode}
      />

      {/* Main Navbar */}
      <Navbar gym={currentGym} onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero gym={currentGym} onOpenBooking={() => handleOpenBooking()} />

        {/* Membership Packages & Pricing */}
        <PricingSection
          gym={currentGym}
          onOpenBooking={handleOpenBooking}
        />

        {/* Facilities & Equipment Showcase */}
        <FacilitiesSection gym={currentGym} />

        {/* Certified Master Trainers */}
        <TrainersSection
          gym={currentGym}
          onOpenBooking={(coachName) => handleOpenBooking(coachName)}
        />

        {/* Floor & Atmosphere Gallery */}
        <GallerySection gym={currentGym} />

        {/* Member Transformations & Reviews */}
        <TransformationsSection gym={currentGym} />

        {/* Location & Opening Shifts */}
        <LocationSection gym={currentGym} />

        {/* FAQs */}
        <FaqSection gym={currentGym} />
      </main>

      {/* Footer */}
      <Footer
        gym={currentGym}
        onOpenBooking={() => handleOpenBooking()}
        isClientMode={isClientMode}
      />

      {/* Mobile Floating Sticky CTA */}
      <FloatingCta gym={currentGym} onOpenBooking={() => handleOpenBooking()} />

      {/* Free Trial / Admission Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        gym={currentGym}
        initialPlan={selectedPlan}
      />
    </div>
  );
}

export default function GymHomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-amber-400">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-bold text-zinc-300">ফিটনেস প্ল্যাটফর্ম লোড হচ্ছে...</p>
          </div>
        </div>
      }
    >
      <GymLandingContent />
    </Suspense>
  );
}
