import type { Meta, StoryObj } from '@storybook/react'
import { PrismBlur } from './PrismBlur'

const meta: Meta<typeof PrismBlur> = {
  title: 'Prism/PrismBlur',
  component: PrismBlur,
  tags: ['autodocs'],
  argTypes: {
    blur: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Backdrop blur intensity — pure blur, no surface styling',
    },
  },
}

export default meta
type Story = StoryObj<typeof PrismBlur>

export const Default: Story = {
  args: {
    blur: 'md',
    className: 'rounded-2xl p-6',
    children: (
      <div>
        <p className="text-sm font-medium text-slate-700">Pure Backdrop Blur</p>
        <p className="text-xs text-slate-500 mt-1">No background — just blur(20px)</p>
      </div>
    ),
  },
}

export const SmBlur: Story = {
  name: 'sm — 10px',
  args: {
    blur: 'sm',
    className: 'rounded-2xl p-6',
    children: <p className="text-sm text-slate-700">blur(10px) — subtle inputs</p>,
  },
}

export const MdBlur: Story = {
  name: 'md — 20px',
  args: {
    blur: 'md',
    className: 'rounded-2xl p-6',
    children: <p className="text-sm text-slate-700">blur(20px) — standard cards</p>,
  },
}

export const LgBlur: Story = {
  name: 'lg — 40px',
  args: {
    blur: 'lg',
    className: 'rounded-2xl p-6',
    children: <p className="text-sm text-slate-700">blur(40px) — heavy nav/sheets</p>,
  },
}

export const XlBlur: Story = {
  name: 'xl — 80px',
  args: {
    blur: 'xl',
    className: 'rounded-2xl p-6',
    children: <p className="text-sm text-slate-700">blur(80px) — full-screen overlay</p>,
  },
}
