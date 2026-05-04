import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

/**
 * Pure HTML + CSS liquid glass — zero JavaScript, GPU-only.
 *
 * Technique: SVG feTurbulence + feDisplacementMap (declared in HTML, GPU-rasterised).
 * `backdrop-filter: url(#lg-distort) blur() brightness() saturate()` — all compositor,
 * no main thread. Graceful fallback in Chrome (blur+saturate without url()).
 *
 * Copy the <svg id="lg-filters"> snippet once into your <body>, then add
 * class="lg lg-card" to any element.
 */
const meta: Meta = {
  title: 'Prism/LiquidGlass (Pure CSS)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '### Pure HTML + CSS · Zero JS · GPU-only',
          '',
          '**Delivery**: One CSS file (`liquid-glass.css`) + one `<svg>` tag in `<body>`.',
          'Works in any HTML page — no React, no Tailwind, no build step.',
          '',
          '**GPU path**: `backdrop-filter` runs on the GPU compositor.',
          '`transform: translateZ(0)` + `will-change: backdrop-filter` promote',
          'the element to its own layer — no repaints, no layout thrashing.',
          '',
          '**Distortion** (`feTurbulence` → `feDisplacementMap`): GPU-rasterised in',
          'Firefox and WebKit. Chrome ignores `url()` in `backdrop-filter` and falls',
          'back to blur+saturate — still looks great.',
        ].join('\n'),
      },
    },
  },
}

export default meta

// ─── SVG filter — same as what liquid-glass.css documents ────────────────────

const SvgFilters = () => (
  <svg
    id="lg-filters"
    aria-hidden
    focusable={false}
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="lg-distort" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves={1} seed={3} result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={16} xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="lg-distort-subtle" colorInterpolationFilters="sRGB" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves={1} seed={3} result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={8} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
)

// ─── Gradient background (same as Storybook decorator) ───────────────────────

