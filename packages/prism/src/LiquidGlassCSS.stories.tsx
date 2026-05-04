import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

/**
 * Pure HTML + CSS liquid glass — zero JavaScript, GPU-only.
 *
 * The global Storybook decorator provides:
 *   • Colorful mesh-gradient background (required for backdrop-filter to be visible)
 *   • SVG <filter id="lg-distort"> lens distortion (feTurbulence + feDisplacementMap)
 *
 * Stories here just render the .lg class elements directly.
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
          '',
          '**Improvements over existing glass libraries** (e.g. `liquidglass-tailwind`):',
          '- `saturate()` in backdrop-filter — Apple vivid glass, not washed-out blur',
          '- Blue-violet depth shadow `rgba(31,38,135,…)` — matches visionOS ambient',
          '- HIG blur levels: 6/12/20/40/80px (not flat 16px)',
          '- Specular highlights: `::before` diagonal + `::after` rim glow',
          '- `prefers-reduced-transparency` accessibility fallback',
          '- Segment control component',
        ].join('\n'),
      },
    },
  },
}

export default meta

/* ── Card ────────────────────────────────────────────────────────────────── */

export const Card: StoryObj = {
  name: 'Card (.lg .lg-card)',
  render: () => (
    <div className="lg lg-card" style={{ width: 340 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">🫀</div>
        <div>
          <p className="text-sm font-semibold opacity-90">Patient Overview</p>
          <p className="text-xs opacity-50">James Wilson · Room 4B</p>
        </div>
      </div>
      <div className="flex gap-2">
        {[['72', 'BPM'], ['98%', 'SpO₂'], ['36.7', '°C']].map(([v, l]) => (
          <div key={l} className="flex-1 bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xl font-bold">{v}</p>
            <p className="text-[10px] uppercase tracking-wide opacity-50 mt-0.5">{l}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}

/* ── Pill ─────────────────────────────────────────────────────────────────── */

export const Pill: StoryObj = {
  name: 'Pill (.lg .lg-pill)',
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="lg lg-pill">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
        <span className="text-sm font-medium opacity-90">3 active alerts</span>
      </div>
      <div className="lg lg-pill">
        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
        <span className="text-sm font-medium opacity-90">2 pending labs</span>
      </div>
      <div className="lg lg-pill">
        <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
        <span className="text-sm font-medium opacity-90">Vitals normal</span>
      </div>
    </div>
  ),
}

/* ── Navigation bar ─────────────────────────────────────────────────────── */
/* No position:absolute — render inline so it doesn't overlap other content */

export const Nav: StoryObj = {
  name: 'Navigation bar (.lg .lg-nav)',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <div
        className="lg lg-nav"
        style={{ padding: '0 1.25rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <span className="font-semibold text-sm opacity-90">MediTrack</span>
        <div className="flex gap-5">
          {['Patients', 'Appointments', 'Records'].map((item) => (
            <a key={item} href="#" className="text-xs opacity-60 hover:opacity-95 transition-opacity" style={{ textDecoration: 'none', color: 'inherit' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs opacity-30 mt-3">.lg .lg-nav — blur(40px), bottom edge only</p>
    </div>
  ),
}

/* ── Button ──────────────────────────────────────────────────────────────── */

export const Button: StoryObj = {
  name: 'Button (.lg .lg-btn)',
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="lg lg-btn lg-rounded-full" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        View Records
      </button>
      <button className="lg lg-btn">
        Schedule Visit
      </button>
      <button className="lg lg-btn lg-rounded-lg" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        + Add Patient
      </button>
    </div>
  ),
}

/* ── Segment control ─────────────────────────────────────────────────────── */

export const Segment: StoryObj = {
  name: 'Segmented control (.lg-segment)',
  render: () => {
    const [active, setActive] = React.useState(0)
    const items = ['Day', 'Week', 'Month']
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="lg-segment">
          {items.map((item, i) => (
            <button
              key={item}
              className={['lg-segment-item', i === active ? 'active' : ''].join(' ')}
              aria-selected={i === active}
              onClick={() => setActive(i)}
              style={{ color: 'inherit' }}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-xs opacity-40">
          Stolen from liquidglass-tailwind's .glass-segment — enhanced with saturate() + specular
        </p>
      </div>
    )
  },
}

/* ── Kitchen sink — real app layout ─────────────────────────────────────── */
/* Column layout, no position:absolute, constrained width */

export const KitchenSink: StoryObj = {
  name: 'Kitchen sink — full app layout',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Nav — inline, not absolute */}
      <div
        className="lg lg-nav"
        style={{ padding: '0 1.25rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <span className="font-semibold text-sm opacity-90">MediTrack</span>
        <button className="lg lg-pill" style={{ padding: '0.25rem 0.75rem' }}>
          <span className="text-xs opacity-80">ICU Ward</span>
        </button>
      </div>

      {/* Segment control */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="lg-segment">
          {['Today', 'Week', 'Month'].map((item, i) => (
            <div key={item} className={['lg-segment-item', i === 0 ? 'active' : ''].join(' ')} style={{ color: 'inherit' }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '0.75rem', padding: '0 0.5rem' }}>
        <div className="lg lg-card" style={{ flex: 1, padding: '1rem' }}>
          <p className="text-xs opacity-50 mb-1">Today's admissions</p>
          <p className="text-3xl font-bold">14</p>
          <p className="text-xs text-emerald-400 mt-1">↑ 3 vs yesterday</p>
        </div>
        <div className="lg lg-card" style={{ flex: 1, padding: '1rem' }}>
          <p className="text-xs opacity-50 mb-1">Pending labs</p>
          <p className="text-3xl font-bold">7</p>
          <p className="text-xs text-amber-400 mt-1">2 critical</p>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: '0 0.5rem' }}>
        <input
          className="lg-input"
          placeholder="🔍  Search patients…"
          style={{ color: 'inherit' }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', padding: '0 0.5rem' }}>
        <button className="lg lg-btn" style={{ flex: 1 }}>New Appointment</button>
        <button className="lg lg-btn lg-elevated" style={{ flex: 1 }}>Emergency Admit</button>
      </div>

      {/* Tab bar — inline at bottom */}
      <div
        className="lg lg-tab-bar"
        style={{ padding: '0.5rem 0.25rem', display: 'flex', justifyContent: 'space-around' }}
      >
        {[
          { icon: '🏥', label: 'Patients',  active: true  },
          { icon: '📅', label: 'Schedule',  active: false },
          { icon: '📋', label: 'Records',   active: false },
          { icon: '✨', label: 'Clara',     active: false },
        ].map(({ icon, label, active }) => (
          <div
            key={label}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '2px', padding: '0.25rem 1rem', opacity: active ? 1 : 0.4,
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{icon}</span>
            <span style={{ fontSize: '10px', fontWeight: 500, color: active ? '#60a5fa' : 'inherit' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}

/* ── Copy-paste HTML snippet ─────────────────────────────────────────────── */

export const CSSOnlyHtmlSnippet: StoryObj = {
  name: '📋 Copy-paste HTML snippet',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="p-8 rounded-2xl bg-black/40" style={{ fontFamily: 'monospace' }}>
      <h2 className="text-white text-base font-bold mb-5">liquid-glass.css — Copy-paste HTML</h2>
      <pre className="text-emerald-400 text-xs leading-relaxed overflow-auto whitespace-pre">
{`<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="liquid-glass.css">

<!-- 2. Paste this SVG ONCE in <body> (before any .lg element) -->
<svg id="lg-filters" aria-hidden="true" focusable="false"
     style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none"
     xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lg-distort" x="-20%" y="-20%" width="140%" height="140%"
            color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="1" seed="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="lg-distort-subtle" x="-10%" y="-10%" width="120%" height="120%"
            color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="1" seed="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"  xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>

<!-- 3. Add classes -->
<div class="lg lg-card">Card content</div>
<nav class="lg lg-nav" style="position:sticky;top:0">Nav bar</nav>
<span class="lg lg-pill">3 alerts</span>
<button class="lg lg-btn">Action</button>
<input class="lg-input" placeholder="Search…">

<!-- Bottom sheet -->
<div class="lg lg-sheet" style="position:fixed;bottom:0;left:0;right:0">Sheet</div>

<!-- Segmented control (stolen from liquidglass-tailwind, enhanced) -->
<div class="lg-segment">
  <button class="lg-segment-item active" aria-selected="true">Day</button>
  <button class="lg-segment-item">Week</button>
  <button class="lg-segment-item">Month</button>
</div>

<!-- Blue-violet depth shadows (rgba 31,38,135 = Apple ambient) -->
<!-- Specular: ::before diagonal + ::after rim glow                -->
<!-- Accessibility: prefers-reduced-transparency + prefers-reduced-motion -->
<!-- Modifiers: lg-blur-xs/sm/lg/xl | lg-elevated | lg-flat       -->
<!-- Radii:     lg-rounded-sm/md/lg/xl/full                        -->
<!-- Animate:   lg-spring | lg-animate-appear | lg-animate-slide-up -->`}
      </pre>
    </div>
  ),
}
