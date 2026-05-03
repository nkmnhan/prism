import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/styles/app.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f7' },
        { name: 'dark',  value: '#1c1c1e' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === '#1c1c1e'
      document.documentElement.classList.toggle('dark', isDark)
      return (
        <div className="min-h-screen p-8 text-foreground bg-background">
          <Story />
        </div>
      )
    },
  ],
}

export default preview
