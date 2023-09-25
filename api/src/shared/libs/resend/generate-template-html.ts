import { env } from 'src/shared/config/env'

interface Options {
  email: string
  token: string
}

export function generateRecoverPasswordTemplateHtml({ email, token }: Options) {
  return `
    <p>Olá, ${email}.</p>
    <p>Aqui está o seu link para recuperação de senha:</p>
    <p>${env.frontendUrl}/reset-password?t=${token}</p>
    <p>(Este link expira em 5 minutos)</p>

  `
}