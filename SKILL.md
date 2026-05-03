---
name: prism
description: Use when building Apple HIG-compliant UI with liquid glass (iOS 26) design — Prism component API, glass material tokens, BEM+clsxMerge convention, HIG layout/typography/navigation/accessibility principles. Triggers on "apple hig", "liquid glass", "prism component", "prism-card", "backdrop blur", "glass surface".
---

# Prism — Apple HIG Component Library

> Full skill content arrives in Plan 3. This placeholder enables the /prism alias immediately.

## BEM + clsxMerge (Mandatory Convention)

Every Prism component uses the three-line BEM structure:

```tsx
className={clsxMerge(
  "prism-card",                                      // Block: identity + material class
  "flex flex-col gap-4 p-6 rounded-2xl",             // Element: layout + structure
  isActive && "shadow-glass ring-1 ring-white/10",   // Modifier: state/variant
  props.className                                    // Caller override — always last
)}
```

## Available Components (Plan 1 — Foundation)

| Component | Import | Purpose |
|-----------|--------|---------|
| `PrismSurface` | `@nkmnhan/prism` | Base glass surface, configurable blur + elevation |
| `PrismBlur` | `@nkmnhan/prism` | Pure backdrop-blur wrapper, no surface styling |

## Setup (Tailwind v4)

```css
/* app.css — one line, no JS config needed */
@import "tailwindcss";
@import "@nkmnhan/prism/styles";
```

## Tailwind Plugin Classes

| Class | Purpose |
|-------|---------|
| `prism-surface` | Glass surface (no padding) |
| `prism-card` | Glass surface + 1.5rem padding |
| `prism-nav` | NavBar — heavy blur, high opacity |
| `prism-sheet` | Bottom sheet — rounded top corners |
| `prism-input` | Glass input field, 44px min-height |
| `prism-tab-bar` | Bottom tab navigation |
| `shadow-glass` | Glass shadow + specular highlight |
| `shadow-glass-lg` | Larger glass shadow |
| `animate-prism-spring` | HIG spring animation curve |
| `animate-prism-ease` | HIG standard ease curve |

## CSS Tokens (from prism.css)

| Variable | Value | Purpose |
|----------|-------|---------|
| `--prism-blur-sm` | 10px | Subtle blur (inputs) |
| `--prism-blur-md` | 20px | Standard card blur |
| `--prism-blur-lg` | 40px | Nav/sheet blur |
| `--prism-blur-xl` | 80px | Full-screen overlay |
| `--prism-spring` | cubic-bezier(0.34,1.56,0.64,1) | HIG spring |
| `--prism-touch-target` | 44px | HIG minimum tap size |
| `--prism-radius-lg` | 16px | Card corner radius |
| `--prism-radius-sheet` | 20px | Sheet top radius |
