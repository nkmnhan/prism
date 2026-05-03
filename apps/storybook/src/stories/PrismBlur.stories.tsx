import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PrismBlur } from '@nkmnhan/prism'

const meta: Meta<typeof PrismBlur> = {
  title: 'Foundation / PrismBlur',
  component: PrismBlur,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismBlur>

export const Default: Story = {
  args: { children: 'Blur Wrapper', className: 'w-48 h-24 flex items-center justify-center text-foreground font-medium' },
}

export const LayeredGlass: Story = {
  render: () => (
    <div className="relative w-96 h-64 rounded-2xl overflow-hidden">
      {/* Content behind the glass */}
      <div className="absolute inset-0 flex items-center justify-center gap-6 p-6">
        <div className="w-20 h-20 rounded-full bg-indigo-500 opacity-80" />
        <div className="w-16 h-16 rounded-full bg-purple-400 opacity-70" />
        <div className="w-24 h-24 rounded-full bg-pink-400 opacity-60" />
      </div>
      {/* Glass overlay */}
      <PrismBlur className="absolute inset-0 flex items-center justify-center text-foreground font-semibold text-lg">
        Blurred Layer
      </PrismBlur>
    </div>
  ),
}
