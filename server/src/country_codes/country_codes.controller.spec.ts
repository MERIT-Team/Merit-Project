import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodesController } from './country_codes.controller';
import { CountryCodesService } from './country_codes.service';

describe('CountryCodesController', () => {
  let controller: CountryCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryCodesController],
      providers: [CountryCodesService],
    }).compile();

    controller = module.get<CountryCodesController>(CountryCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
