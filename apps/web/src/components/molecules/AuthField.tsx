import type { InputHTMLAttributes } from 'react'
import { Input } from '../atoms/Input'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function AuthField({ id, label, ...inputProps }: AuthFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="auth-field">
      <label className="auth-field__label" htmlFor={fieldId}>
        {label}
      </label>
      <Input id={fieldId} {...inputProps} />
    </div>
  )
}