const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden bg-slate-900 flex items-center justify-center p-12">
    <SvgFilters />
    {/* Colourful blobs required for blur/distortion to be visible */}
    <div className="absolute inset-0">
      <div className="absolute top-[-10%] left-[-5%]  w-[55%] h-[55%] rounded-full bg-violet-500/60 blur-[80px]" />
      <div className="absolute top-[30%]  right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-400/50    blur-[90px]" />
      <div className="absolute bottom-[-5%] left-[30%] w-[45%] h-[45%] rounded-full bg-rose-400/50    blur-[70px]" />
      <div className="absolute top-[55%]  left-[5%]  w-[35%] h-[35%] rounded-full bg-amber-400/40    blur-[60px]" />
    </div>
    <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-4xl">
      {children}
    </div>
  </div>
)

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Card: StoryObj = {
  name: 'Card (.lg .lg-card)',
  render: () => (
    <Background>
      <div className="lg lg-card" style={{ width: 340 }}>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-lg">🫀</div>
            <div>
              <p className="text-sm font-semibold text-white/90">Patient Overview</p>
              <p className="text-xs text-white/55">James Wilson · Room 4B</p>
            </div>
          </div>
          <div className="flex gap-2">
            {[['72', 'BPM'], ['98%', 'SpO₂'], ['36.7', '°C']].map(([v, l]) => (
              <div key={l} className="flex-1 bg-white/10 rounded-xl p-3 text-center">
                <p className="text-xl font-bold text-white">{v}</p>
                <p className="text-[10px] text-white/55 uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-white/40 text-xs font-mono">
        {'<div class="lg lg-card">…</div>'}
      </p>
    </Background>
  ),
}

export const Pill: StoryObj = {
  name: 'Pill (.lg .lg-pill)',
  render: () => (
    <Background>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="lg lg-pill">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-white/90">3 active alerts</span>
        </div>
        <div className="lg lg-pill">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-sm font-medium text-white/90">2 pending labs</span>
        </div>
        <div className="lg lg-pill">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span className="text-sm font-medium text-white/90">Vitals normal</span>
        </div>
      </div>
    </Background>
  ),
}

export const Nav: StoryObj = {
  name: 'Navigation bar (.lg .lg-nav)',
  render: () => (
    <Background>
      <div
        className="lg lg-nav"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '0 1.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <span className="text-white font-semibold text-sm relative z-10">MediTrack</span>
        <div className="flex gap-4 relative z-10">
          {['Patients', 'Appointments', 'Records'].map((item) => (
            <a key={item} href="#" className="text-sm text-white/70 hover:text-white/95 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </Background>
  ),
}

export const Button: StoryObj = {
  name: 'Button (.lg .lg-btn)',
  render: () => (
    <Background>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="lg lg-btn lg-rounded-full px-6">
          <span className="relative z-10 text-white/90 font-medium">View Records</span>
        </button>
        <button className="lg lg-btn">
          <span className="relative z-10 text-white/90 font-medium">Schedule Visit</span>
        </button>
        <button className="lg lg-btn lg-rounded-lg px-6">
          <span className="relative z-10 text-white/90 font-medium">+ Add Patient</span>
        </button>
      </div>
    </Background>
  ),
}

export const KitchenSink: StoryObj = {
  name: 'Kitchen sink — full app layout',
  render: () => (
    <Background>
      {/* Nav */}
      <div
        className="lg lg-nav"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '0 1.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <span className="text-white font-semibold relative z-10">MediTrack</span>
        <div className="flex gap-3 relative z-10">
          <button className="lg lg-pill" style={{ padding: '0.25rem 0.875rem' }}>
            <span className="text-xs text-white/80">ICU</span>
          </button>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        <div className="lg lg-card" style={{ width: 280 }}>
          <div className="relative z-10">
            <p className="text-xs text-white/55 mb-1">Today's admissions</p>
            <p className="text-3xl font-bold text-white">14</p>
            <p className="text-xs text-emerald-400 mt-1">↑ 3 vs yesterday</p>
          </div>
        </div>
        <div className="lg lg-card" style={{ width: 280 }}>
          <div className="relative z-10">
            <p className="text-xs text-white/55 mb-1">Pending labs</p>
            <p className="text-3xl font-bold text-white">7</p>
            <p className="text-xs text-amber-400 mt-1">2 critical</p>
          </div>
        </div>
      </div>

      {/* Input */}
      <input
        className="lg-input"
        placeholder="Search patients…"
        style={{ width: 340, color: 'white' }}
      />

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="lg lg-btn">
          <span className="relative z-10 text-white/90 font-medium">New Appointment</span>
        </button>
        <button className="lg lg-btn lg-elevated">
          <span className="relative z-10 text-white/90 font-medium">Emergency Admit</span>
        </button>
      </div>
    </Background>
  ),
}

export const CSSOnlyHtmlSnippet: StoryObj = {
  name: '📋 Copy-paste HTML snippet',
  render: () => (
    <div className="p-8 bg-slate-950 min-h-screen font-mono">
      <h2 className="text-white text-lg font-bold mb-6">liquid-glass.css — Copy-paste HTML</h2>
      <pre className="text-emerald-400 text-xs leading-relaxed overflow-auto whitespace-pre">
{`<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="liquid-glass.css">

<!-- 2. Paste this SVG ONCE in <body> (before any .lg element) -->
<svg id="lg-filters" aria-hidden="true" focusable="false"
     style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none"
     xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lg-distort"
            color-interpolation-filters="sRGB"
            x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise"
                    baseFrequency="0.009 0.009"
                    numOctaves="1" seed="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise"
                         scale="16"
                         xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="lg-distort-subtle"
            color-interpolation-filters="sRGB"
            x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise"
                    baseFrequency="0.012 0.012"
                    numOctaves="1" seed="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise"
                         scale="8"
                         xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>

<!-- 3. Apply classes to any element -->

<!-- Card -->
<div class="lg lg-card">
  <p>Content</p>
</div>

<!-- Nav -->
<nav class="lg lg-nav" style="position:sticky;top:0">…</nav>

<!-- Pill -->
<span class="lg lg-pill">3 alerts</span>

<!-- Button -->
<button class="lg lg-btn">Tap me</button>

<!-- Input -->
<input class="lg-input" placeholder="Search…">

<!-- Bottom sheet -->
<div class="lg lg-sheet" style="position:fixed;bottom:0;left:0;right:0">…</div>

<!-- Blur modifiers: lg-blur-xs | lg-blur-sm | lg-blur-lg | lg-blur-xl -->
<!-- Shadow modifiers: lg-elevated | lg-flat -->
<!-- Radius modifiers: lg-rounded-sm | lg-rounded-md | lg-rounded-lg | lg-rounded-full -->
<!-- Animation: lg-spring | lg-animate-appear | lg-animate-slide-up -->

<!-- GPU notes:
  • backdrop-filter runs on the GPU compositor — no layout, no paint
  • transform:translateZ(0) + will-change:backdrop-filter = own layer
  • feTurbulence feDisplacementMap = GPU rasterised in Firefox/WebKit
  • Chrome: ignores url() in backdrop-filter → graceful blur+saturate fallback
-->`}
      </pre>
    </div>
  ),
}
