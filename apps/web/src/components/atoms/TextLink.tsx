import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  icon?: ReactNode
}

export function TextLink({ children, icon, className = '', ...props }: TextLinkProps) {
  return (
    <a className={`text-link ${className}`} {...props}>
      <span>{children}</span>
      {icon ? <span className="text-link__icon">{icon}</span> : null}
    </a>
  )
}
