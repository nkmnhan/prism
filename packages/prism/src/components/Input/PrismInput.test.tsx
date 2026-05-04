import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrismInput } from './PrismInput'

describe('PrismInput', () => {
  it('renders an input element', () => {
    const { getByRole } = render(<PrismInput />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('applies prism-input class', () => {
    const { getByRole } = render(<PrismInput />)
    expect(getByRole('textbox')).toHaveClass('prism-input')
  })

  it('renders label when provided', () => {
    const { getByLabelText } = render(<PrismInput label="Email" />)
    expect(getByLabelText('Email')).toBeInTheDocument()
  })

  it('label is linked to input via htmlFor', () => {
    const { getByText, getByRole } = render(<PrismInput label="Email" />)
    const label = getByText('Email')
    const input = getByRole('textbox')
    expect(label).toHaveAttribute('for', input.id)
  })

  it('renders error message', () => {
    const { getByText } = render(<PrismInput error="Required field" />)
    expect(getByText('Required field')).toBeInTheDocument()
  })

  it('marks input invalid when error is present', () => {
    const { getByRole } = render(<PrismInput error="Bad" />)
    expect(getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('renders hint when provided and no error', () => {
    const { getByText } = render(<PrismInput hint="Use your work email" />)
    expect(getByText('Use your work email')).toBeInTheDocument()
  })

  it('does not render hint when error is also present', () => {
    const { queryByText } = render(<PrismInput error="Bad" hint="Use work email" />)
    expect(queryByText('Use work email')).not.toBeInTheDocument()
  })

  it('forwards className to input element', () => {
    const { getByRole } = render(<PrismInput className="my-input" />)
    expect(getByRole('textbox')).toHaveClass('my-input')
  })

  it('forwards placeholder', () => {
    const { getByPlaceholderText } = render(<PrismInput placeholder="Enter email" />)
    expect(getByPlaceholderText('Enter email')).toBeInTheDocument()
  })
})
