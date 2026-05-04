import React from 'react'
import type { Preview, Decorator } from '@storybook/react'
import '../src/styles/storybook.css'

/*
 * Apple HIG mesh gradient backgrounds — liquid glass requires vivid content
 * behind the element for backdrop-filter to produce any visible effect.
 * These gradients approximate the colorful wallpapers Apple uses in demos.
 */
const LIGHT_GRADIENT = [
  'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,102,241,0.28) 0%, transparent 60%)',
  'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,85,247,0.22) 0%, transparent 55%)',
  'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(34,211,238,0.22) 0%, transparent 55%)',
  'radial-gradient(ellipse 50% 50% at 90% 85%, rgba(244,114,182,0.20) 0%, transparent 55%)',
  'linear-gradient(160deg, #e8f0fe 0%, #f3e8ff 40%, #fdf2f8 70%, #e0f7fa 100%)',
].join(', ')

const DARK_GRADIENT = [
  'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,102,241,0.50) 0%, transparent 60%)',
  'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,85,247,0.45) 0%, transparent 55%)',
  'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(34,211,238,0.35) 0%, transparent 55%)',
  'radial-gradient(ellipse 50% 50% at 90% 85%, rgba(244,114,182,0.28) 0%, transparent 55%)',
  'linear-gradient(160deg, #0f0f1a 0%, #1a1035 40%, #0d1f37 70%, #0f1a1a 100%)',
].join(', ')

/* SVG filters injected once — the lens distortion effect */
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

const GlassBackgroundDecorator: Decorator = (Story, context) => {
  const isDark = context.globals?.theme === 'dark'
  document.documentElement.classList.toggle('dark', isDark)

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: isDark ? DARK_GRADIENT : LIGHT_GRADIENT }}
    >
      <SvgFilters />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <Story />
      </div>
    </div>
  )
}

const preview: Preview = {
  decorators: [GlassBackgroundDecorator],

  parameters: {
    backgrounds: { disable: true },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      name:         'Theme',
      description:  'Light / Dark',
      defaultValue: 'light',
      toolbar: {
        icon:     'circlehollow',
        items: [
          { value: 'light', icon: 'sun',  title: 'Light' },
          { value: 'dark',  icon: 'moon', title: 'Dark'  },
        ],
        showName: true,
      },
    },
  },
}

export default preview
