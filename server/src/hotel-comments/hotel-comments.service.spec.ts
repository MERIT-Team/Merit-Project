import { Test, TestingModule } from '@nestjs/testing';
import { HotelCommentsService } from './hotel-comments.service';

describe('HotelCommentsService', () => {
  let service: HotelCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelCommentsService],
    }).compile();

    service = module.get<HotelCommentsService>(HotelCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
