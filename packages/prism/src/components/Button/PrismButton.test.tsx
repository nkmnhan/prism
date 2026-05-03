import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PrismButton } from './PrismButton'

describe('PrismButton', () => {
  it('renders children', () => {
    const { getByRole } = render(<PrismButton>Click</PrismButton>)
    expect(getByRole('button', { name: 'Click' })).toBeInTheDocument()
  })

  it('applies prism-button base class', () => {
    const { getByRole } = render(<PrismButton>Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('prism-button')
  })

  it('applies primary variant class by default', () => {
    const { getByRole } = render(<PrismButton>Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('bg-primary')
  })

  it('applies secondary variant class', () => {
    const { getByRole } = render(<PrismButton variant="secondary">Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('prism-surface')
  })

  it('applies ghost variant class', () => {
    const { getByRole } = render(<PrismButton variant="ghost">Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('text-foreground')
    expect(getByRole('button')).not.toHaveClass('bg-primary')
  })

  it('applies destructive variant class', () => {
    const { getByRole } = render(<PrismButton variant="destructive">Delete</PrismButton>)
    expect(getByRole('button')).toHaveClass('bg-destructive')
  })

  it('applies md size class by default (h-[44px])', () => {
    const { getByRole } = render(<PrismButton>Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('h-[44px]')
  })

  it('applies sm size class', () => {
    const { getByRole } = render(<PrismButton size="sm">Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('h-9')
  })

  it('applies lg size class', () => {
    const { getByRole } = render(<PrismButton size="lg">Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('h-12')
  })

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<PrismButton disabled>Click</PrismButton>)
    expect(getByRole('button')).toBeDisabled()
  })

  it('is disabled when loading', () => {
    const { getByRole } = render(<PrismButton loading>Click</PrismButton>)
    expect(getByRole('button')).toBeDisabled()
  })

  it('shows spinner when loading', () => {
    const { getByRole } = render(<PrismButton loading>Click</PrismButton>)
    expect(getByRole('status')).toBeInTheDocument()
  })

  it('does not show spinner when not loading', () => {
    const { queryByRole } = render(<PrismButton>Click</PrismButton>)
    expect(queryByRole('status')).not.toBeInTheDocument()
  })

  it('fires onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByRole } = render(<PrismButton onClick={handleClick}>Click</PrismButton>)
    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn()
    const { getByRole } = render(<PrismButton disabled onClick={handleClick}>Click</PrismButton>)
    fireEvent.click(getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('forwards className', () => {
    const { getByRole } = render(<PrismButton className="custom">Click</PrismButton>)
    expect(getByRole('button')).toHaveClass('custom')
  })
})
