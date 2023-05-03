import { PartialType } from '@nestjs/mapped-types';
import { SignupDto } from 'src/auth/dto/singup.dto';

export class CreateUserDto extends PartialType(SignupDto) {}
