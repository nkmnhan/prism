import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { PrismToggle } from '@nkmnhan/prism'

const meta: Meta<typeof PrismToggle> = {
  title: 'Primitives / PrismToggle',
  component: PrismToggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismToggle>

export const Off: Story = { args: { checked: false, label: 'Wi-Fi', onChange: () => {} } }
export const On: Story = { args: { checked: true, label: 'Bluetooth', onChange: () => {} } }
export const Disabled: Story = { args: { checked: false, label: 'Airplane Mode', onChange: () => {}, disabled: true } }
export const Small: Story = { args: { checked: true, label: 'Notifications', onChange: () => {}, size: 'sm' } }

export const Interactive: Story = {
  render: () => {
    const [on, setOn] = useState(false)
    return <PrismToggle checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
  },
}
