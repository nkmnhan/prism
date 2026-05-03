import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrismBlur } from './PrismBlur'

describe('PrismBlur', () => {
  it('renders children', () => {
    const { getByText } = render(<PrismBlur>content</PrismBlur>)
    expect(getByText('content')).toBeInTheDocument()
  })

  it('applies md blur by default', () => {
    const { container } = render(<PrismBlur>x</PrismBlur>)
    expect(container.firstChild).toHaveClass('backdrop-blur-[20px]')
  })

  it('applies lg blur when specified', () => {
    const { container } = render(<PrismBlur blur="lg">x</PrismBlur>)
    expect(container.firstChild).toHaveClass('backdrop-blur-[40px]')
  })

  it('does not apply prism-surface class (PrismBlur is a pure blur wrapper)', () => {
    const { container } = render(<PrismBlur>x</PrismBlur>)
    expect(container.firstChild).not.toHaveClass('prism-surface')
  })

  it('forwards className', () => {
    const { container } = render(<PrismBlur className="extra">x</PrismBlur>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards HTML attributes', () => {
    const { container } = render(<PrismBlur role="region">x</PrismBlur>)
    expect(container.firstChild).toHaveAttribute('role', 'region')
  })
})
