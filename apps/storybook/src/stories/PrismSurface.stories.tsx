import type { Meta, StoryObj } from '@storybook/react'
import { PrismSurface } from '@nkmnhan/prism'

const meta: Meta<typeof PrismSurface> = {
  title: 'Foundation / PrismSurface',
  component: PrismSurface,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismSurface>

export const Default: Story = {
  args: { children: 'Glass Surface', className: 'w-64 h-32 flex items-center justify-center' },
}
export const Elevated: Story = {
  args: { elevated: true, children: 'Elevated', className: 'w-64 h-32 flex items-center justify-center' },
}
export const SmBlur: Story = {
  args: { blur: 'sm', children: 'Subtle Blur', className: 'w-64 h-32 flex items-center justify-center' },
}
export const MdBlur: Story = {
  args: { blur: 'md', children: 'Medium Blur', className: 'w-64 h-32 flex items-center justify-center' },
}
