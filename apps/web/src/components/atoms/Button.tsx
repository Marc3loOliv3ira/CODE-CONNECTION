import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  icon?: ReactNode
}

export function Button({ children, icon, className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} type={type} {...props}>
      <span>{children}</span>
      {icon ? <span className="button__icon">{icon}</span> : null}
    </button>
  )
}
