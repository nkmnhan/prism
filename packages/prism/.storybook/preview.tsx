import React from 'react'
import type { Preview, Decorator } from '@storybook/react'
import '../src/styles/storybook.css'

// Vivid gradient canvas — liquid glass requires rich colorful content behind it.
// backdrop-filter: blur() on a flat uniform surface produces no visible effect.
const GlassBackgroundDecorator: Decorator = (Story) => (
  <div className="relative min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-900">
    {/* Ambient color blobs — absolute so they paint BEHIND story content (DOM order) */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-400/50 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-teal-400/45 blur-3xl" />
      <div className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] rounded-full bg-amber-400/40 blur-3xl" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-400/30 blur-3xl" />
    </div>

    {/* Story content — relative stacking context places it above the blobs */}
    <div className="relative flex items-center justify-center min-h-screen p-16">
      <Story />
    </div>
  </div>
)

const preview: Preview = {
  decorators: [GlassBackgroundDecorator],

  parameters: {
    backgrounds: {
      disable: true, // We provide our own gradient canvas
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
}

export default preview
