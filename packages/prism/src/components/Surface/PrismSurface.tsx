import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

const BLUR_CLASSES = {
  sm: 'backdrop-blur-[10px]',
  md: 'backdrop-blur-[20px]',
  lg: 'backdrop-blur-[40px]',
  xl: 'backdrop-blur-[80px]',
} as const

export interface PrismSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: keyof typeof BLUR_CLASSES
  elevated?: boolean
}

export function PrismSurface({
  blur = 'xl',
  elevated = false,
  className,
  children,
  ...props
}: PrismSurfaceProps) {
  return (
    <div
      className={clsxMerge(
        'prism-surface',
        BLUR_CLASSES[blur],
        elevated && 'shadow-glass',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
