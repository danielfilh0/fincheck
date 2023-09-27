import { forgetPassword } from './forget-password'
import { resetPassword } from './reset-password'
import { signin } from './signin'
import { signup } from './signup'

export const authService = {
  signup,
  signin,
  forgetPassword,
  resetPassword,
}
