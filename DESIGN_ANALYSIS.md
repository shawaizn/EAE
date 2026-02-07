# Design Analysis: Energise AI Education

## Color Palette
- **Primary:** Deep blue (`#1E40AF`) / Electric blue (`#3B82F6`) — conveys trust and authority
- **Accent 1:** Cyan (`#06B6D4`) — interactive elements, highlights, progress indicators
- **Accent 2:** Coral/Orange (`#F97316`) — CTAs and human warmth
- **Backgrounds:** Warm whites (`#FAFAF9`, `#F4F4F5`) rather than cold grays
- **Text:** Warm slate tones (`#0F172A` primary, `#64748B` secondary)
- **Three-color stat cards** pattern (cyan, electric blue, coral borders) — recurring motif across Landing + Dashboard

## Typography
- System font stack (`Inter, system-ui, -apple-system`) — no custom web fonts loaded
- Tight letter-spacing on headings (`-0.02em` to `-0.03em`)
- Hero text uses gradient text fill (deep blue → electric blue → cyan)
- Uppercase `tracking-wider` labels for small metadata
- Font weights: 400 body, 600 labels, 700 headings, 900 (`font-black`) on logo

## Visual Effects & Motion
- `backdrop-blur-md` on nav and cards (glassmorphism-lite)
- Fade-in animations on scroll sections with staggered delays (fade-in-down, fade-in, fade-in-up)
- Buttons lift on hover (`translateY(-1px)`, `scale-105`) with colored glow shadows
- Interactive cards get corner-bracket accent borders on hover (top-left, bottom-right)
- Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` — bouncy/snappy feel
- `prefers-reduced-motion` respected

## Component Patterns
- **Cards:** White, subtle shadows, `rounded-md`, thin `border-slate-100`
- **Buttons:** 6 variants (primary/cyan, secondary, success, outline, purple/blue, orange), `active:scale-95` press effect, colored glow on hover, disabled states
- **Navbar:** Sticky, frosted glass, subtle gradient rainbow line at bottom (cyan → coral)
- **Stat cards:** Bordered with tinted backgrounds (`color + 05` opacity), hover scale
- **Module cards:** `border-2` with expand/collapse accordion
- **Progress bars:** Rounded-full, gradient fill (electric blue → cyan)

## Layout
- Max-width `6xl` (~1152px) content, `7xl` navbar
- Generous padding (`p-8` to `p-16` on feature sections)
- Vertical rhythm: `mb-20 sm:mb-32` between major sections
- Mobile-first with `sm:` breakpoints, flexible grids (`grid-cols-1 sm:grid-cols-3`)

## Logo
- Custom SVG: two-tone arc (teal top, charcoal bottom) forming a loop, geometric "E" inside
- Activation dot with radiating lines (energy/spark motif)
- Wordmark: "Energise" in black `font-black`, "AI EDUCATION" in slate-600 uppercase

## Design Identity Summary
Targets **premium B2B education** (£400-600 price point). Clean SaaS aesthetic — white space, subtle shadows, blue-teal palette — with coral as human-warmth counterpoint. Light glassmorphism (no heavy blur/transparency). Multiple animated background options available (`EnergeticBackground`, `EnergyFlowBackground`, `NeuralNetworkBackground`). Overall: professional, modern, restrained.
