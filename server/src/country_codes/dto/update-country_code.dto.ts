import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryCodeDto } from './create-country_code.dto';

export class UpdateCountryCodeDto extends PartialType(CreateCountryCodeDto) {}
