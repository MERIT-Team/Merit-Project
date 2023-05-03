import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  repassword: string;
}
