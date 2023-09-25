import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SigninDto } from './dto/signin-dto'
import { SignupDto } from './dto/signup-dto'
import { IsPublic } from 'src/shared/decorators/IsPublic'
import { ForgetPasswordDto } from './dto/forget-password-dto'
import { ResetPasswordDto } from './dto/reset-password-dto'
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId'
import { isResetPassword } from 'src/shared/decorators/IsResetPassword'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    const { email, password } = signinDto
    return this.authService.signin({ email, password })
  }

  @IsPublic()
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto)
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('forget-password')
  forgetPassword(@Body() forgetPassword: ForgetPasswordDto) {
    return this.authService.forgetPassword(forgetPassword)
  }

  @isResetPassword()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('reset-password')
  resetPassword(@ActiveUserId() userId: string, @Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(userId, resetPasswordDto)
  }
}
