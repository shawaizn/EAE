You are redesigning a React + Tailwind CSS education platform to feel enterprise-grade for business buyers (£400-600 price point). The site currently has a dual-theme system in `src/styles/theme.js` with `DESIGN_MODE = 'enterprise'` active. The theme system already handles colors, shadows, transitions, and behavioral flags — but some components and pages may not yet fully read from the theme, or may have hardcoded playful patterns that bypass it.

Your job is to audit and complete the enterprise design pass across the entire codebase.

---

## What the Business Buyer Needs to Feel at Each Stage

Every design decision should serve what the buyer needs to feel at that moment. This is the foundation — everything else is in service of this.

**Landing page — "This is worth my time to evaluate."**
The buyer is deciding whether to keep reading. The design must signal that serious thinking lives behind this product. Typography and content hierarchy do this work — not animation or visual effects. Let the stat cards, market data, and strategic framing earn credibility on their own. The design should be still and confident here, not loud.

**Login — "This is simple and secure."**
A utility moment. The buyer has already decided to engage. Don't perform here. Clean form, no animated backgrounds, minimal decoration. Get them in.

**First page after login (Progress page) — "I made a good investment. I can see the path."**
This is the most important emotional moment. The buyer just committed money. They need orientation — where am I, what do I do first, how is this structured. The design must shift from "sell" to "guide." No re-selling, no hero sections, no market stats they already read. Clear data, clear next steps, professional language. This is where "Training Progress" instead of "Your Learning Journey" matters most.

**Progress page ongoing — "I can see what I've done and what's ahead."**
Functional clarity. Stats should be readable at a glance. No gamification language that would embarrass someone showing this to their team. "Status: Proficient" not "Your Level: Expert ⭐". Achievement badges and streaks are hidden in enterprise mode for this reason.

**Module page — "This is structured, professional training."**
The content is strong here — let it lead. The design should be quiet. Clean hierarchy: title, progress, overview, lessons. Hover states should acknowledge interactivity without performing.

**Lesson page — "This is worth £400-600."**
The depth of the content justifies the price — but only if the buyer can see it. Accordion sections, video, activities, audience-specific applications. The audience buttons ("Individual Learners", "Employees", "Self-Employed", "Business Teams") should feel like professional segmentation, not a quiz app. No emoji, clean borders, solid labels.

**Sidebar — "I know where I am."**
Navigation should use business training language. "Foundation / Application / Strategy" communicates a structured program. "Beginner / Intermediate / Advanced" communicates a consumer learning app. The tier labels set the frame for everything inside them.

---

## Design Principles

These describe what creates the feelings above:

1. **Credibility comes from restraint, not decoration.** When something doesn't move, glow, or scale — that stillness communicates confidence. Remove visual effects that exist to impress rather than to communicate.

2. **Let content carry authority.** Strong typography, clear hierarchy, and whitespace do more than animations. If the writing is good, the design should step back.

3. **Hover states should acknowledge, not perform.** A subtle shadow shift or border color change says "this is interactive." A scale transform with a colored glow says "look at me." Enterprise hover = acknowledgment.

4. **Color should be surgical, not saturated.** One accent color used in the right moments (active states, key CTAs, progress indicators) creates more impact than three accent colors used everywhere. The enterprise palette uses deeper, more grounded tones — `#0369A1` (sky-700) instead of `#06B6D4` (cyan), `#D97706` (amber-600) instead of `#F97316` (orange).

5. **Language should orient, not gamify.** "Training Progress" not "Your Learning Journey." "Foundation / Application / Strategy" not "Beginner / Intermediate / Advanced." "Status: Proficient" not "Your Level: Advanced." The buyer is evaluating whether their team will take this seriously.

6. **The design should shift tone after login.** The landing page can sell. Once the user is inside, the design should orient and guide — not continue performing. No animated backgrounds post-login.

---

## The Theme System

`src/styles/theme.js` exports:
- `theme` — colors, shadows, radius, transitions, typography
- `behavior` — boolean flags: `hoverScale`, `hoverGlow`, `animatedBackground`, `bouncyEasing`, `cornerBrackets`, `iconRotateOnHover`, `showAchievementBadges`, `showStreakIndicator`, `gamificationLanguage`, `progressBarGlow`
- `lang` — language variants: `progressTitle`, `progressSubtitle`, `levelLabels`, `tierLabels`, `achievementTitles`, `audienceLabels`

All components should read from these. If you find a component using hardcoded colors, hardcoded hover classes (like `hover:scale-105`, `hover:shadow-cyan-500/20`), or hardcoded playful language that doesn't check `behavior` or `lang`, fix it.

---

## Specific Areas to Audit

1. **Any component not yet importing from the theme** — look for hardcoded hex colors, hardcoded Tailwind `hover:scale-*`, `animate-bounce`, colored `shadow-*` classes
2. **Login page** (`src/pages/Login.jsx`) — uses `AnimatedLoginBackground`; should check `behavior.animatedBackground`
3. **FeaturesTable** (`src/components/features/FeaturesTable.jsx`) — has `group-hover:scale-110` on icons
4. **RecapPage, NotesPage, PromptsPage, ResourcesPage, CertificatePage** — may not have been updated yet
5. **Modal component** — check for playful styling
6. **Any remaining emoji in UI** (outside of `lang.audienceLabels` in current mode)
7. **CSS in index.css** — the global transition was updated but check for any hardcoded accent colors in prose styles or utility classes that should use theme colors

---

## What NOT to Change

- Don't change the content/copy of lessons, modules, or educational material
- Don't change the layout structure or routing
- Don't remove components — make them theme-aware so they work in both modes
- Don't change the `currentTheme` definition in theme.js — it preserves the original design
- Keep all existing functionality intact

---

## Output

For each file you change, explain what you changed and why — specifically which buyer feeling it serves. Prioritize changes that a business buyer would actually notice over internal cleanups.
