import { describe, it, expect } from 'vitest'
import plugin from './plugin'

describe('prism tailwind plugin', () => {
  it('exports a defined value', () => {
    expect(plugin).toBeDefined()
  })

  it('plugin has a handler function (tailwind v3 plugin shape)', () => {
    const pluginObj = plugin as unknown as { handler: unknown }
    expect(typeof pluginObj.handler).toBe('function')
  })
})
