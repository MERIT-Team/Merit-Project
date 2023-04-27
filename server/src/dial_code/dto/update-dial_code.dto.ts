import { PartialType } from '@nestjs/mapped-types';
import { CreateDialCodeDto } from './create-dial_code.dto';

export class UpdateDialCodeDto extends PartialType(CreateDialCodeDto) {
  dial_code: string;
}
