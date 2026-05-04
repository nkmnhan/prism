import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PrismCheckbox } from './PrismCheckbox'

describe('PrismCheckbox', () => {
  it('renders a checkbox input', () => {
    const { getByRole } = render(<PrismCheckbox checked={false} onChange={() => {}} />)
    expect(getByRole('checkbox')).toBeInTheDocument()
  })

  it('is checked when checked prop is true', () => {
    const { getByRole } = render(<PrismCheckbox checked={true} onChange={() => {}} />)
    expect(getByRole('checkbox')).toBeChecked()
  })

  it('is not checked when checked prop is false', () => {
    const { getByRole } = render(<PrismCheckbox checked={false} onChange={() => {}} />)
    expect(getByRole('checkbox')).not.toBeChecked()
  })

  it('calls onChange with true when clicked while unchecked', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<PrismCheckbox checked={false} onChange={handleChange} />)
    fireEvent.click(getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('calls onChange with false when clicked while checked', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<PrismCheckbox checked={true} onChange={handleChange} />)
    fireEvent.click(getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('is disabled when disabled prop is set', () => {
    const { getByRole } = render(
      <PrismCheckbox checked={false} onChange={() => {}} disabled />
    )
    expect(getByRole('checkbox')).toBeDisabled()
  })

  it('renders label text when provided', () => {
    const { getByLabelText } = render(
      <PrismCheckbox checked={false} onChange={() => {}} label="Remember me" />
    )
    expect(getByLabelText('Remember me')).toBeInTheDocument()
  })

  it('forwards className', () => {
    const { container } = render(
      <PrismCheckbox checked={false} onChange={() => {}} className="wrap-class" />
    )
    expect(container.firstChild).toHaveClass('wrap-class')
  })
})
