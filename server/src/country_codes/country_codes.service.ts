import { Injectable } from '@nestjs/common';
import { CreateCountryCodeDto } from './dto/create-country_code.dto';
import { UpdateCountryCodeDto } from './dto/update-country_code.dto';

@Injectable()
export class CountryCodesService {
  create(createCountryCodeDto: CreateCountryCodeDto) {
    return 'This action adds a new countryCode';
  }

  findAll() {
    return `This action returns all countryCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryCode`;
  }

  update(id: number, updateCountryCodeDto: UpdateCountryCodeDto) {
    return `This action updates a #${id} countryCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryCode`;
  }
}
