import type { Meta, StoryObj } from '@storybook/react'
import { PrismSurface } from './PrismSurface'

const meta: Meta<typeof PrismSurface> = {
  title: 'Prism/PrismSurface',
  component: PrismSurface,
  tags: ['autodocs'],
  argTypes: {
    blur: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Backdrop blur intensity',
    },
    elevated: {
      control: 'boolean',
      description: 'Adds glass shadow + specular highlight',
    },
  },
}

export default meta
type Story = StoryObj<typeof PrismSurface>

export const Default: Story = {
  args: {
    blur: 'xl',
    elevated: false,
    children: (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-800">Glass Surface</h2>
        <p className="mt-1 text-sm text-slate-600">
          backdrop-filter: blur(80px) saturate(1.8)
        </p>
      </div>
    ),
  },
}

export const SmallBlur: Story = {
  name: 'Blur — sm (10px)',
  args: {
    blur: 'sm',
    children: (
      <div className="p-6">
        <p className="text-sm text-slate-700">Subtle 10px blur — inputs</p>
      </div>
    ),
  },
}

export const MediumBlur: Story = {
  name: 'Blur — md (20px)',
  args: {
    blur: 'md',
    children: (
      <div className="p-6">
        <p className="text-sm text-slate-700">Standard 20px blur — cards</p>
      </div>
    ),
  },
}

export const LargeBlur: Story = {
  name: 'Blur — lg (40px)',
  args: {
    blur: 'lg',
    children: (
      <div className="p-6">
        <p className="text-sm text-slate-700">Heavy 40px blur — nav / sheets</p>
      </div>
    ),
  },
}

export const Elevated: Story = {
  args: {
    blur: 'xl',
    elevated: true,
    children: (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-800">Elevated Surface</h2>
        <p className="mt-1 text-sm text-slate-600">
          shadow-glass: drop shadow + white specular top edge
        </p>
      </div>
    ),
  },
}

export const PatientCard: Story = {
  name: 'Example — Patient Card',
  args: {
    blur: 'xl',
    elevated: true,
    className: 'w-80',
    children: (
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-400/60 flex items-center justify-center text-white font-semibold text-sm">
            JD
          </div>
          <div>
            <p className="font-semibold text-slate-800">John Doe</p>
            <p className="text-xs text-slate-500">DOB: 1985-03-14 · MRN 00482</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-slate-500">Heart Rate</p>
            <p className="font-semibold text-slate-800">72 bpm</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">SpO₂</p>
            <p className="font-semibold text-slate-800">98%</p>
          </div>
        </div>
      </div>
    ),
  },
}
