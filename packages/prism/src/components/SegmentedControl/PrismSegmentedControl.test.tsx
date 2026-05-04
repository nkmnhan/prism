import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PrismSegmentedControl } from './PrismSegmentedControl'

const OPTIONS = [
  { value: 'day',   label: 'Day' },
  { value: 'week',  label: 'Week' },
  { value: 'month', label: 'Month' },
]

describe('PrismSegmentedControl', () => {
  it('renders all option labels', () => {
    const { getByText } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={() => {}} />
    )
    expect(getByText('Day')).toBeInTheDocument()
    expect(getByText('Week')).toBeInTheDocument()
    expect(getByText('Month')).toBeInTheDocument()
  })

  it('marks selected option with aria-checked="true"', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="week" onChange={() => {}} />
    )
    expect(getByRole('radio', { name: 'Week' })).toHaveAttribute('aria-checked', 'true')
  })

  it('marks non-selected options with aria-checked="false"', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="week" onChange={() => {}} />
    )
    expect(getByRole('radio', { name: 'Day' })).toHaveAttribute('aria-checked', 'false')
  })

  it('calls onChange with the clicked option value', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={handleChange} />
    )
    fireEvent.click(getByRole('radio', { name: 'Month' }))
    expect(handleChange).toHaveBeenCalledWith('month')
  })

  it('applies prism-surface to the active segment', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={() => {}} />
    )
    expect(getByRole('radio', { name: 'Day' })).toHaveClass('prism-surface')
  })

  it('does not apply prism-surface to inactive segments', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={() => {}} />
    )
    expect(getByRole('radio', { name: 'Week' })).not.toHaveClass('prism-surface')
  })

  it('renders a group container', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={() => {}} />
    )
    expect(getByRole('group')).toBeInTheDocument()
  })

  it('forwards className to the group container', () => {
    const { getByRole } = render(
      <PrismSegmentedControl options={OPTIONS} value="day" onChange={() => {}} className="my-control" />
    )
    expect(getByRole('group')).toHaveClass('my-control')
  })
})
