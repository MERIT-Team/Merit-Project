import { Module } from '@nestjs/common';
import { CountryCodesService } from './country_codes.service';
import { CountryCodesController } from './country_codes.controller';

@Module({
  controllers: [CountryCodesController],
  providers: [CountryCodesService]
})
export class CountryCodesModule {}
