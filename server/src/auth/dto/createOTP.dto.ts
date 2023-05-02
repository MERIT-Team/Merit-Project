import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class CreateOTPDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
