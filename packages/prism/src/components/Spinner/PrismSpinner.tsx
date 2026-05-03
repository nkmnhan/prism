import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

export type PrismSpinnerSize = 'sm' | 'md' | 'lg'

const SIZE_CLASSES: Record<PrismSpinnerSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export interface PrismSpinnerProps {
  size?: PrismSpinnerSize
  className?: string
}

export function PrismSpinner({ size = 'md', className }: PrismSpinnerProps) {
  return (
    <svg
      role="status"
      aria-label="Loading"
      className={clsxMerge('animate-spin text-current', SIZE_CLASSES[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
