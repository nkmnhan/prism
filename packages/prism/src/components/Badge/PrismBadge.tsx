import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

export type PrismBadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'destructive'

const VARIANT_CLASSES: Record<PrismBadgeVariant, string> = {
  default:     'bg-muted text-muted-foreground',
  primary:     'bg-primary/15 text-primary',
  success:     'bg-green-500/15 text-green-700 dark:text-green-400',
  warning:     'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400',
  destructive: 'bg-destructive/15 text-destructive',
}

export interface PrismBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: PrismBadgeVariant
}

export function PrismBadge({
  variant = 'default',
  className,
  children,
  ...props
}: PrismBadgeProps) {
  return (
    <span
      className={clsxMerge(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        VARIANT_CLASSES[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
