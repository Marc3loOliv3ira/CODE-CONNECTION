import type { ButtonHTMLAttributes } from 'react'

type SocialAuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc: string
  label: string
}

export function SocialAuthButton({ iconSrc, label, className = '', type = 'button', ...props }: SocialAuthButtonProps) {
  return (
    <button className={`social-auth-button ${className}`} type={type} aria-label={`Entrar com ${label}`} {...props}>
      <img src={iconSrc} alt="" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}
