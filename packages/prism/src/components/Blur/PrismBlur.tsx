import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

const BLUR_CLASSES = {
  sm: 'backdrop-blur-[10px]',
  md: 'backdrop-blur-[20px]',
  lg: 'backdrop-blur-[40px]',
  xl: 'backdrop-blur-[80px]',
} as const

export interface PrismBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: keyof typeof BLUR_CLASSES
}

export function PrismBlur({
  blur = 'md',
  className,
  children,
  ...props
}: PrismBlurProps) {
  return (
    <div
      className={clsxMerge(
        BLUR_CLASSES[blur],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
