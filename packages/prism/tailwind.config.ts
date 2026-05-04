import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card:        'hsl(var(--card)       / <alpha-value>)',
        border:      'hsl(var(--border)     / <alpha-value>)',
        input:       'hsl(var(--input)      / <alpha-value>)',
        muted: {
          DEFAULT:    'hsl(var(--muted)            / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary)            / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
      },
    },
  },
}

export default config
