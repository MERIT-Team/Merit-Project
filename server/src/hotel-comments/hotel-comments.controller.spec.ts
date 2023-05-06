import { Test, TestingModule } from '@nestjs/testing';
import { HotelCommentsController } from './hotel-comments.controller';
import { HotelCommentsService } from './hotel-comments.service';

describe('HotelCommentsController', () => {
  let controller: HotelCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelCommentsController],
      providers: [HotelCommentsService],
    }).compile();

    controller = module.get<HotelCommentsController>(HotelCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
