import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { HotelCommentsModule } from './hotel-comments/hotel-comments.module';
import { UsersModule } from './users/users.module';
import { UserRatingModule } from './user-rating/user-rating.module';
import * as dotenv from 'dotenv';
import { FilesModule } from './files/files.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    HotelsModule,
    HotelCommentsModule,
    FilesModule,
    UsersModule,
    UserRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
