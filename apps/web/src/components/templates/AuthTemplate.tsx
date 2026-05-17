import type { ReactNode } from 'react'

type AuthTemplateProps = {
  bannerAlt: string
  bannerSrc: string
  children: ReactNode
}

export function AuthTemplate({ bannerAlt, bannerSrc, children }: AuthTemplateProps) {
  return (
    <main className="auth-page">
      <section className="auth-shell" aria-label="Autenticacao Code Connect">
        <div className="auth-shell__banner">
          <img src={bannerSrc} alt={bannerAlt} />
        </div>
        <div className="auth-shell__content">{children}</div>
      </section>
    </main>
  )
}
