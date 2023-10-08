import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { env } from 'src/shared/config/env'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: env.emailUser,
          pass: env.emailPassword
        }
      }
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
