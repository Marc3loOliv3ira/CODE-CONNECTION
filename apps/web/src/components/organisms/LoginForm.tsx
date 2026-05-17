import type { FormEvent } from 'react'
import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { TextLink } from '../atoms/TextLink'
import { AuthField } from '../molecules/AuthField'
import { DividerText } from '../molecules/DividerText'
import { SocialAuthButton } from '../molecules/SocialAuthButton'

const socialProviders = [
  { label: 'Github', iconSrc: '/github.png' },
  { label: 'Gmail', iconSrc: '/gmail.png' },
]

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__intro">
        <h1>Login</h1>
        <p>Boas-vindas! Faca seu login.</p>
      </div>

      <div className="login-form__fields">
        <AuthField
          autoComplete="username"
          defaultValue="usuario123"
          label="Email ou usuario"
          name="identifier"
          type="text"
        />
        <AuthField
          autoComplete="current-password"
          defaultValue="123456"
          label="Senha"
          name="password"
          type="password"
        />
      </div>

      <div className="login-form__options">
        <Checkbox defaultChecked label="Lembrar-me" name="remember" />
        <TextLink href="#forgot-password">Esqueci a senha</TextLink>
      </div>

      <Button className="login-form__submit" icon="->" type="submit">
        Login
      </Button>

      <DividerText>ou entre com outras contas</DividerText>

      <div className="login-form__social" aria-label="Opcoes de login social">
        {socialProviders.map((provider) => (
          <SocialAuthButton key={provider.label} {...provider} />
        ))}
      </div>

      <div className="login-form__signup">
        <p>Ainda nao tem conta?</p>
        <TextLink className="login-form__signup-link" href="#signup" icon="+">
          Crie seu cadastro!
        </TextLink>
      </div>
    </form>
  )
}
