import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { PrismCheckbox } from '@nkmnhan/prism'

const meta: Meta<typeof PrismCheckbox> = {
  title: 'Primitives / PrismCheckbox',
  component: PrismCheckbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PrismCheckbox>

export const Unchecked: Story = { args: { checked: false, label: 'Accept terms', onChange: () => {} } }
export const Checked: Story = { args: { checked: true, label: 'Accept terms', onChange: () => {} } }
export const Indeterminate: Story = { args: { checked: false, indeterminate: true, label: 'Select all', onChange: () => {} } }
export const Disabled: Story = { args: { checked: false, label: 'Disabled option', onChange: () => {}, disabled: true } }

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <PrismCheckbox checked={checked} onChange={setChecked} label="Remember me" />
  },
}
