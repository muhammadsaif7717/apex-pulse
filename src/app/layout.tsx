import type { Metadata, Viewport } from "next";
import { Sora, Roboto } from "next/font/google";
import FitFlexBookingModal from "@/components/FitFlexBookingModal";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--heading-font",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--body-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ApexPulse Fitness Studio | Achieve More Than Just Fitness",
  description:
    "ApexPulse is an authentic high-performance fitness studio template featuring strength training, metabolic conditioning, yoga, combat kickboxing, and certified master coaching.",
  keywords: [
    "ApexPulse",
    "FitFlex",
    "Fitness Studio",
    "Strength Training",
    "Cardio Blast",
    "Yoga & Flexibility",
    "Workout Timetable",
    "Gym Membership",
  ],
  authors: [{ name: "ApexPulse Fitness Studio" }],
  openGraph: {
    title: "ApexPulse Fitness Studio | Achieve More Than Just Fitness",
    description:
      "Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${roboto.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#222222] text-white/70 selection:bg-[#f2fd84] selection:text-[#222222]">
        {children}
        <FitFlexBookingModal />
      </body>
    </html>
  );
}
