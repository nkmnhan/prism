import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

export interface PrismCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  indeterminate?: boolean
  disabled?: boolean
  label?: string
  className?: string
}

export function PrismCheckbox({
  checked,
  onChange,
  indeterminate = false,
  disabled = false,
  label,
  className,
}: PrismCheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <label
      className={clsxMerge(
        'flex items-center gap-2 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        aria-label={label}
        className={clsxMerge(
          'h-4 w-4 rounded border border-border bg-transparent',
          'checked:bg-primary checked:border-primary',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
          'transition-colors duration-150'
        )}
      />
      {label && (
        <span className="text-sm text-foreground select-none">{label}</span>
      )}
    </label>
  )
}
