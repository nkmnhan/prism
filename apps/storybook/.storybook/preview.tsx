import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/styles/app.css'

/* Apple HIG mesh gradient backgrounds — liquid glass needs vivid content behind it */
const LIGHT_GRADIENT = `
  radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,102,241,0.25) 0%, transparent 60%),
  radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,85,247,0.20) 0%, transparent 55%),
  radial-gradient(ellipse 70% 60% at 10% 80%, rgba(34,211,238,0.20) 0%, transparent 55%),
  radial-gradient(ellipse 50% 50% at 90% 85%, rgba(244,114,182,0.18) 0%, transparent 55%),
  linear-gradient(160deg, #e8f0fe 0%, #f3e8ff 40%, #fdf2f8 70%, #e0f7fa 100%)
`.trim()

const DARK_GRADIENT = `
  radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,102,241,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,85,247,0.40) 0%, transparent 55%),
  radial-gradient(ellipse 70% 60% at 10% 80%, rgba(34,211,238,0.30) 0%, transparent 55%),
  radial-gradient(ellipse 50% 50% at 90% 85%, rgba(244,114,182,0.25) 0%, transparent 55%),
  linear-gradient(160deg, #0f0f1a 0%, #1a1035 40%, #0d1f37 70%, #0f1a1a 100%)
`.trim()

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark'
      document.documentElement.classList.toggle('dark', isDark)

      return (
        <div
          className="relative min-h-screen overflow-hidden text-foreground"
          style={{ background: isDark ? DARK_GRADIENT : LIGHT_GRADIENT }}
        >
          <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
            <Story />
          </div>
        </div>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / Dark',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun',  title: 'Light' },
          { value: 'dark',  icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
}

export default preview
