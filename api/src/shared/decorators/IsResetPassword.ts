import { SetMetadata } from '@nestjs/common'

export const IS_RESET_PASSWORD = 'IS_RESET_PASSWORD'

export const isResetPassword = () => SetMetadata(IS_RESET_PASSWORD, true)
