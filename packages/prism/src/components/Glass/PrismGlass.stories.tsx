import type { Meta, StoryObj } from '@storybook/react'
import { PrismGlass } from './PrismGlass'

const meta: Meta<typeof PrismGlass> = {
  title: 'Prism/PrismGlass',
  component: PrismGlass,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '**GPU-only, zero per-frame JS.**',
          '',
          'SVG `feTurbulence` + `feDisplacementMap` injected once into `<body>`.',
          '`backdrop-filter: url() blur() saturate()` runs entirely on the GPU compositor.',
          'Chrome ignores `url()` → graceful blur+saturate fallback.',
          '',
          'For pure HTML/CSS (no React) see `liquid-glass.css`.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    blur:         { control: { type: 'range', min: 0, max: 60, step: 1 } },
    brightness:   { control: { type: 'range', min: 0.5, max: 2, step: 0.05 } },
    saturate:     { control: { type: 'range', min: 1, max: 4, step: 0.1 } },
    distortion:   { control: 'inline-radio', options: ['none', 'subtle', 'standard'] },
    borderRadius: { control: { type: 'range', min: 0, max: 60, step: 2 } },
  },
}

export default meta
type Story = StoryObj<typeof PrismGlass>

function CardContent() {
  return (
    <div className="flex flex-col gap-3 p-6 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-lg">🫀</div>
        <div>
          <p className="text-sm font-semibold text-white/90">Patient Overview</p>
          <p className="text-xs text-white/60">James Wilson · Room 4B</p>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {[['72', 'BPM'], ['98%', 'SpO₂'], ['36.7', '°C']].map(([val, label]) => (
          <div key={label} className="flex-1 bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-white">{val}</p>
            <p className="text-[10px] text-white/60 uppercase tracking-wide">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {
    blur: 20,
    brightness: 1.15,
    saturate: 1.8,
    distortion: 'standard',
    borderRadius: 20,
    style: { width: 320 },
  },
  render: (args) => (
    <PrismGlass {...args}>
      <CardContent />
    </PrismGlass>
  ),
}

export const NoDistortion: Story = {
  name: 'Blur only (no url() — Chrome safe)',
  args: { ...Default.args, distortion: 'none' },
  render: Default.render,
}

export const Subtle: Story = {
  name: 'Subtle distortion',
  args: { ...Default.args, distortion: 'subtle' },
  render: Default.render,
}

export const Pill: Story = {
  name: 'Pill chip',
  args: {
    blur: 12,
    brightness: 1.2,
    saturate: 2,
    distortion: 'subtle',
    borderRadius: 999,
  },
  render: (args) => (
    <PrismGlass {...args}>
      <div className="flex items-center gap-2 px-4 py-2 relative z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-sm font-medium text-white/90">3 active alerts</span>
      </div>
    </PrismGlass>
  ),
}

export const AllDistortionVariants: Story = {
  name: 'All distortion variants',
  render: () => (
    <div className="flex flex-wrap gap-6 items-start justify-center">
      {(['none', 'subtle', 'standard'] as const).map((d) => (
        <PrismGlass key={d} distortion={d} borderRadius={20} style={{ width: 200 }}>
          <div className="p-4 relative z-10 text-center">
            <p className="text-xs text-white/60 mb-1">distortion="{d}"</p>
            <p className="text-lg text-white font-semibold">Glass</p>
          </div>
        </PrismGlass>
      ))}
    </div>
  ),
}
