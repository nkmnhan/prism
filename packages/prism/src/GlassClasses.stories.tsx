import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

/**
 * Kitchen sink — one story per CSS class from liquid-glass.css + prism.css.
 * Background and SVG filters are provided by the global Storybook decorator.
 * Text uses white/opacity so it reads on both light and dark glass surfaces.
 */
const meta: Meta = {
  title: 'Prism/Glass Classes',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'CSS utility classes for Apple HIG liquid glass surfaces. Import `prism.css` or `liquid-glass.css` — zero React dependency.',
      },
    },
  },
}
export default meta
type Story = StoryObj

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-medium tracking-widest uppercase opacity-60 mt-1">{children}</p>
)

/* ── Surface ─────────────────────────────────────────────────────────────── */

export const PrismSurface: Story = {
  name: '.prism-surface',
  render: () => (
    <div className="prism-surface w-72 p-6 flex flex-col gap-1">
      <p className="font-semibold text-sm">.prism-surface</p>
      <Label>backdrop-blur(80px) saturate(1.8)</Label>
    </div>
  ),
}

export const PrismCard: Story = {
  name: '.prism-card',
  render: () => (
    <div className="prism-card w-72 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-base">🏥</div>
        <div>
          <p className="font-semibold text-sm">.prism-card</p>
          <Label>blur(20px) + 1.5rem padding</Label>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {[['72', 'BPM'], ['98%', 'SpO₂'], ['36.7', '°C']].map(([v, l]) => (
          <div key={l} className="flex-1 bg-white/10 rounded-xl p-2 text-center">
            <p className="text-lg font-bold">{v}</p>
            <p className="text-[9px] uppercase tracking-wide opacity-55">{l}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}

/* ── Navigation ──────────────────────────────────────────────────────────── */

export const PrismNav: Story = {
  name: '.prism-nav',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <div className="prism-nav px-5 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm">MediTrack</span>
        <div className="flex gap-5">
          {['Patients', 'Records', 'Clara'].map((item) => (
            <a key={item} href="#" className="text-xs opacity-70 hover:opacity-100 transition-opacity">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="px-5 py-4 opacity-50 text-xs text-center">
        .prism-nav — blur(40px), bottom border
      </div>
    </div>
  ),
}

/* ── Sheet ────────────────────────────────────────────────────────────────── */

export const PrismSheet: Story = {
  name: '.prism-sheet',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <div className="prism-sheet px-6 py-5">
        <div className="w-9 h-1 rounded-full bg-white/30 mx-auto mb-4" />
        <p className="font-semibold text-sm">.prism-sheet</p>
        <Label>blur(40px) — rounded top corners, top border</Label>
        <div className="mt-4 space-y-3">
          {['Schedule appointment', 'View lab results', 'Message clinician'].map((action) => (
            <div key={action} className="flex items-center gap-3 bg-white/8 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-lg bg-white/15" />
              <span className="text-sm">{action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/* ── Input ────────────────────────────────────────────────────────────────── */

export const PrismInput: Story = {
  name: '.prism-input',
  render: () => (
    <div className="w-72 space-y-3">
      <label className="block text-xs font-medium opacity-70">Patient Name</label>
      <input
        className="prism-input px-4 text-sm placeholder:opacity-40"
        placeholder="Search patients…"
        style={{ color: 'inherit' }}
      />
      <input
        className="prism-input px-4 text-sm placeholder:opacity-40"
        placeholder="Date of birth"
        style={{ color: 'inherit' }}
      />
      <Label>.prism-input — blur(10px), min-height 44px</Label>
    </div>
  ),
}

/* ── Tab bar ──────────────────────────────────────────────────────────────── */

export const PrismTabBar: Story = {
  name: '.prism-tab-bar',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <div className="prism-tab-bar px-2 py-2 flex justify-around">
        {[
          { icon: '🏥', label: 'Patients',     active: true },
          { icon: '📅', label: 'Schedule',     active: false },
          { icon: '📋', label: 'Records',      active: false },
          { icon: '✨', label: 'Clara',        active: false },
        ].map(({ icon, label, active }) => (
          <button
            key={label}
            className={[
              'flex flex-col items-center gap-1 px-4 py-1 rounded-xl min-w-[60px]',
              'transition-opacity',
              active ? 'opacity-100' : 'opacity-45',
            ].join(' ')}
          >
            <span className="text-xl">{icon}</span>
            <span className={['text-[10px] font-medium', active ? 'text-blue-400' : ''].join(' ')}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  ),
}

/* ── Segment control (.lg classes) ───────────────────────────────────────── */

export const LgSegment: Story = {
  name: '.lg-segment (segmented control)',
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
            >
              {item}
            </button>
          ))}
        </div>
        <Label>.lg-segment — HIG segmented control, 32px touch targets</Label>
      </div>
    )
  },
}

/* ── Shadow utilities ─────────────────────────────────────────────────────── */

export const ShadowGlass: Story = {
  name: '.shadow-glass utilities',
  render: () => (
    <div className="flex gap-5 flex-wrap justify-center">
      <div className="prism-card w-44">
        <p className="text-sm font-medium">No shadow</p>
        <Label>prism-card only</Label>
      </div>
      <div className="prism-card shadow-glass w-44">
        <p className="text-sm font-medium">.shadow-glass</p>
        <Label>drop + specular top</Label>
      </div>
      <div className="prism-card shadow-glass-lg w-44">
        <p className="text-sm font-medium">.shadow-glass-lg</p>
        <Label>larger + stronger</Label>
      </div>
    </div>
  ),
}

/* ── All together ─────────────────────────────────────────────────────────── */

export const AllTogether: Story = {
  name: 'All Classes — App Overview',
  render: () => (
    <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Nav */}
      <div className="prism-nav px-5 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm">MediTrack</span>
        <div className="flex gap-4">
          <div className="w-7 h-7 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-3 px-4">
        {[
          { label: 'Patients today', value: '24', sub: '↑ 3', color: 'text-emerald-400' },
          { label: 'Pending labs',   value: '7',  sub: '2 critical', color: 'text-amber-400' },
          { label: 'Alerts',         value: '3',  sub: 'Review',     color: 'text-rose-400' },
        ].map(({ label, value, sub, color }) => (
          <div key={label} className="prism-card shadow-glass flex-1 p-4">
            <p className="text-[10px] opacity-55 mb-1">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-[10px] mt-1 ${color}`}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Search input */}
      <div className="px-4">
        <input
          className="prism-input px-4 text-sm placeholder:opacity-40"
          placeholder="🔍  Search patients, records…"
          style={{ color: 'inherit' }}
        />
      </div>

      {/* Sheet */}
      <div className="prism-sheet mx-4 rounded-2xl px-5 py-4">
        <p className="text-sm font-semibold">Recent Activity</p>
        {['Lab results ready — James Wilson', 'New appointment — Sarah Chen'].map((item) => (
          <p key={item} className="text-xs opacity-60 mt-2">{item}</p>
        ))}
      </div>

      {/* Tab bar */}
      <div className="prism-tab-bar px-2 py-2 flex justify-around">
        {[
          { icon: '🏥', label: 'Patients',  active: true  },
          { icon: '📅', label: 'Schedule',  active: false },
          { icon: '📋', label: 'Records',   active: false },
          { icon: '✨', label: 'Clara',     active: false },
        ].map(({ icon, label, active }) => (
          <div key={label} className={['flex flex-col items-center gap-0.5 px-3 py-1', active ? '' : 'opacity-40'].join(' ')}>
            <span className="text-lg">{icon}</span>
            <span className={['text-[10px] font-medium', active ? 'text-blue-400' : ''].join(' ')}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
