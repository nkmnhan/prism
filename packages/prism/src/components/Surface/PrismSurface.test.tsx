import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrismSurface } from './PrismSurface'

describe('PrismSurface', () => {
  it('renders children', () => {
    const { getByText } = render(<PrismSurface>hello</PrismSurface>)
    expect(getByText('hello')).toBeInTheDocument()
  })

  it('applies prism-surface class', () => {
    const { container } = render(<PrismSurface>x</PrismSurface>)
    expect(container.firstChild).toHaveClass('prism-surface')
  })

  it('applies xl blur by default', () => {
    const { container } = render(<PrismSurface>x</PrismSurface>)
    expect(container.firstChild).toHaveClass('backdrop-blur-[80px]')
  })

  it('applies sm blur when specified', () => {
    const { container } = render(<PrismSurface blur="sm">x</PrismSurface>)
    expect(container.firstChild).toHaveClass('backdrop-blur-[10px]')
  })

  it('applies md blur when specified', () => {
    const { container } = render(<PrismSurface blur="md">x</PrismSurface>)
    expect(container.firstChild).toHaveClass('backdrop-blur-[20px]')
  })

  it('applies shadow-glass when elevated', () => {
    const { container } = render(<PrismSurface elevated>x</PrismSurface>)
    expect(container.firstChild).toHaveClass('shadow-glass')
  })

  it('does not apply shadow-glass by default', () => {
    const { container } = render(<PrismSurface>x</PrismSurface>)
    expect(container.firstChild).not.toHaveClass('shadow-glass')
  })

  it('forwards className (caller override wins)', () => {
    const { container } = render(<PrismSurface className="my-extra">x</PrismSurface>)
    expect(container.firstChild).toHaveClass('my-extra')
  })

  it('forwards arbitrary HTML attributes', () => {
    const { container } = render(<PrismSurface data-testid="surface">x</PrismSurface>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'surface')
  })
})
