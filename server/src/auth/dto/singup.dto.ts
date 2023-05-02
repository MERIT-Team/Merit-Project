import { Injectable } from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from '@nestjs/class-validator';
import { UsersService } from 'src/users/users.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string): Promise<boolean> {
    const user = await this.usersService.findOneByEmail(email);
    return !user;
  }

  defaultMessage(): string {
    return 'Email already exists';
  }
}

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsEmailUniqueConstraint)
  email: string;
}
