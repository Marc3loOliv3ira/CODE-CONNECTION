import { LoginForm } from '../components/organisms/LoginForm'
import { AuthTemplate } from '../components/templates/AuthTemplate'

export function LoginPage() {
  return (
    <AuthTemplate
      bannerAlt="Pessoa usando o Code Connect em uma interface digital verde"
      bannerSrc="/banner-login.png"
    >
      <LoginForm />
    </AuthTemplate>
  )
}
