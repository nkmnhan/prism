import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

export interface PrismSegmentedOption<T extends string = string> {
  value: T
  label: string
}

export interface PrismSegmentedControlProps<T extends string = string> {
  options: PrismSegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  className?: string
}

export function PrismSegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  className,
}: PrismSegmentedControlProps<T>) {
  return (
    <div
      role="group"
      className={clsxMerge(
        'inline-flex items-center rounded-[var(--prism-radius-md)] bg-muted p-1 gap-1',
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(option.value)}
            className={clsxMerge(
              'px-3 py-1.5 text-sm font-medium rounded-[calc(var(--prism-radius-md)-2px)]',
              'transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              isSelected
                ? 'prism-surface shadow-sm text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
