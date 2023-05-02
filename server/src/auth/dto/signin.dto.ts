import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
