import type { InputHTMLAttributes } from 'react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`checkbox ${className}`}>
      <input className="checkbox__input" type="checkbox" {...props} />
      <span className="checkbox__control" aria-hidden="true" />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}
