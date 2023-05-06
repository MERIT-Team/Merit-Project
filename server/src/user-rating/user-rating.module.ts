import { Module } from '@nestjs/common';
import { UserRatingService } from './user-rating.service';
import { UserRatingController } from './user-rating.controller';

@Module({
  controllers: [UserRatingController],
  providers: [UserRatingService]
})
export class UserRatingModule {}
