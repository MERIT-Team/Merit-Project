import { IsEmail, IsInt, IsNotEmpty, Max, Min } from '@nestjs/class-validator';

export class CheckOTPDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  @Min(100000)
  @Max(100000 - 1)
  otp: number;
}
