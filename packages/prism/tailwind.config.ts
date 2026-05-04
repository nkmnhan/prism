import type { Config } from 'tailwindcss'
import prismPlugin from './src/plugin'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  plugins: [prismPlugin],
}

export default config
