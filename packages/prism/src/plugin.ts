import plugin from 'tailwindcss/plugin'

// All glass values are self-contained — no dependency on shadcn or any external design system.
// Colors come from --prism-glass-* CSS vars defined in prism.css (light/dark adaptive).
const prismPlugin = plugin(function ({ addComponents, addUtilities }) {
  addComponents({
    '.prism-surface': {
      'backdrop-filter': 'blur(var(--prism-blur-xl)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-xl)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-bg)',
      'border': '1px solid var(--prism-glass-border)',
      'border-radius': 'var(--prism-radius-lg)',
      'box-shadow': 'var(--prism-shadow), var(--prism-specular)',
      'isolation': 'isolate',
    },
    '.prism-card': {
      'backdrop-filter': 'blur(var(--prism-blur-md)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-md)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-bg)',
      'border': '1px solid var(--prism-glass-border)',
      'border-radius': 'var(--prism-radius-lg)',
      'box-shadow': 'var(--prism-shadow), var(--prism-specular)',
      'padding': '1.5rem',
      'isolation': 'isolate',
    },
    '.prism-nav': {
      'backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-nav-bg)',
      'border-bottom': '1px solid var(--prism-glass-border)',
      'box-shadow': 'var(--prism-shadow)',
      'isolation': 'isolate',
    },
    '.prism-sheet': {
      'backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-sheet-bg)',
      'border-radius': 'var(--prism-radius-sheet) var(--prism-radius-sheet) 0 0',
      'border-top': '1px solid var(--prism-glass-border)',
      'box-shadow': 'var(--prism-shadow-lg), var(--prism-specular)',
      'isolation': 'isolate',
    },
    '.prism-input': {
      'backdrop-filter': 'blur(var(--prism-blur-sm)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-sm)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-input-bg)',
      'border': '1px solid var(--prism-glass-border)',
      'border-radius': 'var(--prism-radius-md)',
      'min-height': 'var(--prism-touch-target)',
      'isolation': 'isolate',
    },
    '.prism-tab-bar': {
      'backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      '-webkit-backdrop-filter': 'blur(var(--prism-blur-lg)) saturate(var(--prism-saturate))',
      'background': 'var(--prism-glass-nav-bg)',
      'border-top': '1px solid var(--prism-glass-border)',
      'box-shadow': '0 -4px 24px rgb(0 0 0 / 0.06)',
      'isolation': 'isolate',
    },
    // PrismGlass: base material only — backdrop-filter is applied inline
    // because it includes a dynamic SVG filter url(#id) that cannot be
    // expressed as a static CSS class.
    '.prism-glass': {
      'position': 'relative',
      'overflow': 'hidden',
      'background': 'var(--prism-glass-bg)',
      'border': '1px solid var(--prism-glass-border)',
      'isolation': 'isolate',
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
