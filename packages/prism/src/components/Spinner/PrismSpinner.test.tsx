import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrismSpinner } from './PrismSpinner'

describe('PrismSpinner', () => {
  it('renders an svg with role="status"', () => {
    const { getByRole } = render(<PrismSpinner />)
    expect(getByRole('status')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    const { getByLabelText } = render(<PrismSpinner />)
    expect(getByLabelText('Loading')).toBeInTheDocument()
  })

  it('applies md size classes by default', () => {
    const { getByRole } = render(<PrismSpinner />)
    expect(getByRole('status')).toHaveClass('h-6', 'w-6')
  })

  it('applies sm size classes', () => {
    const { getByRole } = render(<PrismSpinner size="sm" />)
    expect(getByRole('status')).toHaveClass('h-4', 'w-4')
  })

  it('applies lg size classes', () => {
    const { getByRole } = render(<PrismSpinner size="lg" />)
    expect(getByRole('status')).toHaveClass('h-8', 'w-8')
  })

  it('forwards className', () => {
    const { getByRole } = render(<PrismSpinner className="text-primary" />)
    expect(getByRole('status')).toHaveClass('text-primary')
  })
})
