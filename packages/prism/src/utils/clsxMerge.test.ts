import { describe, it, expect } from 'vitest'
import { clsxMerge } from './clsxMerge'

describe('clsxMerge', () => {
  it('combines class strings', () => {
    expect(clsxMerge('a', 'b')).toBe('a b')
  })

  it('resolves tailwind conflicts (last wins)', () => {
    expect(clsxMerge('px-4', 'px-2')).toBe('px-2')
  })

  it('filters falsy values', () => {
    expect(clsxMerge('a', false && 'b', undefined, null, 'c')).toBe('a c')
  })

  it('handles conditional classes', () => {
    const isActive = true
    expect(clsxMerge('base', isActive && 'active')).toBe('base active')
  })
})
