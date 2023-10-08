import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { env } from 'src/shared/config/env'

interface SendParams {
  to: string,
  msg: string,
  subject: string,
  isRecoverPass?: boolean
}

interface GenerateRecoverPasswordTemplateHtmlParams {
  email: string
  token: string
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  send({ to, msg, subject, isRecoverPass }: SendParams) {
    return this.mailerService.sendMail({
      to,
      from: 'danbsilva98@gmail.com',
      subject,
      html: isRecoverPass
        ? this.generateRecoverPasswordTemplateHtml({ email: to, token: msg })
        : msg,
    })
  }

  private generateRecoverPasswordTemplateHtml({ email, token }: GenerateRecoverPasswordTemplateHtmlParams) {
    return `
      <p>Olá, ${email}.</p>
      <p>Aqui está o seu link para recuperação de senha:</p>
      <p>${env.frontendUrl}/reset-password?t=${token}</p>
      <p>(Este link expira em 5 minutos)</p>
    `
  }
}
