# 🎨 DESIGN.md — FitFlex Exact Specification (Google Stitch)

> **Authentic Clone & Redesign of FitFlex Fitness Studio**  
> Brand Name: **ApexPulse Fitness Studio** (Direct FitFlex Architecture)

---

## 1. 🌟 Design System Tokens

- **Brand Name:** ApexPulse (FitFlex Architecture)
- **Tagline:** Achieve More Than Just Fitness
- **Background Color:** `#222222` (`--black-color: #222`)
- **Card / Surface Color:** `#282828` / `rgba(255, 255, 255, 0.04)` (`--gray-color`)
- **Primary Accent Color:** `#f2fd84` (`--accent-color: #f2fd84` — Iconic Electric Fluorescent Lime-Yellow)
- **Primary Accent Hover:** `#ffffff` / transparent with white border
- **Heading Color:** `#ffffff` (`--heading-color: #fff`)
- **Body Color:** `rgba(255, 255, 255, 0.6)` (`--body-color`)
- **Border Color:** `rgba(255, 255, 255, 0.1)` (`--border-color`)
- **Gradient Borders:** `linear-gradient(45deg, rgb(242, 253, 132), rgba(255, 255, 255, 0)) 1`

---

## 2. ✍️ Typography & Stroke Effects

- **Heading Font:** `"Sora", sans-serif` (Heavy, uppercase, bold geometric)
- **Body Font:** `"Roboto", sans-serif`
- **Text Stroke Effect (`.cs_text_strock`):**
  ```css
  .cs_text_strock span {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
    color: transparent;
  }
  ```
  Applies to the initial word of all primary section headers (e.g., `<span>ACHIEVE </span>MORE THAN JUST FITNESS`).

---

## 3. 🔲 Button & Component Specifications

- **Primary Button (`.cs_btn_style_1`):**
  - Height: `48px`
  - Background: `#f2fd84`
  - Color: `#222222`
  - Font: `Sora`, 600, uppercase, letter-spacing `0.24px`
  - Border: `1px solid #f2fd84`
  - Hover: Background transparent, border `1px solid #ffffff`, text `#ffffff`
- **Header Contact Button:**
  - Background: transparent
  - Color: `#ffffff`
  - Border: `1px solid #ffffff`
  - Hover: Background `#f2fd84`, text `#222222`, border `1px solid #f2fd84`
- **Scroll Top Button:**
  - Square `48px x 48px`, background `#f2fd84`, color `#222222`, fixed bottom-right.
- **Card Hover:**
  - Border transition to `#f2fd84`, subtle `translateY(-7px)` lift.
