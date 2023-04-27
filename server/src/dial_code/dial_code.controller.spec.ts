import { Test, TestingModule } from '@nestjs/testing';
import { DialCodeController } from './dial_code.controller';
import { DialCodeService } from './dial_code.service';

describe('DialCodeController', () => {
  let controller: DialCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialCodeController],
      providers: [DialCodeService],
    }).compile();

    controller = module.get<DialCodeController>(DialCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
