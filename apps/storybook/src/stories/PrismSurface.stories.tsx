import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PrismSurface } from '@nkmnhan/prism'

const meta: Meta<typeof PrismSurface> = {
  title: 'Foundation / PrismSurface',
  component: PrismSurface,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismSurface>

export const Default: Story = {
  args: { children: 'Glass Surface', className: 'w-64 h-32 flex items-center justify-center text-foreground font-medium' },
}
export const Elevated: Story = {
  args: { elevated: true, children: 'Elevated Surface', className: 'w-64 h-32 flex items-center justify-center text-foreground font-medium' },
}
export const Card: Story = {
  render: () => (
    <PrismSurface className="w-80 p-6 flex flex-col gap-3">
      <h3 className="text-foreground font-semibold text-base">Liquid Glass Card</h3>
      <p className="text-muted-foreground text-sm">
        Backdrop blur blends this surface with the vibrant gradient behind it —
        the core of Apple HIG liquid glass.
      </p>
    </PrismSurface>
  ),
}
export const BlurLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      {(['sm', 'md', 'lg', 'xl'] as const).map((blur) => (
        <PrismSurface key={blur} blur={blur} className="w-72 h-16 flex items-center justify-center text-foreground text-sm font-medium">
          blur-{blur} ({blur === 'sm' ? '10px' : blur === 'md' ? '20px' : blur === 'lg' ? '40px' : '80px'})
        </PrismSurface>
      ))}
    </div>
  ),
}
