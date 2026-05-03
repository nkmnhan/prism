import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PrismBadge } from '@nkmnhan/prism'

const meta: Meta<typeof PrismBadge> = {
  title: 'Primitives / PrismBadge',
  component: PrismBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismBadge>

export const Default: Story = { args: { children: 'Default', variant: 'default' } }
export const Primary: Story = { args: { children: 'Primary', variant: 'primary' } }
export const Success: Story = { args: { children: 'Active', variant: 'success' } }
export const Warning: Story = { args: { children: 'Pending', variant: 'warning' } }
export const Destructive: Story = { args: { children: 'Error', variant: 'destructive' } }
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PrismBadge variant="default">Default</PrismBadge>
      <PrismBadge variant="primary">Primary</PrismBadge>
      <PrismBadge variant="success">Active</PrismBadge>
      <PrismBadge variant="warning">Pending</PrismBadge>
      <PrismBadge variant="destructive">Error</PrismBadge>
    </div>
  ),
}
