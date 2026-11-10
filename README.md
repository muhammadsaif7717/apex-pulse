# ⚡ ApexPulse — High-Performance Gym & Fitness Studio Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://apex-pulse-amber.vercel.app)
[![License: Custom Evaluation](https://img.shields.io/badge/License-Evaluation_Only-orange?style=for-the-badge)](./LICENSE)

> **ApexPulse** is a high-octane, dark-mode web application engineered for modern fitness clubs, CrossFit boxes, and boutique athletic training studios. It features an electric fluorescent lime aesthetic (`#f2fd84`), interactive 7-day class timetables, direct class booking modals, and comprehensive program directories.

🌐 **Live Demo:** [https://apex-pulse-amber.vercel.app](https://apex-pulse-amber.vercel.app)
💻 **GitHub Repository:** [https://github.com/muhammadsaif7717/apex-pulse](https://github.com/muhammadsaif7717/apex-pulse)

---

## 🌟 Key Features

### 1. 📅 Interactive 7-Day Class Timetable (`/timetable`)
- Filterable weekly schedule covering Monday through Sunday across 5 daily time slots.
- Real-time program filters: **ALL, FITFUSION, YOGA HARMONY, CYCLE FUSION, CARDIO KICK, and FUNCTIONAL FITNESS**.
- Direct-to-booking triggers directly from any timetable slot.

### 2. ⚡ High-Octane Dark Aesthetic & Live Neon Ticker
- Premium athletic dark theme (`#222222`) paired with iconic fluorescent lime (`#f2fd84`) accents.
- Dynamic infinite-scroll marquee broadcasting motivational club mantras and live announcements.
- Custom outline text strokes (`.cs_text_strock`) and geometric typography (`Sora`).

### 3. 🏋️ Complete Fitness Programs Catalog (`/classes`, `/classes/[slug]`)
- Program deep dives with calorie burn estimates, intensity meters, durations, and skill levels.
- Slug-based dynamic pages highlighting workout targets, equipment, and coach assignments.

### 4. 🎟️ Interactive Class Booking Modal
- Frictionless modal booking system with instant session reservation and class selection.
- Works seamlessly across homepage program cards, single class pages, and timetable slots.

### 5. 💳 Tiered Membership & Pricing Engine (`/pricing`)
- Transparent pricing tiers (Starter, Pro Athlete, VIP Unlimited) with feature checkmarks and highlight badges.
- Direct join buttons wired to membership onboarding.

### 6. 🥊 Elite Certified Coaches Showcase (`/trainers`)
- Coach directory detailing athletic certifications, experience years, specializations, and coaching philosophies.

### 7. 📰 Dynamic Workout & Nutrition Blog (`/blog`, `/blog/[slug]`)
- Articles on strength training protocols, sports nutrition, recovery methods, and athletic mindset.

### 8. 🏆 Animated Metrics & Social Proof
- Dynamic counter animations tracking active members, certified trainers, and workout classes completed.
- Member transformation testimonials and reviews.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/turbopack` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Google Fonts (`Sora` for headings, `Roboto` for body text) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Flagship landing page with Hero, Live Marquee, Programs, Pricing & Reviews |
| `/about` | Athletic philosophy, studio facility tour, and gym culture |
| `/classes` | Program catalog with category filters and workout stats |
| `/classes/[slug]` | Dynamic class detail page with intensity ratings, duration & booking |
| `/timetable` | Interactive 7-day schedule with category filters and slot reservation |
| `/pricing` | Membership plans, benefit comparison, and plan sign-up |
| `/trainers` | Certified coaches and personal trainer roster |
| `/blog` | Fitness articles, workout regimens, and nutritional guides |
| `/blog/[slug]` | In-depth dynamic fitness blog post |
| `/contact` | Studio location, opening hours, directions, and inquiry form |

---

## 📂 Project Structure

```text
apex-pulse/
├── public/                 # Athletic gym assets, coach photos & badges
├── src/
│   ├── app/
│   │   ├── about/          # Studio story & facility showcase
│   │   ├── blog/           # Dynamic blog system & [slug] routes
│   │   ├── classes/        # Workout programs & [slug] dynamic pages
│   │   ├── contact/        # Location & contact inquiries
│   │   ├── pricing/        # Membership tiers & benefits
│   │   ├── timetable/      # 7-Day interactive schedule grid
│   │   ├── trainers/       # Certified coaches directory
│   │   ├── layout.tsx      # Root layout, fonts & header/footer
│   │   ├── page.tsx        # Homepage experience
│   │   └── globals.css     # Dark theme styles & neon accents
│   ├── components/         # Reusable UI components
│   │   ├── FitFlexBookingModal.tsx
│   │   ├── FitFlexFeatures.tsx
│   │   ├── FitFlexHeader.tsx
│   │   ├── FitFlexHero.tsx
│   │   ├── FitFlexMarquee.tsx
│   │   ├── FitFlexPricing.tsx
│   │   ├── FitFlexPrograms.tsx
│   │   ├── FitFlexTestimonials.tsx
│   │   ├── RevealOnScroll.tsx
│   │   └── ...
│   └── data/
│       └── fitnessData.ts  # Class programs, coaches, timetable & blogs
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammadsaif7717/apex-pulse.git
   cd apex-pulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

---

## 💡 Engineering Highlights

- **High-Contrast Dark UI:** Precision-tuned `#222222` dark canvas and `#f2fd84` neon palette adhering to athletic performance branding.
- **Dynamic Weekly Timetable Engine:** High-performance filterable grid that seamlessly cross-references days and workout types.
- **Frictionless Booking Modal:** Global interactive modal triggered from any class card or schedule slot with real-time feedback.

---

## 👨‍💻 Author

**Muhammad Saif**
- GitHub: [@muhammadsaif7717](https://github.com/muhammadsaif7717)
- Live Project: [https://apex-pulse-amber.vercel.app](https://apex-pulse-amber.vercel.app)

---

## 📄 License

This project is licensed under a **Custom Source-Available & Evaluation License**.

- ✅ **Allowed:** You are welcome to clone, download, inspect, and run this application locally for personal learning, evaluation, and educational demonstration purposes.
- ❌ **Prohibited:** You may **not** modify, alter, redistribute, rebrand, or publish this software (in whole or in part) under your own name or for commercial use without explicit prior written authorization from the copyright holder.

See the full [`LICENSE`](./LICENSE) file for legal details.

