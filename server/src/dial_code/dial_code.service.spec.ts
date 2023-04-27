import { Test, TestingModule } from '@nestjs/testing';
import { DialCodeService } from './dial_code.service';

describe('DialCodeService', () => {
  let service: DialCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialCodeService],
    }).compile();

    service = module.get<DialCodeService>(DialCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
