import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class ForgetPasswordDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
    email: string
}
