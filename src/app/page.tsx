import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexHero from "@/components/FitFlexHero";
import FitFlexMarquee from "@/components/FitFlexMarquee";
import FitFlexPrograms from "@/components/FitFlexPrograms";
import FitFlexTestimonials from "@/components/FitFlexTestimonials";
import FitFlexPricing from "@/components/FitFlexPricing";
import FitFlexFeatures from "@/components/FitFlexFeatures";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      {/* Header */}
      <FitFlexHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <FitFlexHero />

        {/* Live Neon Ticker Marquee */}
        <FitFlexMarquee />

        {/* Programs / Path to Fitness */}
        <FitFlexPrograms />

        {/* Testimonials / Transformations */}
        <FitFlexTestimonials />

        {/* Pricing / Flexible Plans */}
        <FitFlexPricing />

        {/* Features / Why ApexPulse */}
        <FitFlexFeatures />

        {/* CTA Banner */}
        <FitFlexCta />
      </main>

      {/* Footer */}
      <FitFlexFooter />

      {/* Scroll to Top */}
      <FitFlexScrollTop />
    </div>
  );
}
