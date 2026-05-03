import type { Meta, StoryObj } from '@storybook/react'
import { PrismBlur } from '@nkmnhan/prism'

const meta: Meta<typeof PrismBlur> = {
  title: 'Foundation / PrismBlur',
  component: PrismBlur,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismBlur>

export const Default: Story = {
  args: { children: 'Blur Wrapper', className: 'w-48 h-24 flex items-center justify-center' },
}
