import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "প্রিমিয়াম ফিটনেস ক্লাব ও জিম | মেম্বারশিপ ও ফ্রি ট্রায়াল সেশন বুকিং",
  description:
    "ঢাকার শীর্ষস্থানীয় ফিটনেস ও বডি ট্রান্সফর্মেশন জিমসমূহ। অলিম্পিক ইকুইপমেন্ট, সার্টিফাইড মাস্টার ট্রেইনার, জুম্বা, এরোবিক্স ও পার্সোনালাইজড ডায়েট চার্ট।",
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
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

