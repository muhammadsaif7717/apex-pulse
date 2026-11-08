import FitFlexHeader from "@/components/FitFlexHeader";
import FitFlexPageBanner from "@/components/FitFlexPageBanner";
import FitFlexPricing from "@/components/FitFlexPricing";
import FitFlexCta from "@/components/FitFlexCta";
import FitFlexFooter from "@/components/FitFlexFooter";
import FitFlexScrollTop from "@/components/FitFlexScrollTop";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#222222] text-white">
      <FitFlexHeader />
      <main className="flex-1">
        <FitFlexPageBanner
          title="FLEXIBLE PLANS FOR EVERY BUDGET"
          breadcrumbs={[{ label: "Pricing" }]}
        />
        <FitFlexPricing />
        <FitFlexCta />
      </main>
      <FitFlexFooter />
      <FitFlexScrollTop />
    </div>
  );
}
