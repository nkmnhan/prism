import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PrismToggle } from './PrismToggle'

describe('PrismToggle', () => {
  it('renders with role="switch"', () => {
    const { getByRole } = render(<PrismToggle checked={false} onChange={() => {}} />)
    expect(getByRole('switch')).toBeInTheDocument()
  })

  it('sets aria-checked when checked', () => {
    const { getByRole } = render(<PrismToggle checked={true} onChange={() => {}} />)
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })

  it('sets aria-checked="false" when unchecked', () => {
    const { getByRole } = render(<PrismToggle checked={false} onChange={() => {}} />)
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'false')
  })

  it('calls onChange with true when toggled from off', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<PrismToggle checked={false} onChange={handleChange} />)
    fireEvent.click(getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('calls onChange with false when toggled from on', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<PrismToggle checked={true} onChange={handleChange} />)
    fireEvent.click(getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('does not fire onChange when disabled', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <PrismToggle checked={false} onChange={handleChange} disabled />
    )
    fireEvent.click(getByRole('switch'))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('is disabled when disabled prop is set', () => {
    const { getByRole } = render(
      <PrismToggle checked={false} onChange={() => {}} disabled />
    )
    expect(getByRole('switch')).toBeDisabled()
  })

  it('renders label text when provided', () => {
    const { getByText } = render(
      <PrismToggle checked={false} onChange={() => {}} label="Wi-Fi" />
    )
    expect(getByText('Wi-Fi')).toBeInTheDocument()
  })

  it('applies bg-primary when checked', () => {
    const { getByRole } = render(<PrismToggle checked={true} onChange={() => {}} />)
    expect(getByRole('switch')).toHaveClass('bg-primary')
  })

  it('applies bg-muted when unchecked', () => {
    const { getByRole } = render(<PrismToggle checked={false} onChange={() => {}} />)
    expect(getByRole('switch')).toHaveClass('bg-muted')
  })
})
