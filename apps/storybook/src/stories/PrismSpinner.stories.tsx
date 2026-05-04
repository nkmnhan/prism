import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PrismSpinner } from '@nkmnhan/prism'

const meta: Meta<typeof PrismSpinner> = {
  title: 'Primitives / PrismSpinner',
  component: PrismSpinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismSpinner>

export const Small: Story = { args: { size: 'sm' } }
export const Medium: Story = { args: { size: 'md' } }
export const Large: Story = { args: { size: 'lg' } }
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <PrismSpinner size="sm" />
      <PrismSpinner size="md" />
      <PrismSpinner size="lg" />
    </div>
  ),
}
