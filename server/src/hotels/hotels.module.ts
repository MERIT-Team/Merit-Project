import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './entities/hotel.entity';
import {
  HotelComment,
  HotelCommentsSchema,
} from 'src/hotel-comments/entities/hotel-comment.entity';
import {
  UserRating,
  userRatingSchema,
} from 'src/user-rating/entities/user-rating.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hotel.name, schema: HotelSchema },
      { name: HotelComment.name, schema: HotelCommentsSchema },
      { name: UserRating.name, schema: userRatingSchema },
    ]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
  exports: [HotelsService],
})
export class HotelsModule {}
