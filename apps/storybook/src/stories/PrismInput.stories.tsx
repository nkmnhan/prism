import type { Meta, StoryObj } from '@storybook/react'
import { PrismInput } from '@nkmnhan/prism'

const meta: Meta<typeof PrismInput> = {
  title: 'Primitives / PrismInput',
  component: PrismInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismInput>

export const Default: Story = {
  args: { placeholder: 'Enter text…', className: 'w-72' },
}
export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', className: 'w-72' },
}
export const WithHint: Story = {
  args: { label: 'Username', hint: 'Letters and numbers only', className: 'w-72' },
}
export const WithError: Story = {
  args: { label: 'Email', error: 'Invalid email address', value: 'not-an-email', className: 'w-72' },
}
export const Disabled: Story = {
  args: { label: 'Locked', value: 'Read only', disabled: true, className: 'w-72' },
}
