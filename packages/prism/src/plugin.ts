import plugin from 'tailwindcss/plugin'

const prismPlugin = plugin(function ({ addComponents, addUtilities }) {
  addComponents({
    '.prism-surface': {
      'backdrop-filter': 'blur(var(--prism-blur-xl))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-xl))',
      'background-color': 'hsl(var(--card) / var(--prism-surface-opacity))',
      'border': '1px solid hsl(var(--border) / var(--prism-border-opacity))',
      'border-radius': 'var(--prism-radius-lg)',
    },
    '.prism-card': {
      'backdrop-filter': 'blur(var(--prism-blur-md))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-md))',
      'background-color': 'hsl(var(--card) / var(--prism-surface-opacity))',
      'border': '1px solid hsl(var(--border) / var(--prism-border-opacity))',
      'border-radius': 'var(--prism-radius-lg)',
      'padding': '1.5rem',
    },
    '.prism-nav': {
      'backdrop-filter': 'blur(var(--prism-blur-lg))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg))',
      'background-color': 'hsl(var(--background) / var(--prism-nav-opacity))',
      'border-bottom': '1px solid hsl(var(--border) / var(--prism-border-opacity))',
    },
    '.prism-sheet': {
      'backdrop-filter': 'blur(var(--prism-blur-lg))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg))',
      'background-color': 'hsl(var(--background) / var(--prism-sheet-opacity))',
      'border-radius': 'var(--prism-radius-sheet) var(--prism-radius-sheet) 0 0',
      'border-top': '1px solid hsl(var(--border) / var(--prism-border-opacity))',
    },
    '.prism-input': {
      'backdrop-filter': 'blur(var(--prism-blur-sm))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-sm))',
      'background-color': 'hsl(var(--input) / 0.5)',
      'border': '1px solid hsl(var(--border) / 0.3)',
      'border-radius': 'var(--prism-radius-md)',
      'min-height': 'var(--prism-touch-target)',
    },
    '.prism-tab-bar': {
      'backdrop-filter': 'blur(var(--prism-blur-lg))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg))',
      'background-color': 'hsl(var(--background) / var(--prism-nav-opacity))',
      'border-top': '1px solid hsl(var(--border) / var(--prism-border-opacity))',
    },
  })

  addUtilities({
    '.shadow-glass': {
      'box-shadow': 'var(--prism-shadow), var(--prism-specular)',
    },
    '.shadow-glass-lg': {
      'box-shadow': 'var(--prism-shadow-lg), var(--prism-specular-strong)',
    },
    '.animate-prism-spring': {
      'transition-timing-function': 'var(--prism-spring)',
      'transition-duration': 'var(--prism-duration-base)',
    },
    '.animate-prism-ease': {
      'transition-timing-function': 'var(--prism-ease)',
      'transition-duration': 'var(--prism-duration-base)',
    },
  })
})

export default prismPlugin
