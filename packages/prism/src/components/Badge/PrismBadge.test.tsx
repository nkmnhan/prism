import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrismBadge } from './PrismBadge'

describe('PrismBadge', () => {
  it('renders children', () => {
    const { getByText } = render(<PrismBadge>Active</PrismBadge>)
    expect(getByText('Active')).toBeInTheDocument()
  })

  it('uses default variant class by default', () => {
    const { container } = render(<PrismBadge>Label</PrismBadge>)
    expect(container.firstChild).toHaveClass('bg-muted')
  })

  it('applies primary variant class', () => {
    const { container } = render(<PrismBadge variant="primary">New</PrismBadge>)
    expect(container.firstChild).toHaveClass('bg-primary/15', 'text-primary')
  })

  it('applies success variant class', () => {
    const { container } = render(<PrismBadge variant="success">Done</PrismBadge>)
    expect(container.firstChild).toHaveClass('text-green-700')
  })

  it('applies warning variant class', () => {
    const { container } = render(<PrismBadge variant="warning">Warn</PrismBadge>)
    expect(container.firstChild).toHaveClass('text-yellow-700')
  })

  it('applies destructive variant class', () => {
    const { container } = render(<PrismBadge variant="destructive">Error</PrismBadge>)
    expect(container.firstChild).toHaveClass('text-destructive')
  })

  it('forwards className', () => {
    const { container } = render(<PrismBadge className="extra">x</PrismBadge>)
    expect(container.firstChild).toHaveClass('extra')
  })
})
