# ⚡ DESIGN SYSTEM — GYM & FITNESS HIGH-PERFORMANCE SUITE (Google Stitch Specification)

> **Design Direction:** Elite Athletic Performance, Raw Strength & Conditioning, Modern Obsidian Luxury, Motivating High Energy.  
> **Target Audience:** Fitness enthusiasts, bodybuilding athletes, working professionals, and beginners looking for premium gym facilities, personal training, and transformative workout environments in urban areas.

---

## 🎨 1. Color Palette (Google Stitch Tokens)

### Athletic Dark Base Tokens
- **`--color-bg-base`**: `#09090B` (Zinc 950 — Deep obsidian canvas for extreme focus)
- **`--color-surface-card`**: `#141417` (Deep Gunmetal — Flat card surfaces)
- **`--color-surface-subtle`**: `#1F1F23` (Zinc 900 — Alternating rows & hover states)
- **`--color-border-subtle`**: `#27272A` (Zinc 800 — Crisp flat borders)
- **`--color-border-highlight`**: `#F59E0B` (Electric Amber — Active packages & focus outlines)

### High-Energy Athletic Accents
- **`--color-accent-amber`**: `#F59E0B` (Electric Amber 500 — Primary CTA, badge highlights)
- **`--color-accent-amber-hover`**: `#D97706` (Amber 600 — Hover CTA)
- **`--color-accent-red`**: `#EF4444` (Crimson Fire — High-intensity indicators & live classes)
- **`--color-accent-emerald`**: `#10B981` (Vibrant Emerald — WhatsApp & Verified Certification Badges)

### High-Contrast Typography Tokens
- **`--color-text-display`**: `#FFFFFF` (Pure Crisp White — High-impact headings)
- **`--color-text-primary`**: `#F4F4F5` (Zinc 100 — Key titles & strong elements)
- **`--color-text-body`**: `#D4D4D8` (Zinc 300 — WCAG AAA compliant body text)
- **`--color-text-muted`**: `#A1A1AA` (Zinc 400 — Metadata, hours, and captions)

---

## ✍️ 2. Typography Hierarchy (Taste Skill v2 Standard)

- **Display Headline (Hero):** `text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white`
- **Section Heading (H2):** `text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white`
- **Card Heading (H3):** `text-lg sm:text-xl font-bold text-white`
- **Body Large:** `text-base sm:text-lg text-zinc-300 leading-relaxed`
- **Body Regular:** `text-sm sm:text-base text-zinc-300 leading-normal`
- **Micro Badge / Tag:** `text-xs font-bold tracking-wider uppercase text-amber-400`

---

## 🔘 3. Interactive Components & States (Vercel Guidelines)

### Button Design Tokens
1. **Primary Athletic CTA (Claim Free Day Pass / Join Now):**
   - Base: `bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all duration-150`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`
   - Touch Target: `min-h-[44px] min-w-[44px]`

2. **Secondary Outlined Button:**
   - Base: `border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-semibold px-4 py-2.5 rounded-xl transition-all duration-150`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`

3. **Input Fields:**
   - Base: `w-full px-4 py-3 text-white bg-zinc-900/90 border border-zinc-700 rounded-xl transition duration-150`
   - Focus: `focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none`

---

## 🚫 4. Impeccable Anti-Slop Safeguards
- ❌ **No Nested Cards:** Flat borders with crisp padding (`p-6 bg-zinc-900/70 border border-zinc-800 rounded-2xl`).
- ❌ **No Cheesy AI Graphics:** Authentic equipment photography (Hammer Strength, Life Fitness, Olympic Free Weights, Dumbbell racks).
- ❌ **No Blurry Gradients:** Deep athletic mesh backdrop with subtle high-contrast lighting accents.
- ❌ **No Layout Shifts:** Strict aspect ratios (`aspect-[16/10]`, `aspect-square`) on all gym machinery and transformation photos.

---

## 📱 5. Multi-Device Responsive Breakpoints
- **Mobile (<640px):** Single column, 16px margins, sticky bottom Day Pass & WhatsApp bar.
- **Tablet (640px - 1024px):** 2-column grid, compact shifts and pricing comparisons.
- **Desktop (>1024px):** 3-column / 4-column athletic showcases with generous breathing room.
