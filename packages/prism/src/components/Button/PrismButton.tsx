import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'
import { PrismSpinner } from '../Spinner/PrismSpinner'

export type PrismButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
export type PrismButtonSize = 'sm' | 'md' | 'lg'

const VARIANT_CLASSES: Record<PrismButtonVariant, string> = {
  primary:     'bg-primary text-primary-foreground hover:opacity-90',
  secondary:   'prism-surface text-foreground hover:shadow-glass',
  ghost:       'text-foreground hover:bg-muted/50',
  destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
}

const SIZE_CLASSES: Record<PrismButtonSize, string> = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-[44px] px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export interface PrismButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PrismButtonVariant
  size?: PrismButtonSize
  loading?: boolean
}

export function PrismButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  ...props
}: PrismButtonProps) {
  return (
    <button
      className={clsxMerge(
        'prism-button',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <PrismSpinner size="sm" /> : children}
    </button>
  )
}
