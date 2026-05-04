import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

// Kitchen sink — one story per CSS class from plugin.ts
// Proves ALL prism-* classes load and render correctly.

function ClassDemo({ className, label, description }: {
  className: string
  label: string
  description: string
}) {
  return (
    <div className={className}>
      <p className="font-semibold text-slate-800 text-sm">{label}</p>
      <p className="text-xs text-slate-600 mt-0.5">{description}</p>
    </div>
  )
}

const meta: Meta = {
  title: 'Prism/Glass Classes',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const PrismSurface: Story = {
  name: '.prism-surface',
  render: () => (
    <ClassDemo
      className="prism-surface shadow-glass w-72 p-6"
      label=".prism-surface"
      description="blur(80px) saturate(1.8) — base glass surface"
    />
  ),
}

export const PrismCard: Story = {
  name: '.prism-card',
  render: () => (
    <ClassDemo
      className="prism-card shadow-glass w-72"
      label=".prism-card"
      description="blur(20px) saturate(1.8) + 1.5rem padding"
    />
  ),
}

export const PrismNav: Story = {
  name: '.prism-nav',
  render: () => (
    <div className="w-full">
      <div className="prism-nav px-6 py-4 flex items-center gap-4">
        <span className="font-semibold text-slate-800 text-sm">.prism-nav</span>
        <span className="text-xs text-slate-500">blur(40px) — navigation bar</span>
      </div>
    </div>
  ),
}

export const PrismSheet: Story = {
  name: '.prism-sheet',
  render: () => (
    <div className="w-full relative">
      <div className="prism-sheet px-6 py-6 w-full">
        <div className="w-12 h-1 rounded-full bg-slate-400/40 mx-auto mb-4" />
        <p className="font-semibold text-slate-800 text-sm">.prism-sheet</p>
        <p className="text-xs text-slate-500 mt-0.5">blur(40px) — bottom sheet, rounded top corners</p>
      </div>
    </div>
  ),
}

export const PrismInput: Story = {
  name: '.prism-input',
  render: () => (
    <div className="w-72 space-y-2">
      <label className="text-xs font-medium text-slate-700 block">Patient Name</label>
      <input
        className="prism-input w-full px-4 text-slate-800 text-sm placeholder:text-slate-400 outline-none"
        placeholder="Search patients…"
      />
      <p className="text-xs text-slate-500">.prism-input — blur(10px), min-height 44px</p>
    </div>
  ),
}

export const PrismTabBar: Story = {
  name: '.prism-tab-bar',
  render: () => (
    <div className="w-full">
      <div className="prism-tab-bar px-6 py-3 flex justify-around">
        {['Patients', 'Schedule', 'Records', 'Clara'].map((item) => (
          <div key={item} className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-md bg-slate-400/40" />
            <span className="text-xs text-slate-600">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 py-2">.prism-tab-bar — blur(40px)</p>
    </div>
  ),
}

export const ShadowGlass: Story = {
  name: '.shadow-glass utility',
  render: () => (
    <div className="flex gap-6 flex-wrap justify-center">
      <div className="prism-card w-48">
        <p className="text-sm font-medium text-slate-800">No shadow</p>
        <p className="text-xs text-slate-500">prism-card only</p>
      </div>
      <div className="prism-card shadow-glass w-48">
        <p className="text-sm font-medium text-slate-800">.shadow-glass</p>
        <p className="text-xs text-slate-500">drop shadow + specular top</p>
      </div>
      <div className="prism-card shadow-glass-lg w-48">
        <p className="text-sm font-medium text-slate-800">.shadow-glass-lg</p>
        <p className="text-xs text-slate-500">larger shadow + stronger specular</p>
      </div>
    </div>
  ),
}

export const AllTogether: Story = {
  name: 'All Classes — Overview',
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      <div className="prism-nav px-6 py-4 flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-purple-400/50" />
        <span className="font-semibold text-slate-800">MediTrack</span>
      </div>

      <div className="flex gap-4 px-4 flex-wrap">
        <div className="prism-card shadow-glass flex-1 min-w-[180px]">
          <p className="text-xs text-slate-500">Today's Patients</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">24</p>
        </div>
        <div className="prism-card shadow-glass flex-1 min-w-[180px]">
          <p className="text-xs text-slate-500">Pending Records</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">7</p>
        </div>
        <div className="prism-card shadow-glass flex-1 min-w-[180px]">
          <p className="text-xs text-slate-500">Alerts</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">3</p>
        </div>
      </div>

      <div className="px-4">
        <input
          className="prism-input w-full px-4 text-slate-800 text-sm placeholder:text-slate-400 outline-none"
          placeholder="Search patients, records…"
        />
      </div>

      <div className="prism-sheet px-6 py-4">
        <div className="w-10 h-1 rounded-full bg-slate-400/40 mx-auto mb-3" />
        <p className="text-sm font-semibold text-slate-800">Bottom Sheet</p>
        <p className="text-xs text-slate-500 mt-0.5">Slides up from bottom, heavy blur</p>
      </div>
    </div>
  ),
}
