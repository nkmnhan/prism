import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PrismButton } from '@nkmnhan/prism'

const meta: Meta<typeof PrismButton> = {
  title: 'Primitives / PrismButton',
  component: PrismButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismButton>

export const Primary: Story = { args: { children: 'Get Started', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Learn More', variant: 'secondary' } }
export const Ghost: Story = { args: { children: 'Cancel', variant: 'ghost' } }
export const Destructive: Story = { args: { children: 'Delete Account', variant: 'destructive' } }
export const Small: Story = { args: { children: 'Small', size: 'sm' } }
export const Large: Story = { args: { children: 'Large Action', size: 'lg' } }
export const Loading: Story = { args: { children: 'Saving…', loading: true } }
export const Disabled: Story = { args: { children: 'Unavailable', disabled: true } }
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <PrismButton variant="primary">Primary</PrismButton>
      <PrismButton variant="secondary">Secondary</PrismButton>
      <PrismButton variant="ghost">Ghost</PrismButton>
      <PrismButton variant="destructive">Destructive</PrismButton>
    </div>
  ),
}
