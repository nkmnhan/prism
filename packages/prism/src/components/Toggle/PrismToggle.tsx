import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

export type PrismToggleSize = 'sm' | 'md'

const SIZE = {
  sm: { track: 'w-8 h-5',  thumb: 'h-3.5 w-3.5', translate: 'translate-x-3' },
  md: { track: 'w-11 h-6', thumb: 'h-5 w-5',     translate: 'translate-x-5' },
} as const

export interface PrismToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  size?: PrismToggleSize
  className?: string
}

export function PrismToggle({
  checked,
  onChange,
  disabled = false,
  label,
  size = 'md',
  className,
}: PrismToggleProps) {
  return (
    <label
      className={clsxMerge(
        'flex items-center gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsxMerge(
          SIZE[size].track,
          'relative inline-flex shrink-0 rounded-full border-2 border-transparent',
          'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          checked ? 'bg-primary' : 'bg-muted'
        )}
      >
        <span
          className={clsxMerge(
            SIZE[size].thumb,
            'pointer-events-none inline-block rounded-full bg-white shadow-sm',
            'transition-transform duration-200',
            checked ? SIZE[size].translate : 'translate-x-0'
          )}
        />
      </button>
      {label && (
        <span className="text-sm text-foreground select-none">{label}</span>
      )}
    </label>
  )
}
