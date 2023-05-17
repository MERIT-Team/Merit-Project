import { Module } from '@nestjs/common';
import { HotelCommentsService } from './hotel-comments.service';
import { HotelCommentsController } from './hotel-comments.controller';

@Module({
  controllers: [HotelCommentsController],
  providers: [HotelCommentsService],
})
export class HotelCommentsModule {}
