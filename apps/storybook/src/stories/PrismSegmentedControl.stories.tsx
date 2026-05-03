import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { PrismSegmentedControl } from '@nkmnhan/prism'

const meta: Meta<typeof PrismSegmentedControl> = {
  title: 'Primitives / PrismSegmentedControl',
  component: PrismSegmentedControl,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismSegmentedControl>

const TIME_OPTIONS = [
  { value: 'day',   label: 'Day' },
  { value: 'week',  label: 'Week' },
  { value: 'month', label: 'Month' },
]

export const Default: Story = {
  args: { options: TIME_OPTIONS, value: 'day', onChange: () => {} },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('day')
    return (
      <div className="flex flex-col items-center gap-4">
        <PrismSegmentedControl options={TIME_OPTIONS} value={value} onChange={setValue} />
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>
    )
  },
}
